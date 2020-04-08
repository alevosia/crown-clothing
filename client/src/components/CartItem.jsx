import React from 'react'
import styled from 'styled-components'

// styled components
const CartItemWrapper = styled.div`
	width: 100%;
	display: flex;
	height: 80px;
	margin-bottom: 15px;
	img {
		width: 30%;
	}

	@media screen and (max-width: 425px) {
		img {
			width: 40%;
		}
	}
`

const ItemDetailsContainer = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 10px 20px;

	@media screen and (max-width: 425px) {
		padding: 5px 10px;
	}
`

const NameText = styled.span`
	font-size: 16px;
`
const PriceText = styled.span``

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemWrapper>
		<img src={imageUrl} alt='item' />
		<ItemDetailsContainer>
			<NameText>{name}</NameText>
			<PriceText>
				{quantity} x ${price}
			</PriceText>
		</ItemDetailsContainer>
	</CartItemWrapper>
)

export default CartItem
