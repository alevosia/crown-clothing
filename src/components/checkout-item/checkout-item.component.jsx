import React from 'react'
import { connect } from 'react-redux'

// actions
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

// styles
import './checkout-item.styles.scss'

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = item

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => removeItem(item)}>
					&#10094;
				</div>
				<span className='value'>{quantity}</span>
				<div className='arrow' onClick={() => addItem(item)}>
					&#10095;
				</div>
			</span>
			<span className='price'>{price}</span>
			<span className='remove-button' onClick={() => clearItemFromCart(item)}>
				&#10005;
			</span>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
