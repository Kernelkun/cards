import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    background: ({ color }) => (color === 'inherit' ? 'inherit' : theme.palette[color].main)
  },
  page: {
    minHeight: theme.spacing(107)
  }
}))
