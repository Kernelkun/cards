import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import useStyles from './Styles'

const PrivateRoute = ({ children, ...rest }) => {
  const classes = useStyles()

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest}>
      <div className={classes.container}>
        <Header />
        <div className={classes.main}>{children}</div>
        <Footer />
      </div>
    </Route>
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default PrivateRoute
