import * as React from 'react'
import {
    Box,
    Container,
    Typography,
} from '@material-ui/core'
import '../theme/typography.css'
import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    infoBox: {
        textAlign: 'left'
    },
    info: {
        color: 'white',
        fontSize: theme.typography.pxToRem(20),
        fontFamily: 'lato',
    },
    stayTunedBox: {
        marginTop: 50,
        textAlign: 'center'
    },
    stayTuned: {
        fontSize: theme.typography.pxToRem(40),
        color: 'rgb(176, 34, 38)',
        fontFamily: 'dodger',
    },
    wrapped: {
        maxWidth: '100%'
    }
}))

const Main = () => {
    const classes = useStyles();
    return (
        <Layout pageTitle='Home' pageIndex={0}>
          <Container className={classes.root}>
            <Box id='banner'>
                <img className={classes.wrapped}
                    src='../banner.png'
                    alt='Adamobile banner' />
            </Box>
            <Box className={classes.infoBox}>
                <Typography className={classes.info}>Adamobiles are NFT-Collectables on the cardano blockchain<br />You can buy, sell, or gift Adamobiles. Or simply enjoy them parked in your wallet</Typography>
            </Box>
            <Box className={classes.stayTunedBox}>
                <Typography className={classes.stayTuned}>Engines starting soon<br />Stay tuned!</Typography>
            </Box>
        </Container>
        </Layout>
    )
}

export default Main
