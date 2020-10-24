import React from 'react'
import PropTypes from 'prop-types'
import Image from 'components/Image'
import dots from 'img/dots.svg'
import diamond from 'img/diamond.svg'
import mountains from 'img/mountains2.png'
import useStyles from './Styles'

const GradientHeader = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <div className={classes.diamond}>
        <Image src={diamond} />
      </div>
      <div className={classes.dots}>
        <Image src={dots} />
      </div>
      <div className={classes.mountains}>
        <Image src={mountains} />
      </div>
      <div className={classes.wrapper}>{children}</div>
    </div>
  )
}

GradientHeader.propTypes = {
  children: PropTypes.node
}

GradientHeader.defaultProps = {
  children: null
}

export default GradientHeader
