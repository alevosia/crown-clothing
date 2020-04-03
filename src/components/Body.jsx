import React from 'react'
import styled from 'styled-components'

// styled components
const BodyContainer = styled.div`
	margin-left: auto;
	margin-right: auto;
	overflow-x: hidden;
`

const Body = (props) => <BodyContainer>{props.children}</BodyContainer>

export default Body
