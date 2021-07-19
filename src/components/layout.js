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
    Icon,
    SvgIcon,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { Link, navigate } from 'gatsby'
import Stats from '../components/stats'
import Stripe from '../images/stripe.png'
import { Telegram, Twitter, Instagram } from '@material-ui/icons';

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '100%',
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
        backgroundImage: `url(${Stripe})`,
        backgroundSize: 'cover'
    },
    headerFirstRow: {
        justifyContent: 'space-around',
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

                    <Box className={classes.header}>
                        <FlexBox id='header' className={classes.headerFirstRow}>
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
                                        <MenuItem selected={typeof window !== 'undefined' && window.location.href === option.toLocaleLowerCase()} key={option} onClick={() => { handleMenuAction(`/${option.toLocaleLowerCase()}/`) }}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </FlexBox>
                        <Stats />
                    </Box>


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
                            <a href='https://discord.gg/pXcHHTzj' className={classes.link}>
                                <SvgIcon>
                                    <path d='M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z' />
                                </SvgIcon>
                            </a>
                        </FlexBox>
                    </FlexBox>
                </Box>
            </ThemeProvider>
        </main>
    )
}

export default Layout