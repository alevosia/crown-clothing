import React from 'react'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'

import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

const CartIcon = ({ itemCount, toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> {itemCount} </span>
	</div>
)

const mapStateToTops = (state) => ({
	itemCount: selectCartItemsCount(state),
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToTops, mapDispatchToProps)(CartIcon)
