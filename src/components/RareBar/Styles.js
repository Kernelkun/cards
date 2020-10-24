import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  base: {
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.common.white,
      borderColor: theme.palette.common.white
    }
  },
  selected: {
    color: theme.palette.common.white,
    borderColor: theme.palette.common.white
  }
}))
