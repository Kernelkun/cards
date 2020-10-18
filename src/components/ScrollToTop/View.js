import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

function ScrollToTop({ history, children }) {
  useEffect(() => history.listen(() => window.scrollTo(0, 0)), [history])

  return <>{children}</>
}

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
  history: PropTypes.shape({
    listen: PropTypes.func
  }).isRequired
}

export default withRouter(ScrollToTop)
