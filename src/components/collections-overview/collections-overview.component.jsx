import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// selectors
import { selectCollectionsAsArray } from '../../redux/shop/shop.selectors'

// components
import CollectionPreview from '../collection-preview/collection-preview.component'

//styles
import './collections-overview.styles.scss'

const CollectionsOverview = ({ collections }) => {
	return (
		<div className='collections-overview'>
			{collections.map((collection) => {
				return <CollectionPreview key={collection.id} {...collection} />
			})}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsAsArray,
})

export default connect(mapStateToProps)(CollectionsOverview)
