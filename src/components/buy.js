import React from 'react'
import {
    Container,
    GridList,
    Box,
} from '@material-ui/core'
import Stats from '../components/stats'
import CarCard from '../components/carCard'
import { CarDetail, showDetails } from '../components/carDetail'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const items = require('../res/explore.json')
// const WebSocket = require('isomorphic-ws')
// var ws = new WebSocket('ws://localhost:8080');
// ws.onopen = function (event) {
//   console.log('Connection is open!');
// };

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


const BuyPage = () => {

    // ws.onmessage = function (event) {

    //     console.log('received: ', event.data)
    //     const msg = JSON.parse(event.data)

    //     switch (msg.type) {
    //       case 'stats':
    //         setStats(msg.stats)
    //         break;

    //       case 'uuid':
    //         setUuid(msg.uuid)
    //         break;

    //       case 'sold':
    //         setSoldItems([...soldItems, msg.sold])
    //         filterItems([...soldItems, msg.sold])
    //         break;

    //       case 'log':
    //         break;
    //       default:
    //         break;
    //     }

    //   }

    const classes = useStyles()
    const [filteredItems, setFilteredItems] = React.useState([])
    const [soldItems, setSoldItems] = React.useState([])
    const [stats, setStats] = React.useState({ 'total': 0, 'minted': 0, 'minting': 0, 'available': 0 })

    const filterItems = (sold) => {
        setFilteredItems(items.filter(item => sold.includes(item.id)))
        document.getElementById(sold[sold.length - 1]).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    return (
        <Container className={classes.root}>
            <Stats stats={stats} />
            <Box>
                <GridList id='gridList' cellHeight={300} className={classes.gridList} cols={2.5}>
                    {items.map((item) => (
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



export default BuyPage