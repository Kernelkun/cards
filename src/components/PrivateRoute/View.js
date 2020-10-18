import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Footer from 'components/Footer'
import useStyles from './Styles'
import ResponsiveDrawer from '../ResponsiveDrawer'

const PrivateRoute = ({ children, ...rest }) => {
  const classes = useStyles()

  return (
    <Route {...rest}>
      <div className={classes.container}>
        <ResponsiveDrawer>{children}</ResponsiveDrawer>
        <Footer />
      </div>
    </Route>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
