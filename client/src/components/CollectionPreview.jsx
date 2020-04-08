import React from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

// components
import CollectionItem from './CollectionItem'

// styled components
const CollectionPreviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	@media screen and (max-width: 425px) {
		align-items: center;
	}
`

const TitleText = styled.h1`
	font-size: 28px;
	margin-bottom: 25px;

	@media screen and (max-width: 425px) {
		margin-bottom: 10px;
	}
`

const PreviewContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 425px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 15px;
	}
`

const CollectionPreview = ({ title, items, history }) => (
	<CollectionPreviewWrapper>
		<TitleText onClick={() => history.push(`/shop/${title.toLowerCase()}`)}>
			{title.toUpperCase()}
		</TitleText>
		<PreviewContainer>
			{items
				.filter((item, idx) => idx < 4)
				.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
		</PreviewContainer>
	</CollectionPreviewWrapper>
)

export default withRouter(CollectionPreview)
