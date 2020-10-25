import { makeStyles } from '@material-ui/core/styles'
import theme from '../Theme/theme'

export default makeStyles(() => ({
  button: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      color: '#0596a1'
    }
  },
  buttonSignup: {
    width: '100%',
    height: '100%',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#0596a1'
    }
  },
  buttonsContainer: {
    height: '100%',
    width: '100%',
    '& > div': {
      height: '100%'
    }
  },
  clip: {
    width: '100%',
    height: '100%',
    clipPath: 'polygon(16.5% 0,100% 0,83.5% 100%,0 100%)',
    position: 'relative'
    // left: '7%'
  },
  divider: {
    transform: 'skew(-17deg)',
    backgroundColor: '#072fdc !important',
    width: '2px !important'
  },
  logo: {
    '&.slide-out-top': {
      WebkitAnimation: 'slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
      animation: 'slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both'
    },
    '&.slide-in-top': {
      WebkitAnimation: 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      animation: 'slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    },
    WebkitTransform: 'translateY(-1000px)',
    transform: 'translateY(-1000px)',
    opacity: 0,
    position: 'fixed',
    top: '25px',
    left: '5%',
    zIndex: theme.zIndex.appBar + 1,
    [theme.breakpoints.up('lg')]: {
      left: '18%'
    },
    [theme.breakpoints.down('md')]: {
      width: '8%',
      top: '35px'
    },
    [theme.breakpoints.down('xs')]: {
      top: '40px',
      width: '13%',
      opacity: 1,
      transform: 'unset',
      right: '6%',
      left: 'unset'
    },
    [theme.breakpoints.down(361)]: {
      width: '21%'
    }
  },
  menu: {
    '&.move-right': {
      WebkitAnimation: 'move-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      animation: 'move-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    },
    '&.move-left': {
      WebkitAnimation: 'move-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      animation: 'move-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
    },
    paddingLeft: '5%',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '2%'
    }
  },
  menuButton: {
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      left: '7%'
    }
  },
  navBar: {
    backgroundColor: '#030d37',
    maxWidth: '1400px',
    left: '50%',
    right: 'auto',
    overflow: 'hidden',
    height: '83px',
    width: '100%',
    marginLeft: 0,
    transform: 'translateX(-50%)',
    top: '50px',
    clipPath: 'polygon(3.5% 0,99% 0%,96.5% 100%,1% 100%)',
    [theme.breakpoints.down('md')]: {
      height: theme.spacing(8.25)
    }
  },
  toolbar: {
    height: '100%',
    padding: 0
  }
}))
