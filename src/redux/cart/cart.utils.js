export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem, idx) => cartItem.id === cartItemToAdd.id)

	if (existingCartItem) {
		return cartItems.map((cartItem) =>
			cartItem.id === cartItemToAdd.id
				? { ...cartItem, quantity: cartItem.quantity + 1 }
				: cartItem
		)
	}

	// new item
	return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const getTotalCartItems = (cartItems) =>
	cartItems.reduce((prevTotal, currentItem) => prevTotal + currentItem.quantity, 0)
