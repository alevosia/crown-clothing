import React, { Component } from 'react'

// firbase
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'

// components
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/CustomButton'

// styles
import './sign-in.styles.scss'

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

		try {
			await auth.signInWithEmailAndPassword(email, password)
		} catch (error) {
			alert(error.message)
		}
	}

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>
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

					<div className='buttons'>
						<CustomButton type='submit'>Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignIn
