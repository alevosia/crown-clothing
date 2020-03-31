import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// utils
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

// actions
import { updateCollections } from '../../redux/shop/shop.actions'

// components
import withSpinner from '../../components/withSpinner'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)

class ShopPage extends Component {
	state = {
		isLoading: true,
	}

	unsubscribeFromSnapshot = null

	componentDidMount() {
		const { updateCollections } = this.props
		const collectionsRef = firestore.collection('collections')

		collectionsRef.get().then(async (collectionsSnapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(collectionsSnapshot)
			updateCollections(collectionsMap)
			this.setState({ isLoading: false })
		})
	}

	render() {
		const { match } = this.props
		const { isLoading } = this.state

		return (
			<div className='shop-page'>
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={isLoading} {...props} />
					)}
				/>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
