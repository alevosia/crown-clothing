import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

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
			} else {
				setCurrentUser(null)
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/shop'>
						<ShopPage />
					</Route>
					<Route path='/signin'>
						{this.props.currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />}
					</Route>
				</Switch>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(null, mapDispatchToProps)(App)
