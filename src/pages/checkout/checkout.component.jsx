import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// styles
import './checkout.styles.scss'

// selectors
import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'

// components
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, cartTotalPrice }) => (
	<div className='checkout-page'>
		<div className='checkout-header'>
			<div className='header-block'>
				<span>Product</span>
			</div>
			<div className='header-block'>
				<span>Description</span>
			</div>
			<div className='header-block'>
				<span>Quantity</span>
			</div>
			<div className='header-block'>
				<span>Price</span>
			</div>
			<div className='header-block'>
				<span>Remove</span>
			</div>
		</div>

		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} item={cartItem} />
		))}

		<div className='total'>
			<span>TOTAL: ${cartTotalPrice}</span>
		</div>
	</div>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotalPrice: selectCartTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
