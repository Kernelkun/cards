import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-poppins'

export default createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    background: {
      paper: '#FAFAFA',
      default: '#E8E8E8'
    },
    primary: {
      light: '#665bff',
      main: '#072fdc',
      dark: '#0004a9',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#ef77eb',
      main: '#ba45b8',
      dark: '#870188',
      contrastText: '#FFFFFF'
    },
    error: {
      light: '#FCE7E7',
      main: '#f44336',
      dark: '#C62828',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#2B3648',
      secondary: '#56657F',
      disabled: '#8997B1',
      hint: '#AFBDD1'
    }
  }
})
