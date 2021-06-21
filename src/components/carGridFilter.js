import * as React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectMultiple: {
    selected: theme.palette.primary.main,
  },
  filterLabel: {
    fontSize: theme.typography.pxToRem(24),
  },
  resetFiltersButton: {
    marginTop: theme.spacing(2),
  },
}))

const CarGridFilter = ({items, setFilteredItems}) => {

  const [typeFilter, setTypeFilter] = React.useState('')
  const [colorFilter, setColorFilter] = React.useState('')
  const [rimsFilter, setRimsFilter] = React.useState('')
  const [stickerFilter, setStickerFilter] = React.useState('')
  const [extrasFilter, setExtrasFilter] = React.useState([])

  const handleTypeFilterChange = (event) => {
    const newTypeFilter = event.target.value
    setTypeFilter(newTypeFilter)
    filterItems({type:newTypeFilter, color:colorFilter, rims:rimsFilter, sticker: stickerFilter, extras: extrasFilter})
  }

  const handleColorFilterChange = (event) => {
    const newColorFilter = event.target.value
    setColorFilter(newColorFilter)
    filterItems({type:typeFilter, color: newColorFilter, rims:rimsFilter, sticker: stickerFilter, extras: extrasFilter})
  }

  const handleRimsFilterChange = (event) => {
    const newRimsFilter = event.target.value
    setRimsFilter(newRimsFilter)
    filterItems({type:typeFilter, color:colorFilter, rims:newRimsFilter, sticker: stickerFilter, extras: extrasFilter})
  }

  const handleStickerFilterChange = (event) => {
    const newStickerFilter = event.target.value
    setStickerFilter(newStickerFilter)
    filterItems({type:typeFilter, color:colorFilter, rims:rimsFilter, sticker: newStickerFilter, extras: extrasFilter})
  }

  const handleExtrasFilterChange = (event) => {
    const newExtrasFilter = event.target.value
    setExtrasFilter(newExtrasFilter)
    filterItems({type:typeFilter, color:colorFilter, rims:rimsFilter, sticker: stickerFilter, extras: newExtrasFilter})
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
    if (args.extras.length > 0) {
      tmp = tmp.filter(item => args.extras.every(extraFilter => item.traits.extras.includes(extraFilter)))
    }
    setFilteredItems([...tmp])
  }

  const resetFilters = () => {
    setTypeFilter('')
    setColorFilter('')
    setRimsFilter('')
    setStickerFilter('')
    setExtrasFilter([])
    setFilteredItems([...items])
  }

  const classes = useStyles()
  return (
    <Box className={classes.filterContainer}>

    <FormControl className={classes.formControl}>
      <InputLabel shrink id='typeFilterLabel' className={classes.filterLabel}>
      Type
      </InputLabel>
      <Select
      labelId='typeFilterLabel'
      id='typeFilterId'
      className={classes.selectEmpty}
      value={typeFilter}
      onChange={handleTypeFilterChange}
      >
        <MenuItem className={classes.MenuItem} value=''>All</MenuItem>
        <MenuItem value='micro'>Micro</MenuItem>
        <MenuItem value='hatchback'>Hatchback</MenuItem>
        <MenuItem value='sedan'>Sedan</MenuItem>
        <MenuItem value='super'>Super</MenuItem>
        <MenuItem value='suv'>SUV</MenuItem>
      </Select>
    </FormControl>

    <FormControl className={classes.formControl}>
    <InputLabel shrink id='colorFilterLabel' className={classes.filterLabel}>
    Color
    </InputLabel>
    <Select
    labelId='colorFilterLabel'
    id='colorFilterId'
    className={classes.selectEmpty}
    value={colorFilter}
    onChange={handleColorFilterChange}
    >
    <MenuItem value=''>All</MenuItem>
    <MenuItem value='grey'>Grey</MenuItem>
    <MenuItem value='silver'>Silver</MenuItem>
    <MenuItem value='yellow'>Yellow</MenuItem>
    <MenuItem value='red'>Red</MenuItem>
    <MenuItem value='blue'>Blue</MenuItem>
    <MenuItem value='green'>Green</MenuItem>
    <MenuItem value='pink'>Pink</MenuItem>
    <MenuItem value='orange'>Orange</MenuItem>
    </Select>
    </FormControl>

    <FormControl className={classes.formControl}>
      <InputLabel shrink id='rimsFilterLabel' className={classes.filterLabel}>
        Rims
      </InputLabel>
      <Select
      labelId='rimsFilterLabel'
      id='rimsFilterId'
      className={classes.selectEmpty}
      value={rimsFilter}
      onChange={handleRimsFilterChange}
      >
        <MenuItem value=''>All</MenuItem>
        <MenuItem value='wings'>Wings</MenuItem>
        <MenuItem value='wings_double'>Double wings</MenuItem>
        <MenuItem value='feathers'>Feathers</MenuItem>
        <MenuItem value='blades'>Blades</MenuItem>
        <MenuItem value='columns'>Columns</MenuItem>
        <MenuItem value='shanks'>Shanks</MenuItem>
        <MenuItem value='cardanos'>Cardanos</MenuItem>
        <MenuItem value='teddies'>Teddies</MenuItem>
        <MenuItem value='rockets'>Rockets</MenuItem>
        <MenuItem value='skis'>Skis</MenuItem>
        <MenuItem value='monster'>Monster</MenuItem>
        <MenuItem value='tank'>Tank</MenuItem>
        <MenuItem value='robot'>Robot</MenuItem>
        <MenuItem value='gone'>Gone</MenuItem>
      </Select>
    </FormControl>

    <FormControl className={classes.formControl}>
      <InputLabel shrink id='stickerFilterLabel' className={classes.filterLabel}>
        Sticker
      </InputLabel>
      <Select
      labelId='stickerFilterLabel'
      id='stickerFilterId'
      className={classes.selectEmpty}
      value={stickerFilter}
      onChange={handleStickerFilterChange}
      >
        <MenuItem value=''>All</MenuItem>
        <MenuItem value='dog'>Dog</MenuItem>
        <MenuItem value='tiger'>Tiger</MenuItem>
        <MenuItem value='fox'>Fox</MenuItem>
        <MenuItem value='cat'>Cat</MenuItem>
        <MenuItem value='racing'>Racing</MenuItem>
        <MenuItem value='adamobile'>ADAmobile</MenuItem>
        <MenuItem value='cardano'>Cardano</MenuItem>
        <MenuItem value='ada'>ADA</MenuItem>
        <MenuItem value='eth'>ETH</MenuItem>
        <MenuItem value='btc'>BTC</MenuItem>
        <MenuItem value='smile'>Smile</MenuItem>
        <MenuItem value='mandala'>Mandala</MenuItem>
        <MenuItem value='eye'>Eye</MenuItem>
      </Select>
    </FormControl>

    <FormControl className={classes.formControl}>
      <InputLabel shrink id='extrasFilterLabel' className={classes.filterLabel}>
        Extras
      </InputLabel>
      <Select
      multiple
      labelId='extrasFilterLabel'
      id='extrasFilterId'
      className={classes.selectEmpty}
      value={extrasFilter}
      onChange={handleExtrasFilterChange}
      >
        <MenuItem className={classes.selectMultiple} value='horn_front'>Front horn</MenuItem>
        <MenuItem value='horn_top'>Top horn</MenuItem>
        <MenuItem value='spikes_front'>Front spikes</MenuItem>
        <MenuItem value='spikes_top'>Top spikes</MenuItem>
        <MenuItem value='spikes_rear'>Rear spikes</MenuItem>
        <MenuItem value='lights_front'>Front lights</MenuItem>
        <MenuItem value='lights_top'>Top lights</MenuItem>
        <MenuItem value='lights_blue'>Blue lights</MenuItem>
        <MenuItem value='shark_fin'>Shark fin</MenuItem>
        <MenuItem value='golden_lion'>Golden lion</MenuItem>
        <MenuItem value='turbine'>Turbine</MenuItem>
        <MenuItem value='monster_exhaust'>Monster exhaust</MenuItem>
        <MenuItem value='spoiler'>Spoiler</MenuItem>
        <MenuItem value='taxi'>Taxi</MenuItem>
        <MenuItem value='antenna'>Antenna</MenuItem>
        <MenuItem value='firefighter'>Firefighter</MenuItem>
        <MenuItem value='ship'>Ship</MenuItem>
        <MenuItem value='tent'>Tent</MenuItem>
        <MenuItem value='horn_bull'>Bull horns</MenuItem>
      </Select>
    </FormControl>

    <Button color='primary' size='large' className={classes.resetFiltersButton} onClick={resetFilters}>Reset Filters</Button>
    </Box>
  )
}

export default CarGridFilter
