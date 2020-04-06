import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// styles
import './index.css'

// components
import App from './App'

// redux store
import { store, persistor } from './redux/store'

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
