import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { getServiceClientMiddleware } from 'support/network/NetworkMiddleware'
import reducers from '../reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const BASE_URL = process.env.REACT_APP_API_REST_DNS

const getNetworkMiddleware = getServiceClientMiddleware(BASE_URL)

const middlewares = []

middlewares.push(thunk)
middlewares.push(getNetworkMiddleware)

if (process.env.REACT_APP_REDUX_LOGGER_ENABLED === 'true') {
  middlewares.push(logger)
}

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)))
