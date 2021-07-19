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
import { getSessionItem, setSessionItem } from '../utils/utils';
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    maxWidth: 1000,
  },
  gridListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  pagination: {
    margin: theme.spacing(4),
  },
}))

const ExplorePage = ({ pageContext: { cars } }) => {

  const initialPage = getSessionItem('page', 1)
  const [visibleItems, setVisibleItems] = React.useState([])
  const [filteredItems, setFilteredItems] = React.useState([...cars])
  const [soldItems, setSoldItems] = React.useState([])
  const [page, setPage] = React.useState(initialPage);
  const [pageCount, setPageCount] = React.useState(101);

  const updateSoldItems = () => {

    axios.get(`${process.env.GATSBY_API_URL}/sold`)
      .then(function (response) {
        setSoldItems(response.data)
      })
      .catch(function (error) {
        setSoldItems([])
        console.log(error)
      })
  }

  React.useEffect(() => {
    updateSoldItems()
    const timerId = setTimeout(() => {
      updateSoldItems()
    }, 10 * 1000)
    return () => { clearInterval(timerId) }
  }, [])

  React.useEffect(() => {
    setVisibleItems(filteredItems.slice(((page - 1) * itemsPerPage), Math.min(filteredItems.length, page * itemsPerPage)))
    setPageCount(Math.ceil(filteredItems.length / itemsPerPage))
  }, [filteredItems])

  const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'))

  const columnCount = () => {
    return isSmall ? 2 : isMedium ? 3 : 4
  }
  const itemsPerPage = 12
  const handleChange = (event, value) => {
    setPage(value)
    setSessionItem('page', value)
    setVisibleItems(filteredItems.slice(((value - 1) * itemsPerPage), Math.min(filteredItems.length, value * itemsPerPage)))
  }

  const classes = useStyles()
  return (
    <Layout pageTitle='Explore' pageIndex={2}>
      <Container className={classes.root}>
        <Box>
          <CarGridFilter items={cars} setFilteredItems={setFilteredItems} />
        </Box>
        <Box className={classes.gridListContainer}>
          <GridList cellHeight={250} spacing={20} cols={columnCount()}>
            {visibleItems.map((car) => (
              <CarCard key={car.id} id={car.id} car={car} issold={soldItems.map(sold => sold.id).includes(car.id)} />
            ))}
          </GridList>
          <Pagination className={classes.pagination} page={page} onChange={handleChange} count={pageCount} shape="rounded" showFirstButton showLastButton />
        </Box>
      </Container>
    </Layout>
  )
}

export default ExplorePage
