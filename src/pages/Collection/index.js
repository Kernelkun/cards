import { connect } from 'react-redux'
import { getCards } from 'actions/async/Cards'
import View from './View'

const mapStateToProps = state => ({
  cards: state.cards.list,
  collectionName: state.collection.name
})

const mapDispatchToProps = dispatch => ({
  getCards: () => dispatch(getCards())
})

export default connect(mapStateToProps, mapDispatchToProps)(View)
