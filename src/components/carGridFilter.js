import * as React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Button,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { getSessionItem, setSessionItem } from '../utils/utils'

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
  select: {
    marginTop: theme.spacing(2),
  },
  menuItem: {
    '& .MuiListItemIcon-root': {
      marginRight: theme.spacing(1),
    }
  },
  filterLabel: {
  },
  resetFiltersButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
}))

const CarGridFilter = ({ items, soldItems, setFilteredItems }) => {

  var initialFilters = getSessionItem('filters', { type: [], color: [], rims: [], sticker: [], extras: [], sold: [] }, true)

  const [typeFilter, setTypeFilter] = React.useState(initialFilters.type)
  const [colorFilter, setColorFilter] = React.useState(initialFilters.color)
  const [rimsFilter, setRimsFilter] = React.useState(initialFilters.rims)
  const [stickerFilter, setStickerFilter] = React.useState(initialFilters.sticker)
  const [extrasFilter, setExtrasFilter] = React.useState(initialFilters.extras)
  const [soldFilter, setSoldFilter] = React.useState(initialFilters.sold)

  const getFilters = () => {
    return { type: typeFilter, color: colorFilter, rims: rimsFilter, sticker: stickerFilter, extras: extrasFilter, sold: soldFilter }
  }

  React.useEffect(() => {
    setSessionItem('filters', JSON.stringify(getFilters()))
    filterItems({ type: typeFilter, color: colorFilter, rims: rimsFilter, sticker: stickerFilter, extras: extrasFilter, sold: soldFilter }, getSessionItem('shuffledItems', items, true))
  }, [typeFilter, colorFilter, rimsFilter, stickerFilter, extrasFilter, soldFilter])

  React.useEffect(() => {
    var shuffledItems
    if (!getSessionItem('didShuffle', false)) {
      shuffledItems = [...items]
      shuffledItems.sort(() => Math.random() - 0.5)
      setSessionItem('didShuffle', true)
      setSessionItem('shuffledItems', JSON.stringify(shuffledItems))
    }
    else {
      shuffledItems = getSessionItem('shuffledItems', items, true)
    }
    filterItems({ type: typeFilter, color: colorFilter, rims: rimsFilter, sticker: stickerFilter, extras: extrasFilter, sold: soldFilter }, shuffledItems)
  }, [])

  const handleTypeFilterChange = (event) => {
    setTypeFilter(event.target.value)
  }

  const handleColorFilterChange = (event) => {
    setColorFilter(event.target.value)
  }

  const handleRimsFilterChange = (event) => {
    setRimsFilter(event.target.value)
  }

  const handleStickerFilterChange = (event) => {
    setStickerFilter(event.target.value)
  }

  const handleExtrasFilterChange = (event) => {
    setExtrasFilter(event.target.value)
  }

  const handleSoldFilterChange = (event) => {
    setSoldFilter(event.target.value)
  }

  const filterSold = (args, shuffledItems) => {
    if (args[0] === 'Sold') {
      return shuffledItems.filter(item => soldItems.has(item.id))
    }

    return shuffledItems.filter(item => !soldItems.has(item.id))
  }

  const filterItems = (args, shuffledItems) => {

    const shouldFilteredType = args.type.length > 0
    const filteredType = shouldFilteredType ? shuffledItems.filter(item => args.type.some(typeFilter => item.type === typeFilter)) : []

    const shouldFilterColor = args.color.length > 0
    const filteredColor = shouldFilterColor ? shuffledItems.filter(item => args.color.some(colorFilter => item.color === colorFilter)) : []

    const shouldFilterRims = args.rims.length > 0
    const filteredRims = shouldFilterRims ? shuffledItems.filter(item => args.rims.some(rimsFilter => item.rims === rimsFilter)) : []

    const shouldFilterSticker = args.sticker.length > 0
    const filteredSticker = shouldFilterSticker ? shuffledItems.filter(item => args.sticker.some(stickerFilter => item.sticker === stickerFilter)) : []

    const shouldFilterExtras = args.extras.length > 0
    const filteredExtras = shouldFilterExtras ? shuffledItems.filter(item => args.extras.some(extraFilter => item.extras.includes(extraFilter))) : []

    const shouldFilterSold = args.sold.length === 1
    const filteredSold = shouldFilterSold ? filterSold(args.sold, shuffledItems) : []

    setFilteredItems(shuffledItems.filter(item => {
      return (shouldFilteredType ? filteredType.includes(item) : true)
        && (shouldFilterColor ? filteredColor.includes(item) : true)
        && (shouldFilterRims ? filteredRims.includes(item) : true)
        && (shouldFilterSticker ? filteredSticker.includes(item) : true)
        && (shouldFilterExtras ? filteredExtras.includes(item) : true)
        && (shouldFilterSold ? filteredSold.includes(item) : true)
    }))
  }

  const resetFilters = () => {
    setTypeFilter([])
    setColorFilter([])
    setRimsFilter([])
    setStickerFilter([])
    setExtrasFilter([])
    setSoldFilter([])
    setFilteredItems(getSessionItem('shuffledItems', items, true))
  }

  const getMenuItem = (value) => {
    return <MenuItem value={value} className={classes.menuItem}>
      <ListItemIcon>
        <img src={`../clipart/${value}.png`} alt={value} height={60} />
      </ListItemIcon>
      <ListItemText>
        {value}
      </ListItemText>
    </MenuItem>
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
          className={classes.select}
          value={typeFilter}
          onChange={handleTypeFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Microcar', 'Hatchback', 'Sedan', 'Supercar', 'SUV'].map((type) => {
            return getMenuItem(type)
          })}
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
          className={classes.select}
          value={colorFilter}
          onChange={handleColorFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Black', 'White', 'Yellow', 'Red', 'Blue', 'Green', 'Pink', 'Orange'].map((color) => {
            return getMenuItem(color)
          })}
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
          className={classes.select}
          value={rimsFilter}
          onChange={handleRimsFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Wings', 'Double wings', 'Feathers', 'Blades', 'Columns', 'Shanks', 'Cardanos', 'Teddies', 'Rockets', 'Skis', 'Monster', 'Tank', 'Robot', 'Gone'].map((rims) => {
            return getMenuItem(rims)
          })}
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
          className={classes.select}
          value={stickerFilter}
          onChange={handleStickerFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Dog', 'Tiger', 'Fox', 'Cat', 'Racer', 'Adamobile', 'Cardano', 'ADA', 'ETH', 'BTC', 'Smile', 'Mandala', 'Devil eye'].map((sticker) => {
            return getMenuItem(sticker)
          })}
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
          className={classes.select}
          value={extrasFilter}
          onChange={handleExtrasFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Front horn', 'Top horn', 'Front spikes', 'Top spikes', 'Rear spikes', 'Front lights', 'Top lights', 'Police lights', 'Shark fin', 'Golden lion', 'Turbine', 'Monster exhaust', 'Spoiler', 'Taxi', 'Antenna', 'Firefighter', 'Ship', 'Tent', 'Devil horns'].map((extras) => {
            return getMenuItem(extras)
          })}
        </Select>
      </FormControl>


      <FormControl className={classes.formControl}>
        <InputLabel shrink id='soldFilterLabel' className={classes.filterLabel}>
          Sold
        </InputLabel>
        <Select
          multiple
          labelId='soldFilterLabel'
          id='soldFilterId'
          className={classes.select}
          value={soldFilter}
          onChange={handleSoldFilterChange}
          renderValue={(selected) => selected.join(", ")}
        >
          {['Sold', 'Available'].map((sold) => {
            return getMenuItem(sold)
          })}
        </Select>
      </FormControl>

      <Button size='large' className={classes.resetFiltersButton} onClick={resetFilters}>Reset Filters</Button>

    </Container>
  )
}

export default CarGridFilter
