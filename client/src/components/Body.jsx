import React from 'react'
import styled from 'styled-components'

// styled components
const BodyContainer = styled.div`
	height: auto;
	margin-left: auto;
	margin-right: auto;
`

const Body = (props) => <BodyContainer>{props.children}</BodyContainer>

export default Body
