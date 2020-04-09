import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// actions
import { signUpStart } from '../redux/user/user.actions'

// components
import FormInput from './FormInput'
import CustomButton from './CustomButton'

// styled components
const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	@media screen and (max-width: 768px) {
		width: 400px;
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

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const { displayName, email, password, confirmPassword } = userCredentials

	const handleChange = (event) => {
		const { name, value } = event.target

		setUserCredentials({
			...userCredentials,
			[name]: value,
		})
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		if (password !== confirmPassword) {
			alert('Passwords do not match')
			return
		}

		signUpStart({ displayName, email, password })
	}
	return (
		<SignUpContainer>
			<TitleText>I do not have an account</TitleText>
			<span>Sign up</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					handleChange={handleChange}
					label='name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					handleChange={handleChange}
					label='email address'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					handleChange={handleChange}
					label='password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					handleChange={handleChange}
					label='confirm password'
					required
				/>

				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignUpContainer>
	)
}

const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
})

export default connect(null, mapDispatchToProps)(SignUp)
