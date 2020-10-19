import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Image = ({ alt, className, defaultSrc, src }) => {
  const [errored, setErrored] = useState(false)
  const [innerSrc, setInnerSrc] = useState(src)

  useEffect(() => {
    setInnerSrc(src)
    setErrored(false)
  }, [src])

  function onError() {
    if (!errored) {
      setErrored(true)
      setInnerSrc(defaultSrc)
    }
  }
  return (
    <>
      <img alt={alt} className={className} src={innerSrc || ''} onError={onError} />
    </>
  )
}

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  defaultSrc: PropTypes.string,
  src: PropTypes.string
}

Image.defaultProps = {
  alt: '',
  className: '',
  defaultSrc: '',
  src: ''
}

export default Image
