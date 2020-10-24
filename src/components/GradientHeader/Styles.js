import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    height: 418,
    position: 'relative',
    background: 'linear-gradient(259.29deg,#072fdc -2.5%,#0596a1 77.19%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover'
  },
  diamond: {
    position: 'absolute',
    left: '85%',
    top: '60%',
    zIndex: 1,
    '& img': {
      width: '100%'
    }
  },
  dots: {
    position: 'absolute',
    left: '0%',
    top: '60%',
    zIndex: 1,
    '& img': {
      width: '100%'
    }
  },
  mountains: {
    position: 'absolute',
    left: '25%',
    top: '32%',
    zIndex: 1,
    '& img': {
      width: 59
    }
  },
  wrapper: {
    // position: 'absolute',
    // top: '0',
    // left: '0',
    // right: '0',
    // bottom: '0'
    boxSizing: 'border-box',
    color: theme.palette.common.white,
    textAlign: 'center',
    marginBottom: '30px',
    top: '50%',
    position: 'absolute',
    width: '100%',
    padding: '0 20px',
    transform: 'translateY(-50%)',
    left: '0'
  }
}))
