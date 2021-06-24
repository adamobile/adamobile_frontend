import * as React from 'react'
import PropTypes from 'prop-types';
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import {
  AppBar,
  Toolbar,
  Tab,
  Tabs,
  Typography,
  Box
} from '@material-ui/core'
import '../theme/typography.css'
import theme from '../theme/theme'
import Faq from '../components/faq'
import Explore from '../components/explore'
import Buy from '../components/buy'
import Main from '../components/main'
import { Stats, updateStats } from '../components/stats'

const WebSocket = require('isomorphic-ws')
const cars = require('../res/explore.json')

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Connection is open!')
}
ws.onmessage = function (event) {

  console.log('received: ', event.data)
  const msg = JSON.parse(event.data)

  switch (msg.type) {
    case 'stats':
      updateStats(msg.stats)
      break

    case 'uuid':
      break

    case 'sold':
      break

    case 'log':
      break

    default:
      break
  }

}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

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
    flexGrow: 1,
  },
}));

const IndexPage = (props) => {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              ADAmobile
            </Typography>

            <Tabs centered value={value} onChange={handleChange} aria-label='simple tabs example'>
              <Tab label='Home' {...a11yProps(0)} />
              <Tab label='Buy' {...a11yProps(1)} />
              <Tab label='Explore' {...a11yProps(2)} />
              <Tab label='FAQ' {...a11yProps(3)} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <Stats/>
        <TabPanel value={value} index={0}>
          <Main />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Buy cars={cars} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Explore cars={cars} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Faq />
        </TabPanel>
      </div>
    </ThemeProvider>
  )
}

export default IndexPage
