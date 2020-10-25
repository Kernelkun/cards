import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    paddingTop: '10em',
    [theme.breakpoints.down('xs')]: {
      paddingTop: '2em'
    }
  },
  video: {
    position: 'relative',
    height: '100vh',
    width: '100%',
    minHeight: '700px'
  },
  videoLogo: {
    width: '100%',
    height: '100%',
    '& img': {
      zIndex: 1
    }
  }
}))
