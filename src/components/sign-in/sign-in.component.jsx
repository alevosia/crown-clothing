import React, { Component } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}

	handleChange = (event) => {
		const { value, name } = event.target

		console.log(`${name}: ${value}`)
		this.setState({ [name]: value })
	}

	handleSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>

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

					<CustomButton type='submit'>SIGN IN</CustomButton>
				</form>
			</div>
		)
	}
}

export default SignIn
