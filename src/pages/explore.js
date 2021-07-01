import * as React from 'react'
import { navigate } from 'gatsby'
import {
  Box,
  Container,
  GridList
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CarGridFilter from '../components/carGridFilter'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
const cars = require('../res/all.json')

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

const ExplorePage = (props) => {

  const [filteredItems, setFilteredItems] = React.useState(cars)
  const [soldItems, setSoldItems] = React.useState([])
  const classes = useStyles()

  return (
    <Layout pageTitle='Explore' pageIndex={2}>
      <Container className={classes.root}>
        <Box>
          <CarGridFilter items={cars} setFilteredItems={setFilteredItems} />
        </Box>
        <Box className={classes.gridListContainer}>
          <GridList cellHeight='auto' spacing={10} cols={4}>
            {filteredItems.map((item) => (
              <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id)} showdetail={() => {
                navigate(`/detail/${item.id}`, {state: {selectedItem: item }})
              }} />
            ))}
          </GridList>
        </Box>
      </Container>
    </Layout>
  )
}

export default ExplorePage
