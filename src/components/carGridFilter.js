import * as React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Button,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  filterContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  filterLabel: {
    fontSize: theme.typography.pxToRem(24),
  },
  resetFiltersButton: {
    marginTop: theme.spacing(2),
  },
}))

const MultipleMenuItem = withStyles((theme) => ({
  root: {
    '&:selection': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const CarGridFilter = ({ items, setFilteredItems }) => {

  const [typeFilter, setTypeFilter] = React.useState([])
  const [colorFilter, setColorFilter] = React.useState([])
  const [rimsFilter, setRimsFilter] = React.useState([])
  const [stickerFilter, setStickerFilter] = React.useState([])
  const [extrasFilter, setExtrasFilter] = React.useState([])

  const handleTypeFilterChange = (event) => {
    const newTypeFilter = event.target.value
    setTypeFilter(newTypeFilter)
    filterItems({ type: newTypeFilter, color: colorFilter, rims: rimsFilter, sticker: stickerFilter, extras: extrasFilter })
  }

  const handleColorFilterChange = (event) => {
    const newColorFilter = event.target.value
    setColorFilter(newColorFilter)
    filterItems({ type: typeFilter, color: newColorFilter, rims: rimsFilter, sticker: stickerFilter, extras: extrasFilter })
  }

  const handleRimsFilterChange = (event) => {
    const newRimsFilter = event.target.value
    setRimsFilter(newRimsFilter)
    filterItems({ type: typeFilter, color: colorFilter, rims: newRimsFilter, sticker: stickerFilter, extras: extrasFilter })
  }

  const handleStickerFilterChange = (event) => {
    const newStickerFilter = event.target.value
    setStickerFilter(newStickerFilter)
    filterItems({ type: typeFilter, color: colorFilter, rims: rimsFilter, sticker: newStickerFilter, extras: extrasFilter })
  }

  const handleExtrasFilterChange = (event) => {
    const newExtrasFilter = event.target.value
    setExtrasFilter(newExtrasFilter)
    filterItems({ type: typeFilter, color: colorFilter, rims: rimsFilter, sticker: stickerFilter, extras: newExtrasFilter })
  }

  const filterItems = (args) => {

    const filteredType = args.type.length>0? items.filter(item => args.type.some(typeFilter => item.type === typeFilter)): []
    const filteredColor = args.color.length>0? items.filter(item => args.color.some(colorFilter => item.color === colorFilter)): []
    const filteredRims = args.rims.length>0? items.filter(item => args.rims.some(rimsFilter => item.rims === rimsFilter)): []
    const filteredSticker = args.sticker.length>0? items.filter(item => args.sticker.some(stickerFilter => item.sticker === stickerFilter)): []
    const filteredExtras = args.extras.length>0? items.filter(item => args.extras.some(extraFilter => item.extras.includes(extraFilter))): []
    const all = new Set([...filteredType, ...filteredColor, ...filteredRims, ...filteredSticker, ...filteredExtras])
    console.log(all);
    setFilteredItems([...all])
  }

  const resetFilters = () => {
    setTypeFilter([])
    setColorFilter([])
    setRimsFilter([])
    setStickerFilter([])
    setExtrasFilter([])
    setFilteredItems([...items])
  }

  const classes = useStyles()
  return (
    <Container className={classes.filterContainer}>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id='typeFilterLabel' className={classes.filterLabel}>
          Type
        </InputLabel>
        <Select
        multiple
          labelId='typeFilterLabel'
          id='typeFilterId'
          className={classes.selectEmpty}
          value={typeFilter}
          onChange={handleTypeFilterChange}
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Microcar'>Micro</MenuItem>
          <MenuItem value='Hatchback'>Hatchback</MenuItem>
          <MenuItem value='Sedan'>Sedan</MenuItem>
          <MenuItem value='Supercar'>Super</MenuItem>
          <MenuItem value='SUV'>SUV</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id='colorFilterLabel' className={classes.filterLabel}>
          Color
        </InputLabel>
        <Select
        multiple
          labelId='colorFilterLabel'
          id='colorFilterId'
          className={classes.selectEmpty}
          value={colorFilter}
          onChange={handleColorFilterChange}
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Black'>Black</MenuItem>
          <MenuItem value='White'>White</MenuItem>
          <MenuItem value='Yellow'>Yellow</MenuItem>
          <MenuItem value='Red'>Red</MenuItem>
          <MenuItem value='Blue'>Blue</MenuItem>
          <MenuItem value='Green'>Green</MenuItem>
          <MenuItem value='Pink'>Pink</MenuItem>
          <MenuItem value='Orange'>Orange</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id='rimsFilterLabel' className={classes.filterLabel}>
          Rims
        </InputLabel>
        <Select
        multiple
          labelId='rimsFilterLabel'
          id='rimsFilterId'
          className={classes.selectEmpty}
          value={rimsFilter}
          onChange={handleRimsFilterChange}
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Wings'>Wings</MenuItem>
          <MenuItem value='Double wings'>Double wings</MenuItem>
          <MenuItem value='Feathers'>Feathers</MenuItem>
          <MenuItem value='Blades'>Blades</MenuItem>
          <MenuItem value='Columns'>Columns</MenuItem>
          <MenuItem value='Shanks'>Shanks</MenuItem>
          <MenuItem value='Cardanos'>Cardanos</MenuItem>
          <MenuItem value='Teddies'>Teddies</MenuItem>
          <MenuItem value='Rockets'>Rockets</MenuItem>
          <MenuItem value='Skis'>Skis</MenuItem>
          <MenuItem value='Monster'>Monster</MenuItem>
          <MenuItem value='Tank'>Tank</MenuItem>
          <MenuItem value='Robot'>Robot</MenuItem>
          <MenuItem value='Gone'>Gone</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel shrink id='stickerFilterLabel' className={classes.filterLabel}>
          Sticker
        </InputLabel>
        <Select
        multiple
          labelId='stickerFilterLabel'
          id='stickerFilterId'
          className={classes.selectEmpty}
          value={stickerFilter}
          onChange={handleStickerFilterChange}
        >
          <MenuItem value=''>All</MenuItem>
          <MenuItem value='Dog'>Dog</MenuItem>
          <MenuItem value='Tiger'>Tiger</MenuItem>
          <MenuItem value='Fox'>Fox</MenuItem>
          <MenuItem value='Cat'>Cat</MenuItem>
          <MenuItem value='Racer'>Racer</MenuItem>
          <MenuItem value='Adamobile'>ADAmobile</MenuItem>
          <MenuItem value='Cardano'>Cardano</MenuItem>
          <MenuItem value='ADA'>ADA</MenuItem>
          <MenuItem value='ETH'>ETH</MenuItem>
          <MenuItem value='BTC'>BTC</MenuItem>
          <MenuItem value='Smile'>Smile</MenuItem>
          <MenuItem value='Mandala'>Mandala</MenuItem>
          <MenuItem value='Eye'>Devil Eye</MenuItem>
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
          <MenuItem value='Front horn'>Front horn</MenuItem>
          <MenuItem value='Top horn'>Top horn</MenuItem>
          <MenuItem value='Front spikes'>Front spikes</MenuItem>
          <MenuItem value='Top spikes'>Top spikes</MenuItem>
          <MenuItem value='Rear spikes'>Rear spikes</MenuItem>
          <MenuItem value='Front lights'>Front lights</MenuItem>
          <MenuItem value='Top lights'>Top lights</MenuItem>
          <MenuItem value='Police lights'>Police lights</MenuItem>
          <MenuItem value='Shark fin'>Shark fin</MenuItem>
          <MenuItem value='Golden lion'>Golden lion</MenuItem>
          <MenuItem value='Turbine'>Turbine</MenuItem>
          <MenuItem value='Monster exhaust'>Monster exhaust</MenuItem>
          <MenuItem value='Spoiler'>Spoiler</MenuItem>
          <MenuItem value='Taxi'>Taxi</MenuItem>
          <MenuItem value='Antenna'>Antenna</MenuItem>
          <MenuItem value='Firefighter'>Firefighter</MenuItem>
          <MenuItem value='Ship'>Ship</MenuItem>
          <MenuItem value='Tent'>Tent</MenuItem>
          <MenuItem value='Devil horns'>Devil horns</MenuItem>
        </Select>
      </FormControl>

      <Button size='large' className={classes.resetFiltersButton} onClick={resetFilters}>Reset Filters</Button>

    </Container>
  )
}

export default CarGridFilter
