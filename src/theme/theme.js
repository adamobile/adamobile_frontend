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
    MuiChip: {
      root: {
          padding: '3px 4px',
          fontFamily: [
            'dodger',
            'sans-serif',
          ].join(','),
          fontSize: "15px"
      },
  },
  },
})

export default theme
