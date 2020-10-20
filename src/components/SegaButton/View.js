import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import useStyles from './Styles'

const SegaButton = ({ children, color }) => {
  const classes = useStyles({ color })

  return (
    <Button classes={{ label: classes.span }} className={classes.button}>
      {children}
    </Button>
  )
}

SegaButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary'])
}

SegaButton.defaultProps = {
  color: 'primary'
}

export default SegaButton
