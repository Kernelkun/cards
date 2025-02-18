import React from 'react'
import Slider from 'components/Slider'
import imageUrl from 'img/horror.jpg'
import useStyles from './Styles'

const images = [imageUrl, imageUrl, imageUrl, imageUrl]

const OfferSlider = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Slider
        options={{
          cellAlign: 'right',
          freScroll: true,
          fullscreen: false,
          adaptiveHeight: false,
          imagesLoaded: true,
          lazyLoad: 2,
          initialIndex: 0
        }}
      >
        {images.map(image => (
          <img key={`${new Date()}`} data-flickity-lazyload={image} alt="" />
        ))}
      </Slider>
    </div>
  )
}

OfferSlider.propTypes = {}

OfferSlider.defaultProps = {}

export default OfferSlider
