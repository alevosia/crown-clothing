import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

// assets
import { ReactComponent as ShoppingIconImage } from '../assets/shopping-bag.svg'

// actions
import { toggleCartHidden } from '../redux/cart/cart.actions'

// seclectors
import { selectCartItemsCount } from '../redux/cart/cart.selectors'

// styled components
const CartIconWrapper = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

const ShoppingIcon = styled(ShoppingIconImage)`
	width: 32px;
	height: 32px;
`
const ItemCount = styled.span`
	position: absolute;
	font-size: 15px;
	font-weight: bold;
	bottom: 9px;
`

const CartIcon = ({ itemCount, toggleCartHidden }) => (
	<CartIconWrapper onClick={toggleCartHidden}>
		<ShoppingIcon />
		<ItemCount>{itemCount < 100 ? itemCount : '99+'}</ItemCount>
	</CartIconWrapper>
)

const mapStateToTops = createStructuredSelector({
	itemCount: selectCartItemsCount,
})

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
})

export default connect(mapStateToTops, mapDispatchToProps)(CartIcon)
