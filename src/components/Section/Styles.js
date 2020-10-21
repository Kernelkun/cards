import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    position: 'relative',
    paddingTop: '5em',
    background: ({ color, sega }) =>
      !sega && (color === 'inherit' ? 'inherit' : theme.palette[color].main),
    minHeight: 'calc(100vh - 64px - 230px)'
  },
  page: {
    minHeight: theme.spacing(107)
  },
  sega: {
    background: '#030d37',
    color: theme.palette.common.white,
    '&:after': {
      content: '""',
      background: 'radial-gradient(75% 100% at 50% -60%,#0596a1 0,rgba(3,13,55,0) 100%)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: theme.spacing(25),
      zIndex: 1
    }
  }
}))
