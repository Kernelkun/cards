import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'

const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route {...rest}>
      <Header />
      {children}
      <Footer />
    </Route>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
