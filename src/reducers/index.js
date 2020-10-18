import { combineReducers } from 'redux'
import Auth from './Auth'
import Cards from './Cards'
import Collection from './Collection'

const reducers = combineReducers({
  auth: Auth,
  cards: Cards,
  collection: Collection
})

export default reducers
