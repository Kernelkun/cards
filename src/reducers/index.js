import { combineReducers } from 'redux'
import Cards from './Cards'
import Collection from './Collection'

const reducers = combineReducers({
  cards: Cards,
  collection: Collection
})

export default reducers
