import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { fetchCollectionsStart } from '../redux/shop/shop.actions'

// components
import Spinner from '../components/Spinner'

/* eslint-disable import/first */
const CollectionsOverviewContainer = lazy(() =>
	import('../components/collections-overview/CollectionsOverviewContainer')
)
const CollectionPageContainer = lazy(() => import('./collection/CollectionContainer'))

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart()
	}, [fetchCollectionsStart])

	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</Suspense>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
