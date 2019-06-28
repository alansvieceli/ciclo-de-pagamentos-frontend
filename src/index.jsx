import React from 'react'
import ReactDOM from 'react-dom'
import Promise from 'redux-promise'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

const store = applyMiddleware(Promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('app')
)