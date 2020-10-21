import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  container: {
    zIndex: 2,
    boxSizing: 'border-box',
    maxWidth: '2200px',
    width: '100%',
    position: 'relative',
    '& .carousel': {
      zIndex: 9,
      boxSizing: 'border-box',
      maxWidth: '2200px',
      width: '100%',
      position: 'relative',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '& .carousel-cell': {
      width: '33.3%',
      height: '200px',
      marginRight: '10px',
      background: '#333'
    },
    '& .carousel-cell-image': {
      display: 'block',
      maxHeight: '100%',
      margin: '0 auto',
      maxWidth: '100%',
      opacity: 0,
      transition: 'opacity .4s'
    },
    '& .carousel-cell-image.flickity-lazyerror,.carousel-cell-image.flickity-lazyloaded': {
      opacity: 1
    },
    '& .flickity-slider': { display: 'flex', alignItems: 'center' },
    '& .is-selected .btnWrapper': { opacity: '1 !important' },
    '& .is-selected div:first-child': {
      background: '#072fdc !important',
      opacity: '0.7 !important'
    },
    '& .flickity-viewport': { height: '430px !important' },
    '& .slide.is-selected': {
      zoom: 1.1,
      zIndex: 10,
      minHeight: '395px !important',
      marginLeft: '-10px'
    },
    '& .flickity-page-dots': {
      bottom: '-40px',
      width: '100%',
      zIndex: 1,
      left: '50%',
      transform: 'translateX(-50%)'
    },
    '& .flickity-page-dots .dot': {
      height: '4px',
      width: '30px',
      margin: '0',
      borderRadius: '0',
      background: '#fff',
      opacity: 1
    },
    '& .flickity-page-dots .dot.is-selected': {
      background: '#0596a1'
    },
    '@media only screen and (min-width: 576px)': {
      '& .is-selected': {
        zoom: 1.1,
        zIndex: 10,
        marginLeft: '-20px'
      },
      '& .flickity-viewport': { height: '584px !important' }
    },
    '& .offers-carousel .flickity-viewport': {
      display: 'flex',
      alignItems: 'center'
    },
    '& .offers-carousel .flickity-prev-next-button': {
      position: 'absolute',
      top: ['-100px', '104%'],
      width: '66px',
      height: '44px',
      background: '#0596a1',
      borderRadius: '0',
      transform: ['skew(-20deg)', 'skew(-20deg) translateX(-50%)'],
      left: '50%'
    },
    '& .offers-carousel .flickity-prev-next-button.next': { marginLeft: '40px' },
    '& .offers-carousel .flickity-prev-next-button.previous': {
      marginLeft: '-44px'
    },
    '& .offers-carousel .flickity-prev-next-button svg': {
      transform: 'skew(20deg)',
      fill: '#fff'
    }
  }
}))
