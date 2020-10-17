import { connect } from 'react-redux'
import { getGeolocation } from 'support/geolocation'
import { getMe } from 'services/user'
import { getSections } from 'services/sections'
import View from './View'

const mapStateToProps = state => {
  return {
    isLogged: state.auth.isLogged
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGeolocation: () => dispatch(getGeolocation()),
    getMe: () => dispatch(getMe()),
    getSections: () => dispatch(getSections())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
