import React from 'react'
import { withRouter } from 'react-router-dom'

// components
import CollectionItem from '../collection-item/collection-item.component'

// styles
import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items, history }) => (
	<div className='collection-preview'>
		<h1 className='title' onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
			{title.toUpperCase()}
		</h1>
		<div className='preview'>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</div>
	</div>
)

export default withRouter(CollectionPreview)
