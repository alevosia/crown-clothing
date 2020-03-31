import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

// actions
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'

// components
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionPageContainer from '../collection/collection.container'

class ShopPage extends Component {
	componentDidMount() {
		const { fetchCollections } = this.props
		fetchCollections()
	}

	render() {
		const { match } = this.props

		return (
			<div className='shop-page'>
				<Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
				<Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
})

export default connect(null, mapDispatchToProps)(ShopPage)
