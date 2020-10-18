import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  colorInherit: {
    backgroundColor: 'inherit'
  },
  colorBackground: {
    backgroundColor: theme.palette.background.default
  },
  colorBackgroundPaper: {
    backgroundColor: theme.palette.background.paper
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  colorPrimaryDark: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText
  },
  colorPrimaryLight: {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.contrastText
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText
  },
  colorSecondaryDark: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText
  },
  colorSecondaryLight: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.secondary.contrastText
  },
  colorError: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
  container: {
    padding: theme.spacing(2),
    flexWrap: ({ wrap }) => `${wrap}`,
    zIndex: 2
  },
  maxWidthLg: {
    maxWidth: theme.spacing(135.5)
  }
}))
