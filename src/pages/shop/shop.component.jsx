import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// actions
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

// selectors
import {
	selectIsFetchingCollections,
	selectIsCollectionsLoaded,
} from '../../redux/shop/shop.selectors'

// components
import withSpinner from '../../components/withSpinner'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollections } = this.props
		fetchCollections()
	}

	render() {
		const { match, isFetchingCollections, isCollectionsLoaded } = this.props

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner
							isLoading={isFetchingCollections}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
					)}
				/>
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	isFetchingCollections: selectIsFetchingCollections,
	isCollectionsLoaded: selectIsCollectionsLoaded,
})

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)
