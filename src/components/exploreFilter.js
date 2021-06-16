import * as React from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Typography from '@material-ui/core/Typography'

const carGridFilter = () => {


  return (
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
  )
}
