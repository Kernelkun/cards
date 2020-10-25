import { makeStyles } from '@material-ui/core/styles'
import bg from 'img/sega_bg.png'
import illustration from 'img/illustration.webp'

export default makeStyles(theme => ({
  bg: {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    margin: '0',
    top: '0',
    height: '100%',
    width: '85vw',
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      width: '78vw',
      height: '74%'
    }
  },
  container: {
    position: 'relative',
    background: 'linear-gradient(90deg,#187aff,#1148e4 50%,#06aab4)',
    color: theme.palette.common.white,
    width: '100%',
    height: '55em'
  },
  illustration: {
    backgroundImage: `url(${illustration})`,
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    clipPath: 'polygon(0 0,100% 0,100% 100%,29% 100%)',
    width: '50vw',
    right: '0',
    margin: '0',
    position: 'absolute',
    top: '0',
    height: '100%',
    zIndex: '2',
    [theme.breakpoints.down('xs')]: {
      clipPath: 'unset',
      width: '100vw',
      height: '46vw',
      marginBottom: theme.spacing(4)
    },
    [theme.breakpoints.down(361)]: {
      height: '80vw'
    }
  },
  row: {
    height: '100%',
    paddingTop: theme.spacing(20),
    '& p': {
      lineHeight: '33px',
      marginTop: theme.spacing(4)
    },
    '& button': {
      marginTop: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        margin: '0 auto'
      }
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(40)
    }
  },
  wrapper: {
    boxSizing: 'border-box',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 30px',
    paddingBottom: '2em',
    height: '100%'
  }
}))
