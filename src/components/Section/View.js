import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import useStyles from './Styles'

const Section = ({ children, className, color, page, ...rest }) => {
  const classes = useStyles({ color })

  return (
    <div className={clsx(classes.container, className, page && classes.page)} {...rest}>
      {children}
    </div>
  )
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'inherit']),
  page: PropTypes.bool
}

Section.defaultProps = {
  className: null,
  color: 'inherit',
  page: false
}

export default Section
