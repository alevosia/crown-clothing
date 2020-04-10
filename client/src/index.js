import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import * as serviceWorker from './serviceWorker'

// redux store
import { store, persistor } from './redux/store'

// styles
import './index.css'

// components
import App from './App'

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter basename='/'>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.register()
