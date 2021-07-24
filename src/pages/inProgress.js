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
import theme from '../theme/theme'

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
  topInfoText: {

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginLeft: theme.spacing(2),
    },
  },
  bottonInfoText: {

    [theme.breakpoints.down('md')]: {
      width: '100%',
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
      marginRight: theme.spacing(0.5),
    },
  }
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
        <FlexBoxEvenly className={classes.bottomFlexBox}>
          <StaticImage style={{ float: 'top' }} objectFit='contain' objectPosition='50% 50%' placeholder='transparent' src='../images/red_car.png' alt='red car' />
          <Box className={classes.topInfoText}>
            <TextHeader className={classes.bottomTitle}>Adamobile</TextHeader>
            <TextBody variant='body1'></TextBody>
          </Box>
        </FlexBoxEvenly>

        <Link to='/explore/' style={{textDecoration: 'none', color: 'white'}}>
          <FlexBoxEvenly className={classes.bottomFlexBox}>
            <Box className={classes.bottonInfoText}>
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
      </FlexBoxCenter>
    </Layout>
  )
}

export default IndexPage
