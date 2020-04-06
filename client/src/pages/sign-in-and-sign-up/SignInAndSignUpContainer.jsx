import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// selectors
import { selectIsUserSigningIn } from '../../redux/user/user.selectors'

// components
import withSpinner from '../../components/hoc/withSpinner'
import SignInAndSignUpPage from './SignInAndSignUp'

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsUserSigningIn,
})

const SignInAndSignUpContainer = compose(connect(mapStateToProps), withSpinner)(SignInAndSignUpPage)

export default SignInAndSignUpContainer
