import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import useStyles from './Styles'

const SegaButton = ({ children, color, onClick, ...rest }) => {
  const classes = useStyles({ color })

  return (
    <Button
      classes={{ label: classes.span }}
      className={classes.button}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  )
}

SegaButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  onClick: PropTypes.func
}

SegaButton.defaultProps = {
  color: 'primary',
  onClick: () => {}
}

export default SegaButton
