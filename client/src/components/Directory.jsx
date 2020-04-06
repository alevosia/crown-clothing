import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import styled from 'styled-components'

// selectors
import { selectDirectorySections } from '../redux/directory/directory.selectors'

// components
import MenuItem from './MenuItem'

// styled components
const DirectoryMenuWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`

const Directory = ({ directorySections }) => (
	<DirectoryMenuWrapper>
		{directorySections.map(({ id, ...otherSectionProps }) => (
			<MenuItem key={id} {...otherSectionProps} />
		))}
	</DirectoryMenuWrapper>
)

const mapStateToProps = createStructuredSelector({
	directorySections: selectDirectorySections,
})

export default connect(mapStateToProps)(Directory)
