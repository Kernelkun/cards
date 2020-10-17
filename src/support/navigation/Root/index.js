import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged
  }
}

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(View)
