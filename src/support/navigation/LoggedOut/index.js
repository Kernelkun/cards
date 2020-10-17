import { connect } from 'react-redux'
import View from './View'

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  token: state.auth.token
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(View)
