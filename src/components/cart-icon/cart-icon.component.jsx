import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// assets
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

// redux
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

// styles
import './cart-icon.styles.scss'

const CartIcon = ({ itemCount, toggleCartHidden }) => (
	<div className='cart-icon' onClick={toggleCartHidden}>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'> {itemCount} </span>
	</div>
)

const mapStateToTops = createStructuredSelector({
	itemCount: selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToTops, mapDispatchToProps)(CartIcon)
