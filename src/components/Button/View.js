import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import ButtonMui from '@material-ui/core/Button'
import useStyles from './Styles'

const Button = ({ className, children, sharp, ...rest }) => {
  const classes = useStyles({ sharp })

  return (
    <ButtonMui className={clsx(className, classes.button)} {...rest}>
      {children}
    </ButtonMui>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  sharp: PropTypes.bool
}

Button.defaultProps = {
  className: '',
  sharp: false
}

export default Button
