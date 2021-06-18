import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'lato',
      'sans-serif',
    ].join(','),
  },
  palette: {
    type: 'light',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#212121',
    },
  },
})

export default theme
