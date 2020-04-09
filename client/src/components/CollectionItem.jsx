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

	@media screen and (max-width: 425px) {
		margin-bottom: 0;
	}
`

const AddButton = styled(CustomButton)`
	min-width: unset;
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 255px;
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		opacity: 0.9;
		padding: 0;
	}

	@media screen and (max-width: 425px) {
		top: 275px;
	}
`

const CollectionItemWrapper = styled.div`
	width: 22vw;
	display: flex;
	flex-direction: column;
	height: 350px;
	align-items: center;
	position: relative;
	margin-bottom: 15px;

	&:hover {
		${ImageContainer} {
			opacity: 0.8;
		}

		${AddButton} {
			opacity: 0.85;
			display: block;
		}
	}

	@media screen and (max-width: 768px) {
		&:hover {
			${ImageContainer} {
				opacity: unset;
			}

			${AddButton} {
				opacity: unset;
				display: block;
			}
		}
	}

	@media screen and (max-width: 425px) {
		width: 45vw;
		margin-bottom: 5px;
	}
`

const CollectionFooterContainer = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;

	@media screen and (max-width: 425px) {
		font-size: 14px;
	}
`

const NameText = styled.span`
	width: 85%;
`

const PriceText = styled.span`
	width: 15%;
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
			<AddButton inverted onClick={() => addItem(item)}>
				Add to cart
			</AddButton>
		</CollectionItemWrapper>
	)
}

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
})

export default connect(null, mapDispatchToProps)(CollectionItem)
