import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

import store from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<HashRouter basename='/'>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
)
