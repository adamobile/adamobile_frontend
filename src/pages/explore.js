import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import CarCard from '../components/CarCard'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme/theme'

const items = require('../res/explore.json')

const ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Explore: Connection is open!');
};

const useStyles = makeStyles((theme) => ({
  root: {
    background:theme.palette.background.default,
  },
  gridListContainer: {
    maxWidth: 1200,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
}))

const ExplorePage = () => {

  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const [typeFilter, setTypeFilter] = React.useState('')
  const [colorFilter, setColorFilter] = React.useState('')
  const [stickerFilter, setStickerFilter] = React.useState('')
  const [rimsFilter, setRimsFilter] = React.useState('')
  var [filteredItems, setFilteredItems] = React.useState(items)
  var [soldItems, setSoldItems] = React.useState([])

  ws.onmessage = function (event) {

    console.log('Explore received: ', event.data)
    const msg = JSON.parse(event.data)

    switch (msg.type) {
      case 'sold':
          setSoldItems([...soldItems, msg.sold])
        break;

      case 'log':
      break;
      default:
        break;
    }
  }

  const handleClose = () => {
    setDialogOpen(false)
  }

  const handleTypeFilterChange = (event) => {
    const newTypeFilter = event.target.value
    setTypeFilter(newTypeFilter)
    filterItems({type:newTypeFilter, color:colorFilter, rims:rimsFilter, sticker: stickerFilter})
  }

  const handleColorFilterChange = (event) => {
    const newColorFilter = event.target.value
    setColorFilter(newColorFilter)
    filterItems({type:typeFilter, color: newColorFilter, rims:rimsFilter, sticker: stickerFilter})
  }

  const handleRimsFilterChange = (event) => {
    const newRimsFilter = event.target.value
    setRimsFilter(newRimsFilter)
    filterItems({type:typeFilter, color:colorFilter, rims:newRimsFilter, sticker: stickerFilter})
  }

  const handleStickerFilterChange = (event) => {
    const newStickerFilter = event.target.value
    setStickerFilter(newStickerFilter)
    filterItems({type:typeFilter, color:colorFilter, rims:rimsFilter, sticker: newStickerFilter})
  }

  const filterItems = (args) => {
    var tmp = [...items]
    if (args.type) {
      tmp = tmp.filter(item => item.traits.type === args.type)
    }
    if (args.color) {
      tmp = tmp.filter(item => item.traits.color === args.color)
    }
    if (args.rims) {
      tmp = tmp.filter(item => item.traits.rims === args.rims)
    }
    if (args.sticker) {
      tmp = tmp.filter(item => item.traits.sticker === args.sticker)
    }
    setFilteredItems([...tmp])
  }

  const showDetail = (item) => {
    setSelectedItem(item)
    setDialogOpen(true)
  }

  const resetFilters = () => {
    setTypeFilter('')
    setColorFilter('')
    setRimsFilter('')
    setStickerFilter('')
    setFilteredItems([...items])
  }

  const classes = useStyles()
  return (
    <Layout pageTitle='Explore Adamobiles'>
    <Box className={classes.root}>

    <Container maxWidth='lg' className={classes.gridListContainer}>
      <GridList cellHeight={300} className={classes.gridList} cols={3}>
      {filteredItems.map((item) => (
          <CarCard car={item} isSold={soldItems.includes(item.id)} onClick={showDetail}/>
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
