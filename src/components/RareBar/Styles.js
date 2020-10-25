import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  base: {
    width: theme.spacing(13.75),
    fontWeight: 'bold',
    borderRadius: 0,
    borderWidth: theme.spacing(0.47),
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
