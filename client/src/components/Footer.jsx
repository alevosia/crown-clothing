import React from 'react'
import styled from 'styled-components'

// styled components
const FooterContainer = styled.div`
	width: 100%;
	text-align: center;
	padding: 30px;
	letter-spacing: 2px;

	@media screen and (max-width: 768px) {
		padding: 10px;
	}
`

const Footer = () => (
	<FooterContainer>
		<span>© 2020 CROWN Clothing</span>
	</FooterContainer>
)

export default Footer
