import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import '../theme/typography.css'
import {
    Typography,
    Box,
} from '@material-ui/core'
import { Link } from 'gatsby'
import { Stats } from '../components/stats'
import Stripe from '../images/stripe.png'

import { Telegram, Twitter, Instagram, Email } from '@material-ui/icons';

const FlexBox = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    }
})(Box);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%'
    },
    logo: {
        width: 150,
        height: 150,
        marginRight: 20
    },
    cardano: {
        width: 75,
        height: 75,
    },
    header: {
        justifyContent: 'space-around',
        backgroundImage: `url(${Stripe})`,
        backgroundSize: 'cover'
    },
    headerLinks: {
    },
    title: {
        fontSize: theme.typography.pxToRem(28),
        fontFamily: 'dodger',
        flexGrow: 1,
    },
    link: {
        color: 'white',
        marginRight: theme.spacing(4),
        textDecoration: 'none',
    },
    activeLink: {
        color: theme.palette.primary.main
    },
    linkText: {
        fontSize: theme.typography.pxToRem(20),
        fontFamily: 'dodger',
    },
    footer: {
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
        backgroundImage: `url(${Stripe})`,
        backgroundSize: 'cover',
    },
    verticalFlex: {
        flexDirection: 'column',
    },

}))

const Layout = ({ pageTitle, pageIndex, children }) => {

    const classes = useStyles()

    return (
        <main>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box className={classes.root}>

                    <FlexBox id='header' className={classes.header}>
                        <FlexBox>
                            <Link to='/'><StaticImage placeholder='transparent' src='../images/logo.png' alt='logo' className={classes.logo} /></Link>
                            <Typography className={classes.title}>Adamobile</Typography>
                        </FlexBox>
                        <FlexBox>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/buy/'><Typography className={classes.linkText}>Buy</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/explore/'><Typography className={classes.linkText}>Explore</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/stats/'><Typography className={classes.linkText}>Stats</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/faq/'><Typography className={classes.linkText}>fAQ</Typography></Link>
                        </FlexBox>
                    </FlexBox>

                    <Stats />

                    {children}

                    <FlexBox id='footer' className={classes.footer}>
                        <FlexBox className={classes.verticalFlex} style={{marginRight: 50}}>
                            <Typography>Powered by</Typography>
                            <a href='https://cardano.org/'><StaticImage placeholder='transparent' src='../images/cardano.png' alt='cardano' className={classes.cardano} /></a>
                        </FlexBox>
                        <FlexBox className={classes.verticalFlex}>
                            <Link className={classes.link} to='/buy/'><Typography className={classes.link}>Buy</Typography></Link>
                            <Link className={classes.link} to='/explore/'><Typography className={classes.link}>Explore</Typography></Link>
                            <Link className={classes.link} to='/stats/'><Typography className={classes.link}>Stats</Typography></Link>
                            <Link className={classes.link} to='/faq/'><Typography className={classes.link}>FAQ</Typography></Link>
                        </FlexBox>
                        <FlexBox className={classes.verticalFlex}>
                            <a href='https://twitter.com/adamobile_cnft' className={classes.link}><Twitter /></a>
                            <a href='https://t.me/adamobile_cnft' className={classes.link}><Telegram /></a>
                            <a href='https://www.instagram.com/adamobile_cnft/' className={classes.link}><Instagram /></a>
                            <a href='mailto:adamobile@protonmail.com' className={classes.link}><Email /></a>
                        </FlexBox>
                    </FlexBox>
                </Box>
            </ThemeProvider>
        </main>
    )
}

export default Layout