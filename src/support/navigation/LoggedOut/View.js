import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, useLocation } from 'react-router-dom'
import paths from 'constans/paths'
import Login from 'pages/Login'
import Error from 'pages/Error/View'
import PrivateRoute from 'components/PrivateRoute'

const LoggedOut = ({ loggedIn }) => {
  const location = useLocation()

  const ErrorRoute = () => {
    let result = <Error from={location} />
    if (!loggedIn) {
      result = <Redirect to={{ pathname: paths.LOGIN, state: { from: location } }} />
    }
    return result
  }

  return (
    <Switch>
      <PrivateRoute path={paths.LOGIN}>
        <Login />
      </PrivateRoute>

      <PrivateRoute path="*">
        <ErrorRoute />
      </PrivateRoute>
    </Switch>
  )
}

LoggedOut.propTypes = {
  loggedIn: PropTypes.bool
}

LoggedOut.defaultProps = {
  loggedIn: false
}

export default LoggedOut
