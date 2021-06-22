import * as React from 'react'
import {
  Box,
  Container,
  GridList
} from '@material-ui/core'
import Layout from '../components/layout'
import CarGridFilter from '../components/carGridFilter'
import CarCard from '../components/carCard'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { CarDetail, showDetails } from '../components/carDetail'
const items = require('../res/explore.json')

// const ws = new WebSocket('ws://localhost:8080');
// ws.onopen = function (event) {
//   console.log('Explore: Connection is open!');
// };

const useStyles = makeStyles((theme) => ({
  mainContainer: {
  },
  gridList: {
  },
}))

const ExplorePage = () => {

  const [filteredItems, setFilteredItems] = React.useState(items)
  const [soldItems, setSoldItems] = React.useState([])

  // ws.onmessage = function (event) {
  //
  //   console.log('Explore received: ', event.data)
  //   const msg = JSON.parse(event.data)
  //
  //   switch (msg.type) {
  //     case 'sold':
  //         setSoldItems([...soldItems, msg.sold])
  //       break;
  //
  //     case 'log':
  //     break;
  //     default:
  //       break;
  //   }
  // }



  const classes = useStyles()

  return (
    <Layout pageTitle='Explore Adamobiles'>
      <Box>

        <Container>
          <CarGridFilter items={items} setFilteredItems={setFilteredItems} />
        </Container>

        <Container>
          <GridList className={classes.gridList} cols={3}>
            {filteredItems.map((item) => (
              <CarCard key={item.id} id={item.id} car={item} isSold={soldItems.includes(item.id)} showDetail={() => {
                showDetails(item)
              }} />
            ))}
          </GridList>
        </Container>
        <CarDetail />
      </Box>
    </Layout>
  )
}

export default ExplorePage
