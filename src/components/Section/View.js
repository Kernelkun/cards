import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import useStyles from './Styles'

const Section = ({ children, className, color, page, sega, ...rest }) => {
  const classes = useStyles({ color, sega })

  return (
    <section
      className={clsx(classes.container, className, page && classes.page, sega && classes.sega)}
      {...rest}
    >
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'sega', 'inherit']),
  page: PropTypes.bool,
  sega: PropTypes.bool
}

Section.defaultProps = {
  className: null,
  color: 'inherit',
  page: false,
  sega: false
}

export default Section
