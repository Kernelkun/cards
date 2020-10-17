import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { ScrollToTop } from '@igz/components'
import LoggedIn from '../LoggedIn'
import LoggedOut from '../LoggedOut'

const Root = ({ isLogged }) => {
  const baseUrl = process.env.PUBLIC_URL

  return (
    <Router basename={baseUrl}>
      <ScrollToTop>
        {isLogged && <LoggedIn />}
        {!isLogged && <LoggedOut />}
      </ScrollToTop>
    </Router>
  )
}

Root.propTypes = {
  isLogged: PropTypes.bool
}

Root.defaultProps = {
  isLogged: false
}

export default Root
