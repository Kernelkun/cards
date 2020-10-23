import { makeStyles } from '@material-ui/core/styles'

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
    // position: 'absolute',
    // top: 0,
    // left: 0
  },
  menu: {
    paddingLeft: ({ trigger }) => (trigger ? '15%' : '5%'),
    height: '100%'
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
    top: '35px',
    clipPath: 'polygon(3.5% 0,99% 0%,96.5% 100%,1% 100%)'
  }
}))
