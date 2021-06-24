import React from 'react'
import {
    Container,
    GridList,
    Box,
} from '@material-ui/core'
import Stats from '../components/stats'
import CarCard from '../components/carCard'
import { CarDetail, showDetails } from '../components/carDetail'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({

    root: {
        width: '80%'
    },
    gridListContainer: {
        maxWidth: 1200,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },

}));


const BuyPage = (props) => {

    const classes = useStyles()
    const [filteredItems, setFilteredItems] = React.useState([])
    const [soldItems, setSoldItems] = React.useState([])
    const [stats, setStats] = React.useState({ 'total': 0, 'minted': 0, 'minting': 0, 'available': 0 })

    const filterItems = (sold) => {
        setFilteredItems(props.cars.filter(item => sold.includes(item.id)))
        document.getElementById(sold[sold.length - 1]).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    const gridList = () => {
        return (
            <Box>
                {filteredItems.length > 0 && <GridList id='gridList' cellHeight={300} className={classes.gridList} cols={2.5}>
                    {filteredItems.map((item) => (
                        <CarCard key={item.id} id={item.id} car={item} isSold={soldItems.includes(item.id)} showDetail={() => {
                            showDetails(item)
                        }} />
                    ))}
                </GridList>}
            </Box>
        )
    }

    return (
        <Container className={classes.root}>
            <Stats stats={stats} />
            <CarDetail />
        </Container>
    )
}



export default BuyPage