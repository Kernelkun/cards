import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    height: theme.spacing(52.25),
    position: 'relative',
    background: 'linear-gradient(259.29deg,#072fdc -2.5%,#0596a1 77.19%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    backgroundSize: 'cover',
    [theme.breakpoints.down(361)]: {
      height: theme.spacing(63.75)
    }
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
    },
    [theme.breakpoints.down('xs')]: {
      left: '50%',
      transform: 'translateX(-50%)'
    }
  },
  wrapper: {
    boxSizing: 'border-box',
    color: theme.palette.common.white,
    width: '100%',
    height: '100%',
    padding: '0 20px'
  }
}))
