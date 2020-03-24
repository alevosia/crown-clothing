import React from 'react'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { getTotalCartItems } from '../../redux/cart/cart.utils'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ cartItems, toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> {getTotalCartItems(cartItems)} </span>
	</div>
)

const mapStateToTops = (state) => ({
	cartItems: state.cart.cartItems,
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToTops, mapDispatchToProps)(CartIcon)
