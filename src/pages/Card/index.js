import { connect } from 'react-redux'
import { getCardsById } from 'actions/async/Cards'
import View from './View'

const mapStateToProps = state => ({
  card: state.cards.card
})

const mapDispatchToProps = {
  getCardsById
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
