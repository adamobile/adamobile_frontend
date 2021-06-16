import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const items = require('../res/explore.json')

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color: theme.primary,
  },
  menuItem: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
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

}))

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Explore: Connection is open!');
};

const ExplorePage = () => {

  const classes = useStyles()

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

  return (
    <ThemeProvider theme={theme}>

    <Layout pageTitle='Explore Adamobiles'>
    <Box className={classes.root}>

      <Box className={classes.filter}>

        <FormControl className={classes.formControl}>
          <InputLabel shrink id="typeFilterLabel">
            Type
          </InputLabel>
          <Select
            labelId="typeFilterLabel"
            id="typeFilterId"
            className={classes.selectEmpty}
            value={typeFilter}
            onChange={handleTypeFilterChange}
          >
            <MenuItem className={classes.MenuItem} value=''>All</MenuItem>
            <MenuItem value='micro'>Micro</MenuItem>
            <MenuItem value='suv'>SUV</MenuItem>
            <MenuItem value='super'>Super</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink id="colorFilterLabel">
            Color
          </InputLabel>
          <Select
            labelId="colorFilterLabel"
            id="colorFilterId"
            className={classes.selectEmpty}
            value={colorFilter}
            onChange={handleColorFilterChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='black'>Black</MenuItem>
            <MenuItem value='red'>Red</MenuItem>
            <MenuItem value='green'>Green</MenuItem>
            <MenuItem value='blue'>Blue</MenuItem>
            <MenuItem value='white'>White</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink id="rimsFilterLabel">
            Rims
          </InputLabel>
          <Select
            labelId="rimsFilterLabel"
            id="rimsFilterId"
            className={classes.selectEmpty}
            value={rimsFilter}
            onChange={handleRimsFilterChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='sport'>sport</MenuItem>
            <MenuItem value='teddy'>Teddy</MenuItem>
            <MenuItem value='monster'>Monster</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl}>
          <InputLabel shrink id="stickerFilterLabel">
            Sticker
          </InputLabel>
          <Select
            labelId="stickerFilterLabel"
            id="stickerFilterId"
            className={classes.selectEmpty}
            value={stickerFilter}
            onChange={handleStickerFilterChange}
          >
            <MenuItem value=''>All</MenuItem>
            <MenuItem value='cat'>Cat</MenuItem>
            <MenuItem value='dog'>Dog</MenuItem>
            <MenuItem value='fox'>Fox</MenuItem>
            <MenuItem value='ada'>ADA</MenuItem>
            <MenuItem value='btc'>BTC</MenuItem>
            <MenuItem value='eth'>ETH</MenuItem>
          </Select>
        </FormControl>

        <Button onClick={resetFilters}>Reset Filters</Button>
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
              {item.id} {soldItems.includes(item.id)? 'SOLD!': ''}
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
    </ThemeProvider>
  )

}

export default ExplorePage
