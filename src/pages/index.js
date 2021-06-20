import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles, ThemeProvider, CssBaseline } from '@material-ui/core/styles'
import theme from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width:'100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: '30%',
    height: '30%',
  },
  infoBox: {
    color: 'rgb(28, 28, 28)',
  },
  stayTuned: {
    fontSize: theme.typography.pxToRem(24),
  }
}))

const IndexPage = (props) => {

  const classes = useStyles()
  return (
    <React.Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Box id='banner' className={classes.bannerContainer}>
      <StaticImage
        placeholder= 'transparent'
        src='../images/stay_tuned.png'
        alt='Stay tuned'/>
      </Box>
      <Box className={classes.logoContainer}>
        <StaticImage
          placeholder= 'transparent'
          src='../images/logo.png'
          alt='Adamobile logo'/>
      </Box>
      <Box>
        <Typography>Adamobiles are NFT-Collectables on the cardano blockchain</Typography>
        <Typography>You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</Typography>
      </Box>
      <Box className={classes.stayTuned}>
        <Typography>Engines starting soon</Typography>
        <Typography>Stay tuned!</Typography>
      </Box>
    </ThemeProvider>
    </React.Fragment>
  )
}

export default IndexPage
