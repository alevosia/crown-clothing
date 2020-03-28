import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// utils
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

// components
import Header from './components/header/header.component'
import Body from './components/body/body.component'
import Footer from './components/footer/footer.component'

// pages
import HomePage from './pages/home/home.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'
import CheckoutPage from './pages/checkout/checkout.component'

// actions
import { setCurrentUser } from './redux/user/user.actions'

// selectors
import { selectCurrentUser } from './redux/user/user.selectors'

// styles
import './App.css'

class App extends Component {
	unsubscribeFromAuth = null

	componentDidMount() {
		const { setCurrentUser } = this.props
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				// subscribe to changes (display name, email, etc.) on user
				// and update user of app state whenever there is one
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					})
				})
			}
			setCurrentUser(userAuth)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
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
							{this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
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
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
