import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  container: {
    width: theme.spacing(50),
    height: theme.spacing(80),
    padding: theme.spacing(4),
    boxSizing: 'border-box',
    border: '1px solid #072fdc',
    background: '#040e38',
    position: 'absolute',
    top: theme.spacing(-15),
    left: '50%',
    transform: 'translateX(-50%)',
    '& img': {
      width: '40%',
      marginBottom: theme.spacing(4)
    }
  },
  textField: {
    '& .MuiInputBase-input': {
      color: theme.palette.secondary.contrastText
    },
    '& input:valid + fieldset': {
      borderColor: theme.palette.secondary.main,
      borderWidth: 2
    }
  }
}))
