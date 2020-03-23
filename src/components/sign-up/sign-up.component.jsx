import React, { Component } from 'react'

import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

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
			<div className='sign-up'>
				<h2 className='title'>I do not have an account</h2>
				<span>Sign up</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						handleChange={this.handleChange}
						label='Name'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						handleChange={this.handleChange}
						label='Email Address'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						handleChange={this.handleChange}
						label='Password'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						handleChange={this.handleChange}
						label='Confirm Password'
						required
					/>

					<CustomButton type='submit'>SIGN UP</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignUp
