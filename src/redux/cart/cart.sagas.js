import { all, call, takeLatest, put } from 'redux-saga/effects'

// action types
import UserActionTypes from '../user/user.types'

// actions
import { clearCart } from './cart.actions'

// workers
function* clearAllItemsInShoppingCart() {
	yield put(clearCart())
}

// watchers
export function* onSignOutSuccess() {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearAllItemsInShoppingCart)
}

// export all sagas above
export function* cartSagas() {
	yield all([call(onSignOutSuccess)])
}
