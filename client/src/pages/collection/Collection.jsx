import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// selectors
import { selectCollection } from '../../redux/shop/shop.selectors'

// components
import CollectionItem from '../../components/CollectionItem'

// styled components
const StyledCollectionItem = styled(CollectionItem)``

const CollectionPageWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 425px) {
		align-items: center;
	}
`

const TitleText = styled.h2`
	font-size: 38px;
	margin: 0 auto 30px;
`

const ItemsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-gap: 10px;

	${StyledCollectionItem} {
		margin-bottom: 30px;
	}

	@media screen and (max-width: 425px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;

		${StyledCollectionItem} {
			margin-bottom: 10px;
		}
	}
`

const CollectionPage = ({ collection }) => {
	const { title, items } = collection
	return (
		<CollectionPageWrapper>
			<TitleText>{title}</TitleText>
			<ItemsContainer>
				{items.map((item) => (
					<StyledCollectionItem key={item.id} item={item} />
				))}
			</ItemsContainer>
		</CollectionPageWrapper>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
})

export default connect(mapStateToProps)(CollectionPage)
