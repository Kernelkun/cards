import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Switch, useLocation } from 'react-router-dom'
import PrivateRoute from 'components/PrivateRoute'
import paths from 'constans/paths'

import Error from 'pages/Error/View'

const LoggedIn = ({ isLogged }) => {
  const location = useLocation()

  return (
    <Switch>
      <PrivateRoute exact path={paths.CARD}>
        <p>CARD</p>
      </PrivateRoute>
      <PrivateRoute exact path={paths.COLLECTION}>
        <p>COLLECTION</p>
      </PrivateRoute>
      <PrivateRoute exact path={paths.DASHBOARD}>
        <p>DASHBOARD</p>
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
