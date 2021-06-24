import React from 'react'
import {
    Container,
    GridList,
    Box,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'
import { CarDetail, showCarDetails } from '../components/carDetail'

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

let updateSoldItemsBuy = () => {}
const Buy = (props) => {

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState([])

    updateSoldItemsBuy = (newSoldItems) => {
        setSoldItems(newSoldItems)
        document.getElementById(newSoldItems[newSoldItems.length -1]).scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }

    return (
        <Container className={classes.root}>
            <Box>
                <GridList id='gridList' cellHeight={300} className={classes.gridList} cols={2.5}>
                    {props.cars.filter(item => soldItems.includes(item.id)).map((item) => (
                        <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id).toString()} showdetail={() => {
                            showCarDetails(item)
                          }} />
                    ))}
                </GridList>
            </Box>
            <CarDetail />
        </Container>
    )
}



export {Buy, updateSoldItemsBuy}