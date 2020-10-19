import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import mountains from 'img/mountains.png'

const useStyles = makeStyles(theme => ({
  mountains: {
    position: 'relative',
    display: 'block',
    width: theme.spacing(6.875),
    height: theme.spacing(1.25),
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundImage: `url(${mountains})`
  }
}))

const Mountains = ({ className }) => {
  const classes = useStyles()

  return <div className={clsx(classes.mountains, className)} />
}

Mountains.propTypes = {
  className: PropTypes.string
}

Mountains.defaultProps = {
  className: ''
}

export default Mountains
