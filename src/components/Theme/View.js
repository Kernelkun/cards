import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>

Theme.propTypes = {
  children: PropTypes.node
}

Theme.defaultProps = {
  children: null
}

export default Theme
