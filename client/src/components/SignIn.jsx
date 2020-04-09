import React, { useState } from 'react'
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

	@media screen and (max-width: 768px) {
		padding: 30px;
	}

	@media screen and (max-width: 425px) {
		width: 100%;
		padding: 10px;
	}
`

const TitleText = styled.h2`
	margin: 10px 0;
`

const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		email: '',
		password: '',
	})

	const { email, password } = userCredentials

	const handleChange = (event) => {
		const { name, value } = event.target
		setUserCredentials({ ...userCredentials, [name]: value })
	}

	const handleSubmit = async (event) => {
		event.preventDefault()
		emailSignInStart(email, password)
	}

	return (
		<SignInContainer>
			<TitleText>I already have an account</TitleText>
			<span>Sign in</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					id='email'
					value={email}
					handleChange={handleChange}
					label='email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					id='password'
					value={password}
					handleChange={handleChange}
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

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
