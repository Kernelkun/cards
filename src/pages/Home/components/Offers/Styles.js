import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  ball: {
    right: '50px',
    top: '-60px',
    width: '120px',
    height: '120px',
    display: 'block',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 10,
    '& > img': {
      maxWidth: '100%'
    }
  },
  bg: {
    clipPath: 'polygon(20% 0,100% 0,100% 100%,0 100%)',
    backgroundColor: '#072fdc',
    width: '85vw',
    right: '0',
    margin: '0',
    top: '0',
    height: '100%',
    zIndex: 1,
    position: 'absolute'
  },
  container: {
    paddingTop: '7em',
    paddingBottom: '7em',
    position: 'relative'
  },
  dots: {
    left: '50px',
    top: '30px',
    display: 'block',
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 10
  },
  text: {
    zIndex: 3,
    position: 'relative',
    boxSizing: 'border-box',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 30px',
    textAlign: 'center',
    '& > h2': {
      display: 'inline-block',
      fontSize: '36.4911575317px'
    },
    '& > button': {
      display: 'inline-block',
      position: 'absolute',
      right: '0'
    }
  }
}))
