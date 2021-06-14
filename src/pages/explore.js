import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core/styles'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

const items = require('../res/explore.json')

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  filter: {
    padding: 20
  },
  gridListContainer: {
    maxWidth: 1200,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
  cardRoot: {
    maxWidth: 300,
  },
  cardmedia: {
    height: "100px",
  },

}));

const ExplorePage = () => {
  const classes = useStyles()

  const [dialogOpen, setDialogOpen] = React.useState(false)
  const [selectedItem, setSelectedItem] = React.useState('')
  const [typeFilter, setTypeFilter] = React.useState('')
  const [stickerFilter, setStickerFilter] = React.useState('')
  const [rimsFilter, setRimsFilter] = React.useState('')
  var [filteredItems, setFilteredItems] = React.useState(items)

  const handleClose = () => {
    setDialogOpen(false)
  }

  const handleTypeFilterChange = (event) => {
    const newTypeFilter = event.target.value
    setTypeFilter(newTypeFilter)
    filterItems({type:newTypeFilter, rims:rimsFilter, sticker: stickerFilter})
  }

  const handleRimsFilterChange = (event) => {
    const newRimsFilter = event.target.value
    setRimsFilter(newRimsFilter)
    filterItems({type:typeFilter, rims:newRimsFilter, sticker: stickerFilter})
  }

  const handleStickerFilterChange = (event) => {
    const newStickerFilter = event.target.value
    setStickerFilter(newStickerFilter)
    filterItems({type:typeFilter, rims:rimsFilter, sticker: newStickerFilter})
  }

  const filterItems = (args) => {
    var tmp = [...items]
    if (args.type) {
      tmp = tmp.filter(item => item.traits.type === args.type)
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

  return (
    <Layout pageTitle='Explore Adamobiles'>
    <Box className={classes.root}>

      <Box className={classes.filter}>
        <FormLabel component='legend'>Type</FormLabel>
        <RadioGroup row aria-label='type' name='typeFilter' value={typeFilter} onChange={handleTypeFilterChange}>
          <FormControlLabel value='' control={<Radio />} label='All' />
          <FormControlLabel value='micro' control={<Radio />} label='Micro' />
          <FormControlLabel value='suv' control={<Radio />} label='SUV' />
          <FormControlLabel value='super' control={<Radio />} label='Super' />
        </RadioGroup>
      </Box>

      <Box className={classes.filter}>
        <FormLabel component='legend'>Rims</FormLabel>
        <RadioGroup row aria-label='rims' name='rimsFilter' value={rimsFilter} onChange={handleRimsFilterChange}>
          <FormControlLabel value='' control={<Radio />} label='All' />
          <FormControlLabel value='sport' control={<Radio />} label='Sport' />
          <FormControlLabel value='teddy' control={<Radio />} label='Teddy' />
          <FormControlLabel value='monster' control={<Radio />} label='Monster' />
        </RadioGroup>
      </Box>

      <Box className={classes.filter}>
        <FormLabel component='legend'>Sticker</FormLabel>
        <RadioGroup row aria-label='sticker' name='stickerFilter' value={stickerFilter} onChange={handleStickerFilterChange}>
          <FormControlLabel value='' control={<Radio />} label='All' />
          <FormControlLabel value='cat' control={<Radio />} label='Cat' />
          <FormControlLabel value='dog' control={<Radio />} label='Dog' />
          <FormControlLabel value='fox' control={<Radio />} label='Fox' />
          <FormControlLabel value='ada' control={<Radio />} label='ADA' />
          <FormControlLabel value='btc' control={<Radio />} label='BTC' />
          <FormControlLabel value='eth' control={<Radio />} label='ETH' />
        </RadioGroup>
      </Box>

    <Container maxWidth='sm' className={classes.gridListContainer}>
    <GridList cellHeight={300} className={classes.gridList} cols={3}>
    {filteredItems.map((item) => (
      <GridListTile key={item.id}>
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
            {item.id} {item.type}
          </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
      </GridListTile>
    ))}
    </GridList>
    </Container>
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
