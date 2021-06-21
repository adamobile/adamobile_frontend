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
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const items = require('../res/explore.json')

// const ws = new WebSocket('ws://localhost:8080');
// ws.onopen = function (event) {
//   console.log('Explore: Connection is open!');
// };

const useStyles = makeStyles((theme) => ({
  mainContainer: {
  },
  gridList: {
  },
}))

const DodgerTypography = withStyles({
  root: {
    color: '#b71c1c',
    fontFamily: 'dodger'
  }
})(Typography);

const BoldTypography = withStyles({
  root: {
    fontWeight: 600
  }
})(Typography);

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

  const dialogText = () => {
    if(dialogOpen){
      return <Box>
              <DodgerTypography>{selectedItem.id}</DodgerTypography>
              {Object.keys(selectedItem.traits).map((trait) => (
                    <Box>
                      <DodgerTypography>{trait} : {selectedItem.traits[trait]}</DodgerTypography>
                    </Box>
                ))}
            </Box>
    }
  }

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

    <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={dialogOpen}>
      <DialogContent dividers>
        <img src={ selectedItem === null? ``: `../${selectedItem.image}.png`} alt='grid item'/>
        <DialogContentText>{dialogText()}</DialogContentText>
      </DialogContent>
    </Dialog>
    </Box>
    </Layout>
  )
}

export default ExplorePage
