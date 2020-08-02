import { createMuiTheme } from '@material-ui/core/styles'
import { colors } from '@material-ui/core'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        a: {
          textDecoration: 'none',
          color: 'currentColor',
        },
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#121212',
      light: '#161616',
    },
    secondary: {
      main: '#0E0E0E',
      dark: '#0C0C0C',
      light: '#121212',
    },
    error: {
      main: colors.red.A400,
    },
    info: {
      main: 'rgb(0, 90, 194)',
    },
    background: {
      paper: '#121212',
      default: '#0C0C0C',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
})

export default theme
