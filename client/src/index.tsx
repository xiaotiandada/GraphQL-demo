import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
} from '@apollo/client'
const client = new ApolloClient({
	uri: process.env.REACT_APP_API_GRAPHQL,
	cache: new InMemoryCache()
})

import './i18n'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store/index'


const persistor = persistStore(store)

ReactDOM.render(
	<StrictMode>
		<ApolloProvider client={client}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<App />
				</PersistGate>
			</Provider>
		</ApolloProvider>
	</StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
