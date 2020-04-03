import UserActionTypes from './user.types'

// signin
export const emailSignInStart = (credentials) => ({
	type: UserActionTypes.EMAIL_SIGN_IN_START,
	payload: credentials,
})

export const googleSignInStart = () => ({
	type: UserActionTypes.GOOGLE_SIGN_IN_START,
})

export const signInSuccess = (user) => ({
	type: UserActionTypes.SIGN_IN_SUCCESS,
	payload: user,
})

export const signInFailure = (error) => ({
	type: UserActionTypes.SIGN_IN_FAILURE,
	payload: error,
})

// persistence
export const checkUserSession = () => ({
	type: UserActionTypes.CHECK_USER_SESSION,
})

// signout
export const signOutStart = () => ({
	type: UserActionTypes.SIGN_OUT_START,
})

export const signOutSucess = () => ({
	type: UserActionTypes.SIGN_OUT_SUCCESS,
})

export const signOutFailure = (error) => ({
	type: UserActionTypes.SIGN_OUT_FAILURE,
	payload: error,
})
