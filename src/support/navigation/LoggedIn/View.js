import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, useLocation } from 'react-router-dom'
import paths from 'constans/paths'
import PrivateRoute from 'components/PrivateRoute'
import Dashboard from 'pages/Dashboard'
import Error from 'pages/Error'
import Collection from 'pages/Collection'

const LoggedIn = ({ isLogged }) => {
  const location = useLocation()

  return (
    <Switch>
      <PrivateRoute exact path={paths.CARD}>
        <p>CARD</p>
      </PrivateRoute>
      <PrivateRoute exact path={paths.COLLECTION}>
        <Collection />
      </PrivateRoute>
      <PrivateRoute exact path={paths.DASHBOARD}>
        <Dashboard />
      </PrivateRoute>
      <PrivateRoute exact path={paths.HOME}>
        <Redirect to={{ pathname: paths.DASHBOARD }} />
      </PrivateRoute>

      <PrivateRoute path="*">
        {isLogged ? (
          <Error from={location} />
        ) : (
          <Redirect to={{ pathname: paths.LOGIN, state: { from: location } }} />
        )}
      </PrivateRoute>
    </Switch>
  )
}

LoggedIn.propTypes = {
  isLogged: PropTypes.bool
}

LoggedIn.defaultProps = {
  isLogged: false
}

export default LoggedIn
