import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(17.5),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
      paddingLeft: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: theme.spacing(3)
    }
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
  image: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start'
    },
    '& > img': { width: '90%' }
  },
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
