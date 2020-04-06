import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

// actions
import { toggleCartHidden } from '../redux/cart/cart.actions'

// selectors
import { selectCartItems } from '../redux/cart/cart.selectors'

// components
import CustomButton from './CustomButton'
import CartItem from './CartItem'

// styled components
const CartDropdownWrapper = styled.div`
	position: absolute;
	width: 250px;
	height: 350px;
	display: flex;
	flex-direction: column;
	padding: 10px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;

	button {
		margin-top: auto;
	}
`

const CartItemsContainer = styled.div`
	height: 260px;
	display: flex;
	flex-direction: column;
	overflow: auto;
`

const EmptyMessage = styled.span`
	font-size: 18px;
	margin: auto auto;
`

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<CartDropdownWrapper>
			<CartItemsContainer>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} item={item} />)
				) : (
					<EmptyMessage>Your cart is empty</EmptyMessage>
				)}
			</CartItemsContainer>
			<CustomButton
				onClick={() => {
					history.push('/checkout')
					dispatch(toggleCartHidden())
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownWrapper>
	)
}

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
