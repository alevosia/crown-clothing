import { CartActionTypes } from './cart.types'

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item,
})

export const incrementItemQuantity = (item) => ({
	type: CartActionTypes.INCREMENT_ITEM_QUANTITY,
	payload: item,
})

export const decrementItemQuantity = (item) => ({
	type: CartActionTypes.DECREMENT_ITEM_QUANTITY,
	payload: item,
})

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM_FROM_CART,
	payload: item,
})
