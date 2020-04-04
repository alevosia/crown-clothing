import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { fetchCollectionsStart } from '../redux/shop/shop.actions'

// components
import CollectionsOverviewContainer from '../components/collections-overview/CollectionsOverviewContainer'
import CollectionPageContainer from './collection/CollectionContainer'

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])

	return (
		<div>
			<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
			<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
