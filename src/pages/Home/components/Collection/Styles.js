import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(17.5)
  },
  dots: {
    left: '40%',
    position: 'absolute',
    pointerEvents: 'none',
    top: '-10%',
    zIndex: 10
  },
  iconsContainer: {
    marginBottom: theme.spacing(17.5),
    position: 'relative'
  },
  image: { width: '90%' },
  plus: {
    left: '60%',
    position: 'absolute',
    pointerEvents: 'none',
    top: 50
  },
  paragraph: {
    fontSize: 16,
    lineHeight: '33px',
    marginTop: theme.spacing(3.75),
    marginBottom: theme.spacing(7.5)
  }
}))
