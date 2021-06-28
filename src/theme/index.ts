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
      main: '#3D51FA',
    },
    secondary: {
      main: '#0F0F0F',
      dark: '#0F0F10',
    },
    error: {
      main: colors.red.A400,
    },
    info: {
      main: '#2D32BC',
    },
    background: {
      paper: '#121212',
      default: '#1B1C22',
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

theme.typography.caption = {
  ...theme.typography.body2,
  fontSize: '0.75rem',
}

export default theme
