import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

// selectors
import { selectCartItems, selectCartTotalPrice } from '../redux/cart/cart.selectors'

// components
import CheckoutItem from '../components/CheckoutItem'
import StripeCheckoutButton from '../components/StripeCheckoutButton'

// styled components
const CheckoutPageWrapper = styled.div`
	width: 55%;
	min-width: 650px;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`

const CheckOutHeaderContainer = styled.div`
	font-size: 20px;
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;

	:not(:first-child) {
		text-align: center;
	}

	button {
		margin-left: auto;
		margin-top: 40px;
	}
`

const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`

const TotalPriceContainer = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`

const TestWarningContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	font-size: 24px;
	color: red;
`

const CheckoutPage = ({ cartItems, cartTotalPrice }) => (
	<CheckoutPageWrapper>
		<CheckOutHeaderContainer>
			<HeaderBlock>
				<span>Product</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Description</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Quantity</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Price</span>
			</HeaderBlock>
			<HeaderBlock>
				<span>Remove</span>
			</HeaderBlock>
		</CheckOutHeaderContainer>

		{cartItems.map((cartItem) => (
			<CheckoutItem key={cartItem.id} item={cartItem} />
		))}

		<TotalPriceContainer>
			<span>TOTAL: ${cartTotalPrice}</span>
		</TotalPriceContainer>

		<TestWarningContainer>
			<span>*Please use the following test credit card for payments*</span>
			<br />
			<span>4242 4242 4242 4242 - Exp: 01/21 - CVV: 123</span>
		</TestWarningContainer>

		<StripeCheckoutButton price={cartTotalPrice} />
	</CheckoutPageWrapper>
)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	cartTotalPrice: selectCartTotalPrice,
})

export default connect(mapStateToProps)(CheckoutPage)
