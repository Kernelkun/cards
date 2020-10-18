import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => ({
  collectionName: state.collection.name
})

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
