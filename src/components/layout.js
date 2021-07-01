import * as React from 'react'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme/theme'
import '../theme/typography.css'
import {
    Typography,
    AppBar,
    Toolbar,
    Tab,
    Tabs,
} from '@material-ui/core'
import {navigate} from 'gatsby'
import {Stats} from '../components/stats'

const homeIndex = 0
const buyIndex = 1
const exploreIndex = 2
const statsIndex = 3
const faqIndex = 4

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        fontSize: theme.typography.pxToRem(28),
        fontWeight: 800,
        flexGrow: 1,
    }
}))

const Layout = ({ pageTitle, pageIndex, children }) => {

    const [value, setValue] = React.useState(pageIndex);
    const classes = useStyles()

    const handleTabChange = (event, newValue) => {
        setValue(newValue);

        switch (newValue) {
            case homeIndex:
                navigate('/inProgress/')
                break;
            case buyIndex:
                navigate('/buy/')
                break;
            case exploreIndex:
                navigate('/explore/')
                break;
            case statsIndex:
                navigate('/stats/')
                break;
            case faqIndex:
                navigate('/faq/')
                break;

            default:
                break;
        }
    };

    return (
        <main>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <div className={classes.root}>

                    <AppBar position='static'>
                        <Toolbar>
                            <Typography variant='h6' className={classes.title}>
                                {pageTitle}
                            </Typography>

                            <Tabs centered value={value} onChange={handleTabChange} aria-label='simple tabs example'>
                                <Tab label='Home' {...a11yProps(homeIndex)} />
                                <Tab label='Buy' {...a11yProps(buyIndex)} />
                                <Tab label='Explore' {...a11yProps(exploreIndex)} />
                                <Tab label='Stats' {...a11yProps(statsIndex)} />
                                <Tab label='FAQ' {...a11yProps(faqIndex)} />
                            </Tabs>
                        </Toolbar>
                    </AppBar>
                    <Stats />

                    {children}

                </div>
            </ThemeProvider>
        </main>
    )
}

export default Layout