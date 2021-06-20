import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width:'100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 10,
    left: 16,
    width: '20%',
    height: '20%',
  },
  infoBox: {
    position: 'absolute',
    top: 350,
    left: 16,
    color: 'white',
  },
  stayTuned: {
    fontSize: theme.typography.pxToRem(24),
    fontFamily: 'dodger',
  }
}))

const IndexPage = (props) => {

  const classes = useStyles()
  return (
    <React.Fragment>
      <Box id='banner' className={classes.bannerContainer}>
      <StaticImage
        cover='false'
        src='../stay_tuned.png'
        alt='Stay tuned'/>
      </Box>
      <Box className={classes.logoContainer}>
        <StaticImage
          color= 'transparent'
          src='../logo.png'
          alt='Adamobile logo'/>
      </Box>
      <Box className={classes.infoBox}>
        <Typography>Adamobiles are NFT-Collectables on the cardano blockchain</Typography>
        <Typography>You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</Typography>
      </Box>
      <Box className={classes.stayTuned}>
        <Typography>Engines starting soon</Typography>
        <Typography>Stay tuned!</Typography>
      </Box>
    </React.Fragment>
  )
}

export default IndexPage
