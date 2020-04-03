import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// actions
import { emailSignInStart, googleSignInStart } from '../redux/user/user.actions'

// components
import FormInput from './FormInput'
import CustomButton from './CustomButton'

// styled components
const SignInContainer = styled.div`
	width: 400px;
	display: flex;
	flex-direction: column;
`

const TitleText = styled.h2`
	margin: 10px 0;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleChange = (event) => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	handleSubmit = async (event) => {
		event.preventDefault()

		const { email, password } = this.state
		const { emailSignInStart } = this.props

		emailSignInStart(email, password)
	}

	render() {
		const { googleSignInStart } = this.props

		return (
			<SignInContainer>
				<TitleText>I already have an account</TitleText>
				<span>Sign in</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type='email'
						name='email'
						id='email'
						value={this.state.email}
						handleChange={this.handleChange}
						label='email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						id='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='password'
						required
					/>

					<ButtonsContainer>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</ButtonsContainer>
				</form>
			</SignInContainer>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
