import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { ThemeProvider, makeStyles, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import '../theme/typography.css'
import {
    Typography,
    Box,
    IconButton,
    Menu,
    MenuItem,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link, navigate } from 'gatsby'
import { Stats } from '../components/stats'
import Stripe from '../images/stripe.png'
import { Telegram, Twitter, Instagram, Email } from '@material-ui/icons';

const options = [
    'Buy',
    'Explore',
    'Stats',
    'FAQ',
]

const ITEM_HEIGHT = 48

const FlexBox = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
    }
})(Box)

const StyledMenuItem = withStyles(theme => ({
    root: {
        fontFamily: 'dodger',
        '&:focus': {
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white
            }
        }
    }
}))(MenuItem)

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%'
    },
    logo: {
        width: 150,
        height: 150,
        marginRight: theme.spacing(2)
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
    headerLinksMenu: {
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    headerLinks: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    title: {
        [theme.breakpoints.down('md')]: {
            fontSize: theme.typography.pxToRem(20),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(28),
        },
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

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuAction = (dest) => {
        navigate(dest)
        setAnchorEl(null);
    };

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
                        <FlexBox className={classes.headerLinks}>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/buy/'><Typography className={classes.linkText}>Buy</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/explore/'><Typography className={classes.linkText}>Explore</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/stats/'><Typography className={classes.linkText}>Stats</Typography></Link>
                            <Link activeClassName={classes.activeLink} className={classes.link} to='/faq/'><Typography className={classes.linkText}>fAQ</Typography></Link>
                        </FlexBox>

                        <Box className={classes.headerLinksMenu}>
                            <IconButton
                                aria-label='menu'
                                aria-controls='menu'
                                aria-haspopup='true'
                                onClick={handleClick}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id='menu'
                                anchorEl={anchorEl}
                                keepMounted
                                open={open}
                                onClose={handleMenuAction}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                    },
                                }}
                            >
                                {options.map((option) => (
                                    <StyledMenuItem selected={window.location.href === option.toLocaleLowerCase()} key={option} onClick={() => { handleMenuAction(`/${option.toLocaleLowerCase()}/`) }}>
                                        {option}
                                    </StyledMenuItem>
                                ))}
                            </Menu>
                        </Box>

                    </FlexBox>

                    <Stats />

                    {children}

                    <FlexBox id='footer' className={classes.footer}>
                        <FlexBox className={classes.verticalFlex} style={{ marginRight: 50 }}>
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