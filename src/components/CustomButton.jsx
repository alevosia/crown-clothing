import React from 'react'
import styled, { css } from 'styled-components'

// styles
const buttonStyles = css`
	color: white;
	background-color: black;
	border: 1px solid black;

	&:hover {
		background-color: white;
		color: black;
	}
`
const invertedButtonStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`

const googleSigninStyles = css`
	background-color: #4285f4;
	color: white;
	border: 1px solid #4285f4;

	&:hover {
		background-color: #1c67df;
	}
`

const getButtonStyles = (props) =>
	props.inverted ? invertedButtonStyles : props.isGoogleSignIn ? googleSigninStyles : buttonStyles

// styled components
const CustomButtonContainer = styled.button`
	cursor: pointer;
	font-size: 15px;
	font-family: 'Open Sans', sans-serif;
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 25px 0 25px;
	text-transform: uppercase;
	font-weight: bold;
	display: flex;
	justify-content: center;

	${getButtonStyles}
`

const CustomButton = ({ children, ...props }) => (
	<CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CustomButton
