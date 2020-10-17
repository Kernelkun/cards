import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    display: 'grid',
    fontFamily: 'Poppins',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '70px 1fr 315px',
    background: theme.palette.common.white,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0
  },
  main: {
    background: theme.palette.background.paper,
    margin: 0,
    padding: 0
  }
}))
