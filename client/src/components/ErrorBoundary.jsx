import React, { Component } from 'react'
import styled from 'styled-components'

// styled components
const ErrorImageOverlay = styled.div`
	height: auto;
	min-height: 75vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		min-height: 80vh;
	}
`

const ErrorImageContainer = styled.div`
	display: inline-block;
	background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`

const ErrorImageText = styled.h2`
	font-size: 28px;
	color: black;
`

const HomeButton = styled.a`
	padding: 5px 25px;
	text-decoration: none;
	text-align: center;
	color: white;
	background: #161514;
	margin-top: 10px;

	&:hover {
		color: #161514;
		background: white;
		border: 1px solid #161514;
	}
`

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasErrored: false,
		}
	}

	static getDerivedStateFromError(error) {
		return { hasErrored: true }
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl={'https://i.imgur.com/oCkEbrA.png'} />
					<ErrorImageText>Something went wrong...</ErrorImageText>
					<HomeButton href='/'>Go Home</HomeButton>
				</ErrorImageOverlay>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
