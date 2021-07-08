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
  pagination: {
    margin: theme.spacing(4),
  },
}))

const ExplorePage = ({ pageContext: { cars } }) => {


  const [visibleItems, setVisibleItems] = React.useState([])
  const [filteredItems, setFilteredItems] = React.useState([...cars])
  const [soldItems, setSoldItems] = React.useState([])
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(101);
  
  React.useEffect(() => {
    setPage(1)
    setVisibleItems(filteredItems.slice(0, itemsPerPage))
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
    setVisibleItems(filteredItems.slice(((value - 1) * itemsPerPage), Math.min(filteredItems.length, value * itemsPerPage)))
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
            {visibleItems.map((item) => (
              <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id)} />
            ))}
          </GridList>
          <Pagination className={classes.pagination} page={page} onChange={handleChange} count={pageCount} shape="rounded" showFirstButton showLastButton />
        </Box>
      </Container>
    </Layout>
  )
}

export default ExplorePage
