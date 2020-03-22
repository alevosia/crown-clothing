import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Header from './components/header/header.component'
import HomePage from './pages/home/home.component'
import AuthPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'

import { auth } from './firebase/firebase.utils'

class App extends Component {
	constructor() {
		super()

		this.state = {
			user: null,
		}
	}

	unsubscribeFromAuth = null

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
			this.setState({ user: user })
			console.log(user)
		})
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth()
		console.log('Unsubscribed from Auth')
	}

	render() {
		return (
			<div>
				<Header user={this.state.user} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/signin' component={AuthPage} />
				</Switch>
			</div>
		)
	}
}

export default App
