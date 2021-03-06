import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  Typography,
  Box,
  Button,
  Paper,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '../theme/typography.css'
import Layout from '../components/layout'
import MainBackground from '../images/home_bg.png'

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',
    minHeight: '100vh',
    backgroundImage: `url(${MainBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'flex-end',
  },
  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 150,
    minWidth: 300,
    background: 'white',
    borderRadius: 20,
    marginBottom: 100,
  },
  actionButtonContainerText: {
    color: 'black',
    textAlign: 'center',
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  actionButton: {
    height: 150,
    width: 150,
  },
  actionButtonText: {
    position: 'absolute',
    zIndex: 1,
    textAlign: 'center',
  },
  bottomFlexBox: {
    marginRight: '5%',
    marginLeft: '5%',
    marginTop: 50,
    maxWidth: 800,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
    },
  },
  bottomTitle: {
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(18),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.pxToRem(24),
    },
  },
  middleInfoText: {

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginLeft: theme.spacing(2),
    },
  },
  bottonInfoText: {

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      marginRight: theme.spacing(2),
    },
  },
}))

const FlexBoxCenter = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
})(Box)

const FlexBoxEvenly = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
  }
})(Box)

const TextHeader = withStyles({
  root: {
    fontFamily: 'dodger',
  }
})(Typography)
const TextBody = withStyles({
  root: {
    fontFamily: 'lato',
    variant: 'body2'
  }
})(Typography)

const IndexPage = (props) => {

  const classes = useStyles()
  return (
    <Layout hasTopMargin={false}>
      <FlexBoxCenter className={classes.main}>
        <Paper className={classes.actionButtonContainer}>
          <TextHeader className={classes.actionButtonContainerText}>Get your <br /> Adamobile now!</TextHeader>
          <Link to='/buy/'>
            <Button className={classes.actionButton}>
              <StaticImage placeholder='transparent' src='../images/action_button.png' alt='action button' />
              <TextHeader className={classes.actionButtonText} >Start<br />engine</TextHeader>
            </Button>
          </Link>
        </Paper>
      </FlexBoxCenter>
      <FlexBoxCenter flexDirection='column' alignItems='center' justifyContent='flex-end'>

        <Link to='/buy/' style={{ textDecoration: 'none', color: 'white' }}>
          <FlexBoxEvenly className={classes.bottomFlexBox}>
            <StaticImage style={{ float: 'top' }} objectFit='contain' objectPosition='50% 50%' placeholder='transparent' src='../images/red_car.png' alt='red car' />
            <Box className={classes.middleInfoText}>
              <TextHeader className={classes.bottomTitle}>Adamobile</TextHeader>
              <TextBody variant='body1'>Adamobile is an NFT-Collectables project on the Cardano block chain.</TextBody>
              <br />
              <TextBody variant='body1'>You can buy, sell, or gift ADAmobiles. Or simply enjoy them living in your wallet.</TextBody>
              <br />
              <TextBody variant='body1'>Click me to get your Adamobile and join the ride!</TextBody>
            </Box>
          </FlexBoxEvenly>
        </Link>

        <Link to='/explore/' style={{ textDecoration: 'none', color: 'white' }}>
          <FlexBoxEvenly className={classes.bottomFlexBox}>
            <Box className={classes.middleInfoText}>
              <TextHeader className={classes.bottomTitle}>1007 unique Adamobiles</TextHeader>
              <br />
              <TextBody variant='body1'>There are 25 models distributed over 5 types and 8 colors. In addition there is a lot of different rims, stickers and a whole lot cool extras!</TextBody>
              <br />
              <TextBody variant='body1'>Every Adamobile is a unique combination of some of these traits producing some stunning results!</TextBody>
              <br />
              <TextBody variant='body1'>Every single Adamobile is created manually with a lot of love for detail. Hence the odd total number of 1007!   Click me if you wanna see more?</TextBody>
            </Box>
            <StaticImage objectFit='contain' objectPosition='50% 50%' placeholder='transparent' src='../images/home_accessories.png' alt='accessories' />
          </FlexBoxEvenly>
        </Link>


        <Link to='/buy/' style={{ textDecoration: 'none', color: 'white' }}>
          <FlexBoxEvenly className={classes.bottomFlexBox}>
            <Box className={classes.bottonInfoText}>
              <TextHeader className={classes.bottomTitle}>Thank you!</TextHeader>
              <br />
              <TextBody variant='body1'>To thank our supporters we will be giving back 1000 ADA to one lucky winner!</TextBody>
              <br />
              <TextBody variant='body1'>The lottery draw will happen after all Adamobiles had found their new owners. Every Adamobile represents a ticket. So buying multiple Adamobiles will multiply the chance of winning!</TextBody>
              <TextHeader style={{marginTop: 20}} className={classes.bottomTitle}>Good luck!</TextHeader>
            </Box>
            <StaticImage objectFit='contain' objectPosition='50% 50%' placeholder='transparent' src='../../static/clipart/ADA.png' alt='ADA' />
          </FlexBoxEvenly>
        </Link>

      </FlexBoxCenter>
    </Layout>
  )
}

export default IndexPage
