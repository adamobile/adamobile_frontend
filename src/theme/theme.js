import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'lato',
      'sans-serif',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#b71c1c',
    },
    secondary: {
      main: '#212121',
    },
    background: {
      default: '#303030'
    },
  },
  MuiChip: {
    root: {
      padding: '3px 4px',
      fontFamily: [
        'dodger',
        'sans-serif',
      ].join(','),
      fontSize: '15px',
      background: 'primary',
      color: 'white'
    },
  },
})

export default theme
