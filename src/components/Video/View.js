import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import useStyles from './Styles'

const Video = ({ src }) => {
  const classes = useStyles()

  return (
    <video className={clsx(classes.video, 'videoTag')} autoPlay loop muted>
      <source src={src} type="video/mp4" />
    </video>
  )
}

Video.propTypes = {
  src: PropTypes.string.isRequired
}

Video.defaultProps = {}

export default Video
