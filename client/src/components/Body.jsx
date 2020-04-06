import React from 'react'
import styled from 'styled-components'

// styled components
const BodyContainer = styled.div`
	height: auto;
	max-width: 1200px;
	margin-left: auto;
	margin-right: auto;
`

const Body = (props) => <BodyContainer>{props.children}</BodyContainer>

export default Body
