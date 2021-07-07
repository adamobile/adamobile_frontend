import * as React from 'react'
import {
  Box,
  Container,
  GridList,
  useMediaQuery,
} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles'
import CarGridFilter from '../components/carGridFilter'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import theme from '../theme/theme'

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

const ExplorePage = ({ pageContext: { cars } }) => {

  const [filteredItems, setFilteredItems] = React.useState(cars.slice(0, 10))
  const [soldItems, setSoldItems] = React.useState([])

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'))

  const columnCount = () => {
    return isSmall ? 2 : isMedium ? 3 : 4
  }
  const pageCount = 10
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value)
    setFilteredItems(cars.slice(((value - 1) * pageCount), value * pageCount))
  };

  const classes = useStyles()
  return (
    <Layout pageTitle='Explore' pageIndex={2}>
      <Container className={classes.root}>
        <Box>
          <CarGridFilter items={cars} setFilteredItems={setFilteredItems} />
        </Box>
        <Box className={classes.gridListContainer}>
          <GridList cellHeight='auto' spacing={10} cols={columnCount()}>
            {filteredItems.map((item) => (
              <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id)} />
            ))}
          </GridList>
          <Pagination page={page} onChange={handleChange} count={101} shape="rounded" showFirstButton showLastButton />
        </Box>
      </Container>
    </Layout>
  )
}

export default ExplorePage
