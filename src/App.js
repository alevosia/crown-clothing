import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'

import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
	constructor() {
		super()

		this.state = {
			user: null,
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth)

				// subscribe to changes (display name, email, etc.) on user
				// and update user of app state whenever there is one
				userRef.onSnapshot((snapShot) => {
					this.setState({
						user: {
							id: snapShot.id,
							...snapShot.data(),
						},
					})
				})
			} else {
				this.setState({ user: null })
			}
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
	}

	render() {
		return (
			<div>
				<Header user={this.state.user} />
				<Switch>
					<Route exact path='/'>
						<HomePage />
					</Route>
					<Route exact path='/shop'>
						<ShopPage />
					</Route>
					<Route path='/signin'>
						{this.state.user ? <Redirect to='/' /> : <SignInAndSignUpPage />}
					</Route>
				</Switch>
			</div>
		)
	}
}

export default App
