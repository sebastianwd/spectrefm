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
        p: {
          wordBreak: 'break-word',
        },
        li: {
          listStyle: 'none',
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
      main: 'rgb(0, 90, 194)',
    },
    secondary: {
      main: '#121212',
      dark: '#0C0C0C',
      light: '#171717',
    },
    error: {
      main: colors.red.A400,
    },
    info: {
      main: 'rgb(0, 90, 194)',
    },
    background: {
      paper: '#121212',
      default: '#0E0E0E',
    },
    text: {
      primary: '#DBDBDB',
      secondary: '#ACACAC',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
    fontWeightLight: 200,
    fontFamily: [
      'Poppins',
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

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '2rem',
  },
}

export default theme
