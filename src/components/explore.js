import * as React from 'react'
import {
  Box,
  Container,
  GridList
} from '@material-ui/core'
import CarGridFilter from '../components/carGridFilter'
import CarCard from '../components/carCard'
import { makeStyles } from '@material-ui/core/styles'
import { CarDetail, showDetails } from '../components/carDetail'

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
  gridList: {
  },
}))

const Explore = (props) => {

  const [filteredItems, setFilteredItems] = React.useState(props.cars)
  const [soldItems, setSoldItems] = React.useState([])
  const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Box>
        <CarGridFilter items={props.cars} setFilteredItems={setFilteredItems} />
      </Box>
      <Box className={classes.gridListContainer}>
        <GridList cellHeight={100} spacing={4} cols={3} className={classes.gridList}>
          {filteredItems.map((item) => (
            <CarCard key={item.id} id={item.id} car={item} isSold={soldItems.includes(item.id)} showDetail={() => {
              showDetails(item)
            }} />
          ))}
        </GridList>
      </Box>
      <CarDetail />
    </Container>
  )
}

export default Explore
