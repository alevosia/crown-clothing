import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

// actions
import { clearItemFromCart, addItem, removeItem } from '../redux/cart/cart.actions'

// styled components
const CheckoutItemWrapper = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`

const ImageContainer = styled.div`
	width: 23%;
	padding-right: 15px;

	img {
		width: 100%;
		height: 100%;
	}

	@media screen and (max-width: 425px) {
		padding-right: 10px;
	}
`

const ColumnStyles = css`
	width: 23%;
	text-align: center;

	@media screen and (max-width: 425px) {
		font-size: 16px;
	}
`
const NameContainer = styled.span`
	${ColumnStyles}
`

const PriceContainer = styled.span`
	${ColumnStyles}
`

const QuantityContainer = styled.div`
	display: flex;
	justify-content: center;
	${ColumnStyles}
`

const QuantityValueText = styled.span`
	margin: 0 6px;
`

const ArrowIcon = styled.div`
	cursor: pointer;
	padding-left: 6px;
	padding-right: 6px;

	@media screen and (max-width: 425px) {
		padding-left: 3px;
		padding-right: 3px;
	}
`

const RemoveButton = styled.span`
	padding-left: 20px;
	font-weight: bolder;
	text-align: center;
	cursor: pointer;

	@media screen and (max-width: 425px) {
		padding-left: 0;
	}
`

const CheckoutItem = ({ item, clearItemFromCart, addItem, removeItem }) => {
	const { name, imageUrl, quantity, price } = item

	return (
		<CheckoutItemWrapper>
			<ImageContainer>
				<img src={imageUrl} alt={name} />
			</ImageContainer>
			<NameContainer>{name}</NameContainer>
			<QuantityContainer>
				<ArrowIcon onClick={() => removeItem(item)}>&#10094;</ArrowIcon>
				<QuantityValueText>{quantity}</QuantityValueText>
				<ArrowIcon onClick={() => addItem(item)}>&#10095;</ArrowIcon>
			</QuantityContainer>
			<PriceContainer>{price}</PriceContainer>
			<RemoveButton onClick={() => clearItemFromCart(item)}>&#10005;</RemoveButton>
		</CheckoutItemWrapper>
	)
}

const mapDispatchToProps = (dispatch) => ({
	clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
	addItem: (item) => dispatch(addItem(item)),
	removeItem: (item) => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
