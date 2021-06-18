import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import CarCard from '../components/carCard'
import CarGridFilter from '../components/carGridFilter'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme/theme'
import clsx from 'clsx';

const items = require('../res/explore.json')

// const ws = new WebSocket('ws://localhost:8080');
// ws.onopen = function (event) {
//   console.log('Explore: Connection is open!');
// };

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    width: '70%',
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
}))

const ExplorePage = () => {

  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const [filteredItems, setFilteredItems] = React.useState(items)
  const [soldItems, setSoldItems] = React.useState([])

  // ws.onmessage = function (event) {
  //
  //   console.log('Explore received: ', event.data)
  //   const msg = JSON.parse(event.data)
  //
  //   switch (msg.type) {
  //     case 'sold':
  //         setSoldItems([...soldItems, msg.sold])
  //       break;
  //
  //     case 'log':
  //     break;
  //     default:
  //       break;
  //   }
  // }

  const handleClose = () => {
    setDialogOpen(false)
  }

  const classes = useStyles()
  return (
    <Layout pageTitle='Explore Adamobiles'>
    <Box>

    <Container className={classes.mainContainer}>
      <CarGridFilter items={items} setFilteredItems={setFilteredItems}/>
    </Container>

    <Container className={classes.mainContainer}>
      <GridList className={classes.gridList} cols={3}>
      {filteredItems.map((item) => (
          <CarCard key={item.id} id={item.id} car={item} isSold={soldItems.includes(item.id)} showDetail={()=>{
            setSelectedItem(item)
            setDialogOpen(true)
          }}/>
      ))}
      </GridList>
    </Container>

    // TODO: move to own file
    <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={dialogOpen}>
      <DialogContent dividers>
        <img src={ selectedItem === null? ``: `../${selectedItem.image}.png`} alt='grid item'/>
        <DialogContentText>{JSON.stringify(selectedItem.traits)}</DialogContentText>
      </DialogContent>
    </Dialog>
    </Box>
    </Layout>
  )
}

export default ExplorePage
