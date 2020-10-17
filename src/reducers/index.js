import { combineReducers } from 'redux'
import Auth from './Auth'
import Cards from './Cards'

const reducers = combineReducers({
  auth: Auth,
  cards: Cards
})

export default reducers
