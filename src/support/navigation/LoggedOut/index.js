import { connect } from 'react-redux'
import { setLoggedOut } from 'actions/sync/auth'
import View from './View'

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  token: state.auth.token
})

const mapDispatchToProps = {
  setLoggedOut
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
