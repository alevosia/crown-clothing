import React from 'react'
import styled from 'styled-components'

// components
import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

// styled components
const SignInAndSignUpWrapper = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`
const SignInAndSignUpPage = () => {
	return (
		<SignInAndSignUpWrapper>
			<SignIn />
			<SignUp />
		</SignInAndSignUpWrapper>
	)
}

export default SignInAndSignUpPage
