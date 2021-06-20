import * as React from 'react'
import {
  Typography,
  Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 'auto'
  },

  logo: {
    position: 'absolute',
    top: 10,
    left: 16,
    width: 400,
    height: 400,
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
    <Box className={classes.wrapper} >
      <Box>
        <img
          src="../images/stay_tuned.png"
          alt="Stay tuned"/>
      </Box>
      <Box className={classes.logo}>
        <img
          src="../images/logo.png"
          alt="Adamobile logo"/>
      </Box>
      <Box className={classes.infoBox}>
        <Typography>Adamobiles are NFT-Collectables on the cardano blockchain</Typography>
        <Typography>You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</Typography>
      </Box>
      <Box className={classes.stayTuned}>
        <Typography>Engines starting soon</Typography>
        <Typography>Stay tuned!</Typography>
      </Box>
    </Box>
  )
}

export default IndexPage
