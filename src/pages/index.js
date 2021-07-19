import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import {
  Typography,
  Box,
  Button,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '../theme/typography.css'
import Layout from '../components/layout'
import MainBackground from '../images/home_bg.png'

const useStyles = makeStyles((theme) => ({
  main: {
    position: 'relative',minHeight: '80vh',
    backgroundImage: `url(${MainBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  actionButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    background: 'white',
    borderRadius: 20,
    marginBottom: 100,
  },
  actionButtonContainerText: {
    color: 'black',
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
    marginRight: '20%',
    marginLeft: '20%',
    marginTop: 50,
  }
}))

const FlexBoxCenter = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }
})(Box)

const FlexBoxEvenly = withStyles({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
  }
})(Box)

const TextHeader = withStyles({
  root: {
    fontFamily: 'dodger',
    variant: 'h2'
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
    <Layout>
      <FlexBoxCenter className={classes.main}>
        <Box className={classes.actionButtonContainer}>
          <TextHeader className={classes.actionButtonContainerText}>Get your Adamobile now!</TextHeader>
          <Link to='/buy/'>
            <Button className={classes.actionButton}>
              <StaticImage placeholder='transparent' src='../images/action_button.png' alt='action button'/>
              <TextHeader className={classes.actionButtonText} >Start<br />engine</TextHeader>
            </Button>
          </Link>
        </Box>
      </FlexBoxCenter>
      <FlexBoxEvenly className={classes.bottomFlexBox}>
        <StaticImage style={{objectFit: 'contain'}} placeholder='transparent' src='../images/red_car.png' alt='red car' />
        <Box width='50%' marginLeft={2}>
          <TextHeader variant='h2'>Adamobile</TextHeader>
          <TextBody variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non blandit quam. Sed id pretium enim. Nam iaculis pulvinar arcu non molestie. Nunc sed semper lacus, mollis tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum semper id ipsum quis convallis. Aliquam erat volutpat. Morbi sed hendrerit metus. Quisque scelerisque laoreet dolor, et ornare eros sollicitudin eget. Cras leo nisl, finibus at luctus fermentum, iaculis quis massa. Nulla ligula nibh, pretium nec orci id, tempus aliquam augue.</TextBody>
        </Box>
      </FlexBoxEvenly>

      <FlexBoxEvenly className={classes.bottomFlexBox}>
        <Box width='60%' marginRight={2}>
          <TextHeader variant='h2'>1004 unique items</TextHeader>
          <TextBody variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non blandit quam. Sed id pretium enim. Nam iaculis pulvinar arcu non molestie. Nunc sed semper lacus, mollis tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum semper id ipsum quis convallis. Aliquam erat volutpat. Morbi sed hendrerit metus. Quisque scelerisque laoreet dolor, et ornare eros sollicitudin eget. Cras leo nisl, finibus at luctus fermentum, iaculis quis massa. Nulla ligula nibh, pretium nec orci id, tempus aliquam augue.</TextBody>
        </Box>
        <StaticImage style={{maxWidth: 200}} placeholder='transparent' src='../images/home_accessories.png' alt='accessories' />
      </FlexBoxEvenly>
    </Layout>
  )
}

export default IndexPage
