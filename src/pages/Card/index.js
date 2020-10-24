import { connect } from 'react-redux'
import { getCardsById, updateCardById } from 'actions/async/Cards'
import View from './View'

const mapStateToProps = state => ({
  card: state.cards.card
})

const mapDispatchToProps = {
  getCardsById,
  updateCardById
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
