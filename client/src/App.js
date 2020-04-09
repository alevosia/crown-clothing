import React, { useEffect, lazy, Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// actions
import { checkUserSession } from './redux/user/user.actions'

// selectors
import { selectCurrentUser } from './redux/user/user.selectors'

// components
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import ErrorBoundary from './components/ErrorBoundary'

// global styles
import { GlobalStyles } from './global.styles'

/* eslint-disable import/first */
const HomePage = lazy(() => import('./pages/Home'))
const ShopPage = lazy(() => import('./pages/Shop'))
const CheckoutPage = lazy(() => import('./pages/Checkout'))
const SignInAndSignUpPageContainer = lazy(() =>
	import('./pages/sign-in-and-sign-up/SignInAndSignUpContainer')
)

const App = ({ currentUser, checkUserSession }) => {
	useEffect(() => {
		checkUserSession()
	}, [checkUserSession])

	return (
		<div className='app'>
			<GlobalStyles />
			<Header />
			<Body>
				<Switch>
					<ErrorBoundary>
						<Suspense fallback={<Spinner />}>
							<Route exact path='/' component={HomePage} />
							<Route path='/shop' component={ShopPage} />
							<Route exact path='/checkout' component={CheckoutPage} />
							<Route exact path='/signin'>
								{currentUser ? (
									<Redirect to='/' />
								) : (
									<SignInAndSignUpPageContainer />
								)}
							</Route>
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</Body>
			<Footer />
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
