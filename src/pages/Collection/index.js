import { connect } from 'react-redux'
import { setFilter, setSearch } from 'actions/sync/Cards'
import { getCards } from 'actions/async/Cards'
import View from './View'
import { searchBar } from '../../reducers/utils/array'

const mapStateToProps = state => ({
  cards: searchBar({ search: state.cards.search, cards: state.cards.list }),
  collectionName: state.collection.name,
  filter: state.cards.filter,
  search: state.cards.search
})

const mapDispatchToProps = {
  getCards,
  setFilter,
  setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
