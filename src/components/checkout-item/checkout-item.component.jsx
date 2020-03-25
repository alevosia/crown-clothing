import React from 'react'
import { connect } from 'react-redux'

import './checkout-item.styles.scss'

// actions
import { clearItemFromCart } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, dispatch }) => {
	const { imageUrl, name, quantity, price } = item

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt={name} />
			</div>
			<div className='name'>
				<span>{name}</span>
			</div>
			<div className='quantity'>
				<span>{quantity}</span>
			</div>
			<div className='price'>
				<span>{price}</span>
			</div>
			<span className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>
				&#10005;
			</span>
		</div>
	)
}

export default connect()(CheckoutItem)
