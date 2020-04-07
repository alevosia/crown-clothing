import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// actions
import { addItem } from '../redux/cart/cart.actions.js'

// components
import CustomButton from './CustomButton'

// styled components
const ImageContainer = styled.div`
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`
const CollectionItemWrapper = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;

	button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 255px;
		display: none;
	}

	&:hover {
		${ImageContainer} {
			opacity: 0.8;
		}

		button {
			opacity: 0.85;
			display: block;
		}
	}
`

const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`

const NameText = styled.span`
	width: 90%;
	margin-bottom: 15px;
`

const PriceText = styled.span`
	width: 10%;
	text-align: right;
`

const CollectionItem = ({ item, addItem, className }) => {
	const { name, price, imageUrl } = item

	return (
		<CollectionItemWrapper className={className}>
			<ImageContainer
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<CollectionFooterContainer>
				<NameText>{name}</NameText>
				<PriceText>${price}</PriceText>
			</CollectionFooterContainer>
			<CustomButton inverted onClick={() => addItem(item)}>
				Add to cart
			</CustomButton>
		</CollectionItemWrapper>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
