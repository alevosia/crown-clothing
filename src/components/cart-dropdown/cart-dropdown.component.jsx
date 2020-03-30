import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// actions
import { toggleCartHidden } from '../../redux/cart/cart.actions'

// selectors
import { selectCartItems } from '../../redux/cart/cart.selectors'

// components
import CustomButton from '../custom-button/CustomButton.jsx'
import CartItem from '../cart-item/cart-item.component'

// styles
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push('/checkout')
					dispatch(toggleCartHidden())
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
