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

	@media screen and (max-width: 425px) {
		width: 100%;
		margin: 0;
		min-width: unset;
		padding: 10px;
	}
`

const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}

	@media screen and (max-width: 425px) {
		font-size: 14px;

		&:last-child {
			width: unset;
		}
	}
`

const CheckOutHeaderContainer = styled.div`
	font-size: 20px;
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;

	${HeaderBlock} ~ :not(:first-child) {
		text-align: center;
	}

	button {
		margin-left: auto;
		margin-top: 40px;
	}

	@media screen and (max-width: 425px) {
		font-size: 16px;
	}
`

const TotalPriceContainer = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;

	@media screen and (max-width: 425px) {
		font-size: 24px;
		margin-top: 10px;
	}
`

const TestWarningContainer = styled.div`
	text-align: center;
	margin-top: 40px;
	margin-bottom: 20px;
	font-size: 24px;
	color: red;

	@media screen and (max-width: 425px) {
		margin-top: 10px;
		margin-bottom: 10px;
		font-size: 16px;
	}
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
