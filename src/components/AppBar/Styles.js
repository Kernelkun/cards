import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  container: {
    backgroundColor: '#030d37',
    maxWidth: '1400px',
    left: '50%',
    right: 'auto',
    overflow: 'hidden',
    paddingTop: '10px',
    height: '83px',
    width: '100%',
    marginLeft: 0,
    transform: 'translateX(-50%)',
    top: '35px',
    clipPath: 'polygon(1.5% 0,100% 0,98.5% 100%,0 100%)'
  }
}))
