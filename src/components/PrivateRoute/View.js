import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import ResponsiveDrawer from '../ResponsiveDrawer'

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <ResponsiveDrawer>{children}</ResponsiveDrawer>
    </Route>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
