import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import '../theme/typography.css'

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    width:'100%',
  },
  logoBox: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: '30%',
    height: '30%',
  },
  infoBox: {
    textAlign: 'center'
  },
  info: {
    color: 'white',
    fontSize: theme.typography.pxToRem(24),
    fontFamily: 'lato',
  },
  stayTunedBox: {
    marginTop: 50,
    textAlign: 'center'
  },
  stayTuned: {
    fontSize: theme.typography.pxToRem(50),
    color: 'rgb(176, 34, 38)',
    fontFamily: 'dodger',
  }
}))

const IndexPage = (props) => {

  const classes = useStyles()
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Box id='banner' className={classes.bannerBox}>
      <StaticImage
        placeholder= 'transparent'
        src='../images/stay_tuned.png'
        alt='Stay tuned'/>
      </Box>
      <Box className={classes.logoBox}>
        <StaticImage
          placeholder= 'transparent'
          src='../images/logo.png'
          alt='Adamobile logo'/>
      </Box>
      <Box className={classes.infoBox}>
        <Typography className={classes.info}>Adamobiles are NFT-Collectables on the cardano blockchain<br/>You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</Typography>
      </Box>
      <Box className={classes.stayTunedBox}>
        <Typography className={classes.stayTuned}>Engines starting soon<br/>Stay tuned!</Typography>
      </Box>
    </ThemeProvider>
    </React.Fragment>
  )
}

export default IndexPage
