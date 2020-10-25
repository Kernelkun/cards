import { connect } from 'react-redux'
import { setFilter } from 'actions/sync/Cards'
import { getCards } from 'actions/async/Cards'
import View from './View'

const mapStateToProps = state => ({
  cards: state.cards.list,
  collectionName: state.collection.name,
  filter: state.cards.filter
})

const mapDispatchToProps = {
  getCards,
  setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
