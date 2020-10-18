import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    background: theme.palette.background.footer,
    position: 'relative',
    padding: '24px 12px',
    flexShrink: 0,
    display: 'flex',
    color: theme.palette.common.white,
    '& ul': {
      listStyleType: 'none',
      padding: 0,
      '& >li > a': {
        color: theme.palette.common.white,
        textDecoration: 'none'
      }
    },
    minHeight: theme.spacing(28.75)
  },
  footerLogo: {
    borderBottom: '1px solid #fff',
    paddingBottom: theme.spacing(1.5),
    marginBottom: theme.spacing(1.5)
  },
  footerLogoImg: {
    width: '100%',
    maxWidth: theme.spacing(17.5)
  },
  footerLinksBlog: {
    color: '#00deff',
    textTransform: 'uppercase',
    fontSize: theme.spacing(1.5)
  }
}))
