import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'dodger',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: 'rgb(176,35,39)',
    },
    secondary: {
      main: 'rgb(242,178,64)',
    },
  },
})

export default theme
