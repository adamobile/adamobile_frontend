import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/CarCard'

const items = require('../res/explore.json')
const WebSocket = require('isomorphic-ws')

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Connection is open!');
};

const useStyles = makeStyles((theme) => ({
  
  gridListContainer: {
    maxWidth: 1200,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },

}));

const IndexPage = (props) => {
  const classes = useStyles()

  const [stats, setStats] = React.useState({'total':0,'minted':0,'minting':0,'available':0})
  const [uuid, setUuid] = React.useState('')
  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const [filteredItems, setFilteredItems] = React.useState([])
  const [soldItems, setSoldItems] = React.useState([])

  const showDetail = (item) => {
    setSelectedItem(item)
    setDialogOpen(true)
  }

  const hideDetail = () => {
    setDialogOpen(false)
  }

  ws.onmessage = function (event) {

    console.log('received: ', event.data)
    const msg = JSON.parse(event.data)

    switch (msg.type) {
      case 'stats':
        setStats(msg.stats)
        break;

      case 'uuid':
        setUuid(msg.uuid)
        break;

      case 'sold':
          setSoldItems([...soldItems, msg.sold])
          filterItems([...soldItems, msg.sold])
        break;

      case 'log':
      break;
      default:
        break;
    }

  }

  const filterItems = (sold) => {
    setFilteredItems(items.filter(item => sold.includes(item.id)))
    document.getElementById(sold[sold.length-1]).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }

  return (
    <Layout pageTitle="Welcome to ADAmobile">
      <Box>Grab your ADAmobile and join the ride!</Box>
      <Stats stats={stats}></Stats><br/>
      <Box>UUID: {uuid}</Box>

      <Container maxWidth='sm' className={classes.gridListContainer}>
        <GridList id='gridList' cellHeight={300} className={classes.gridList} cols={2.5}>
        {filteredItems.map((item) => (
          <CarCard car={item} isSold={false} onClick={showDetail}/>
        ))}
        </GridList>

        <Dialog onClose={hideDetail} aria-labelledby='customized-dialog-title' open={dialogOpen}>
          <DialogContent dividers>
            <img src={ selectedItem === null? ``: `../${selectedItem.image}.png`} alt='grid item'/>
            <DialogContentText>{JSON.stringify(selectedItem.traits)}</DialogContentText>
          </DialogContent>
        </Dialog>

    </Container>

    </Layout>
  )
}

export default IndexPage
