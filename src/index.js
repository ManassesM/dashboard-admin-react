import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

import './assets/css/index.css'
import './assets/css/grid.css'

import reportWebVitals from './reportWebVitals'
import Layout from './components/layout/Layout'

const store = createStore(rootReducer)

document.title = 'ManaDev'

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Layout />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
