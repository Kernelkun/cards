import { makeStyles } from '@material-ui/core/styles'
import bg from 'img/sega_bg.png'

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
    position: 'absolute'
  },
  container: {
    marginTop: '90px',
    position: 'relative',
    background: 'linear-gradient(90deg,#187aff,#1148e4 50%,#06aab4)',
    color: theme.palette.common.white,
    width: '100%',
    height: '45em'
  },
  illustration: {
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    clipPath: 'polygon(0 0,100% 0,100% 100%,29% 100%)',
    width: '50vw',
    right: '0',
    margin: '0',
    position: 'absolute',
    top: '0',
    height: '100%',
    zIndex: '2'
  },
  row: {
    paddingTop: '10em',
    '& p': {
      lineHeight: '33px',
      marginTop: '2em'
    },
    '& button': {
      marginTop: theme.spacing(4)
    }
  },
  wrapper: {
    boxSizing: 'border-box',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 30px'
  }
}))
