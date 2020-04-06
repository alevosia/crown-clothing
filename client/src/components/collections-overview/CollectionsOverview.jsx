import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

// selectors
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors'

// components
import CollectionPreview from '../CollectionPreview'

//styled components
const CollectionsOverviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const CollectionsOverview = ({ collections }) => {
	return (
		<CollectionsOverviewWrapper>
			{collections.map((collection) => {
				return <CollectionPreview key={collection.id} {...collection} />
			})}
		</CollectionsOverviewWrapper>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsAsArray,
})

export default connect(mapStateToProps)(CollectionsOverview)
