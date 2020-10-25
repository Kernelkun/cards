import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(15),
    [theme.breakpoints.down(361)]: {
      marginTop: theme.spacing(4)
    }
  },
  cardContainer: {
    marginTop: theme.spacing(4)
  },
  rareBar: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down(361)]: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }
  },
  title: {
    [theme.breakpoints.down(361)]: {
      marginTop: '2.5em'
    }
  }
}))
