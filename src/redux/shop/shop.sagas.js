import { takeLatest, call, put } from 'redux-saga/effects'

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions'
import ShopActionTypes from './shop.types'

export function* fetchCollectionsAsync() {
	try {
		const collectionsRef = firestore.collection('collections')
		const collectionsSnapshot = yield collectionsRef.get()
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, collectionsSnapshot)
		yield put(fetchCollectionsSuccess(collectionsMap))
	} catch (error) {
		yield put(fetchCollectionsFailure(error.message))
	}
}

export function* fetchCollectionsStart() {
	yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
