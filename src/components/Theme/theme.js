import { createMuiTheme } from '@material-ui/core/styles'
import 'fontsource-poppins'

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Poppins', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '96px',
      lineHeight: '120px',
      letterSpacing: '-1.5px'
    },
    h2: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '64px',
      lineHeight: '88px',
      letterSpacing: '-0.5px'
    },
    h3: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '48px',
      lineHeight: '72px'
    },
    h4: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '32px',
      lineHeight: '48px',
      letterSpacing: '0.25px'
    },
    h5: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '32px'
    },
    h6: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '20px',
      lineHeight: '32px',
      letterSpacing: '0.15px'
    },
    subtitle1: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.15px'
    },
    subtitle2: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.1px'
    },
    body1: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '0.5px'
    },
    body2: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.25px'
    },
    button: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '14px',
      lineHeight: '16px',
      letterSpacing: '1.25px'
    },
    caption: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.4px'
    },
    overline: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '10px',
      lineHeight: '12px',
      letterSpacing: '1.5px'
    }
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
      light: '#49BEF2',
      main: '#179CD7',
      dark: '#007CB2',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#A3DE85',
      main: '#7ABA5A',
      dark: '#51A128',
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

export default theme
