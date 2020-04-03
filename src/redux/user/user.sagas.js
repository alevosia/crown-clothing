import { takeLatest, put, call, all } from 'redux-saga/effects'

import {
	auth,
	googleProvider,
	createUserProfileDocument,
	getCurrentUser,
} from '../../firebase/firebase.utils'

import UserActionTypes from './user.types'
import { signInSuccess, signInFailure, signOutSucess, signOutFailure } from './user.actions'

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		const userRef = yield call(createUserProfileDocument, userAuth)
		const userSnapshot = yield userRef.get()
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (error) {
		yield put(signInFailure(error))
	}
}

// email signin
function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onEmailSignInStart() {
	yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, (credentials) =>
		signInWithEmail(credentials)
	)
}

// google signin
function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider)
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onGoogleSignInStart() {
	yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// persistence
function* isUserAuthenticated() {
	try {
		const user = yield getCurrentUser()
		if (!user) return null
		yield getSnapshotFromUserAuth(user)
	} catch (error) {
		yield put(signInFailure(error))
	}
}

export function* onCheckUserSession() {
	yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

// sign out
export function* signoutUser() {
	try {
		yield auth.signOut()
		yield put(signOutSucess())
	} catch (error) {
		yield put(signOutFailure(error))
	}
}

export function* onSignoutUserStart() {
	yield takeLatest(UserActionTypes.SIGN_OUT_START, signoutUser)
}

// export all watcher sagas from above
export function* userSagas() {
	yield all([
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onCheckUserSession),
		call(onSignoutUserStart),
	])
}
