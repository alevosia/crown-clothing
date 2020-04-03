import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

// selectors
import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors'

// components
import withSpinner from '../hoc/withSpinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetchingCollections,
})

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
