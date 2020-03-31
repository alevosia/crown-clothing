import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

// selectors
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

// components
import withSpinner from '../../components/withSpinner'
import CollectionPage from './collection.component'

const mapStateToProps = createStructuredSelector({
	isLoading: (state) => !selectIsCollectionsLoaded(state),
})

const CollectionContainer = compose(connect(mapStateToProps), withSpinner)(CollectionPage)

export default CollectionContainer
