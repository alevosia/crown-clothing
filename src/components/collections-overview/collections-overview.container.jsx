import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

// selectors
import { selectIsFetchingCollections } from '../../redux/shop/shop.selectors'

// components
import withSpinner from '../../components/withSpinner'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsFetchingCollections,
})

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	withSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer
