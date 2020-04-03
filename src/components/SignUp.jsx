import React, { Component } from 'react'
import styled from 'styled-components'

// firebase
import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

// components
import FormInput from './FormInput'
import CustomButton from './CustomButton'

// styled components
const SignUpContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;
`

const TitleText = styled.h2`
	margin: 10px 0;
`

class SignUp extends Component {
	constructor(props) {
		super(props)

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		}
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			[name]: value,
		})
	}

	handleSubmit = async (event) => {
		event.preventDefault()

		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert('Passwords do not match.')
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)
			await createUserProfileDocument(user, { displayName })
		} catch (error) {
			alert(error.message)
		}
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state
		return (
			<SignUpContainer>
				<TitleText>I do not have an account</TitleText>
				<span>Sign up</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						handleChange={this.handleChange}
						label='name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleChange={this.handleChange}
						label='email address'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						handleChange={this.handleChange}
						label='password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						handleChange={this.handleChange}
						label='confirm password'
						required
					/>

					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</SignUpContainer>
		)
	}
}

export default SignUp
