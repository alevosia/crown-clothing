import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// actions
import { checkUserSession } from './redux/user/user.actions'

// selectors
import { selectCurrentUser } from './redux/user/user.selectors'

// pages
import HomePage from './pages/Home'
import SignInAndSignUpPageContainer from './pages/sign-in-and-sign-up/SignInAndSignUpContainer'
import ShopPage from './pages/Shop'
import CheckoutPage from './pages/Checkout'

// components
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

// styles
import './App.css'

class App extends Component {
	componentDidMount() {
		const { checkUserSession } = this.props
		checkUserSession()
	}

	render() {
		return (
			<div>
				<Header />
				<Body>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/shop' component={ShopPage} />
						<Route exact path='/checkout' component={CheckoutPage} />
						<Route exact path='/signin'>
							{this.props.currentUser ? (
								<Redirect to='/' />
							) : (
								<SignInAndSignUpPageContainer />
							)}
						</Route>
					</Switch>
				</Body>
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
