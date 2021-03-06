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
  exploreRoot: {
    width: '95%',
    maxWidth: 1000,
    minHeight: '100vh',
    marginTop: 60,
  },
  gridListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    '& > .MuiGridListTile-root': {
      width: '100%',
    }
  },
  pagination: {
    margin: theme.spacing(4),
    display: 'flex',
    justifyContent: 'center',
  },
}))

const ExplorePage = ({ pageContext: { cars } }) => {

  const initialPage = parseInt(getSessionItem('page', 1))
  const [visibleItems, setVisibleItems] = React.useState([])
  const [filteredItems, setFilteredItems] = React.useState([])
  const [soldItems, setSoldItems] = React.useState(new Map(getSessionItem('soldItems', [], true).map(key => [key.id, key.receiver])))
  const [page, setPage] = React.useState(initialPage);
  const [pageCount, setPageCount] = React.useState(101);

  const updateSoldItems = () => {

    axios.get(`${process.env.GATSBY_API_URL}/sold`)
      .then(function (response) {
        if (Array.isArray(response.data)) {
          setSessionItem('soldItems', JSON.stringify(response.data))
          setSoldItems(new Map(response.data.map(key => [key.id, key.receiver])))
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  React.useEffect(() => {
    updateSoldItems()
  }, [])

  React.useEffect(() => {
    setVisibleItems(filteredItems.slice(((page - 1) * itemsPerPage), Math.min(filteredItems.length, page * itemsPerPage)))
    setPageCount(Math.ceil(filteredItems.length / itemsPerPage))
  }, [filteredItems])

  const isXSmall = useMediaQuery(theme.breakpoints.down('xs'))
  const isMedium = useMediaQuery(theme.breakpoints.down('lg'))

  const columnCount = () => {
    return isXSmall ? 1 : isMedium ? 2 : 3
  }
  const itemsPerPage = 12
  const handleChange = (event, value) => {
    setPage(value)
    setSessionItem('page', value)
    setVisibleItems(filteredItems.slice(((value - 1) * itemsPerPage), Math.min(filteredItems.length, value * itemsPerPage)))
  }

  const classes = useStyles()
  return (
    <Layout pageTitle='Explore' addStats={true}>
      <Container className={classes.exploreRoot}>
        <Box>
          <CarGridFilter items={cars} soldItems={soldItems} setFilteredItems={setFilteredItems} />
        </Box>
        <Box className={classes.gridListContainer}>
          <GridList cellHeight={280} spacing={20} cols={columnCount()} className={classes.gridList}>
            {visibleItems.map((car) => (
              <CarCard key={car.id} id={car.id} car={car} receiver={soldItems.get(car.id)} />
            ))}
          </GridList>
        </Box>
        <Pagination className={classes.pagination} page={page} onChange={handleChange} count={pageCount} shape="rounded" showFirstButton showLastButton />
      </Container>
    </Layout>
  )
}

export default ExplorePage
