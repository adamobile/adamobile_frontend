import * as React from 'react'
import {
  Box,
  Container,
  GridList
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CarGridFilter from '../components/carGridFilter'
import CarCard from '../components/carCard'
import { CarDetail, showCarDetails } from '../components/carDetail'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
  },
  gridListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
}))

let updateSoldItemsExplore = () => {}

const Explore = (props) => {

  const [filteredItems, setFilteredItems] = React.useState(props.cars)
  const [soldItems, setSoldItems] = React.useState(props.sold)
  const classes = useStyles()

  updateSoldItemsExplore = (newSoldItems) => {
      setSoldItems(newSoldItems)
  }


  return (
    <Container className={classes.root}>
      <Box>
        <CarGridFilter items={props.cars} setFilteredItems={setFilteredItems} />
      </Box>
      <Box className={classes.gridListContainer}>
        <GridList cellHeight='auto' spacing={20} cols={4}>
          {filteredItems.map((item) => (
            <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id)} showdetail={() => {
              showCarDetails(item)
            }} />
          ))}
        </GridList>
      </Box>
      <CarDetail />
    </Container>
  )
}

export {Explore, updateSoldItemsExplore}
