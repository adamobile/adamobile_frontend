import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core/styles'
const items = require('../res/explore.json')
const WebSocket = require('isomorphic-ws')

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Connection is open!');
};

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filter: {
    padding: 20
  },
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
  cardRoot: {
    maxWidth: 300,
  },
  cardmedia: {
    height: "100px",
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
          <GridListTile id={item.id} key={item.id}>
            <Card className={classes.cardRoot} onClick={()=>{showDetail(item)}}>
              <CardActionArea>
              <CardMedia
                component="img"
                className={classes.cardMedia}
                image={`../${item.image}.png`}
                title={item.id}
              />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {item.id}
              </Typography>
            </CardContent>
            </CardActionArea>
            </Card>
          </GridListTile>
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
