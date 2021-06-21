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
        <MenuItem value='suv'>SUV</MenuItem>
        <MenuItem value='super'>Super</MenuItem>
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
    <MenuItem value='black'>Black</MenuItem>
    <MenuItem value='red'>Red</MenuItem>
    <MenuItem value='green'>Green</MenuItem>
    <MenuItem value='blue'>Blue</MenuItem>
    <MenuItem value='white'>White</MenuItem>
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
        <MenuItem value='sport'>sport</MenuItem>
        <MenuItem value='teddy'>Teddy</MenuItem>
        <MenuItem value='monster'>Monster</MenuItem>
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
      </Select>
    </FormControl>

    <Button color='primary' size='large' className={classes.resetFiltersButton} onClick={resetFilters}>Reset Filters</Button>
    </Box>
  )
}

export default CarGridFilter
