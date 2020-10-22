import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
  video: {
    height: '100vh',
    width: '100%',
    minHeight: '700px',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0
  }
}))
