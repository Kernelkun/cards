import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'reducers'

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const middlewares = []

middlewares.push(thunk)

export const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(...middlewares)))
