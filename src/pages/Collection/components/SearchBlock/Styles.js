import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(1)
  },
  container: {
    paddingTop: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  searchContainer: {
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4)
    }
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}))
