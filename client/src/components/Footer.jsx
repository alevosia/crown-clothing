import React from 'react'
import styled from 'styled-components'

// styled components
const FooterContainer = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 60px;
	letter-spacing: 2px;
`

const Footer = () => (
	<FooterContainer>
		<span>© 2020 CROWN Clothing</span>
	</FooterContainer>
)

export default Footer
