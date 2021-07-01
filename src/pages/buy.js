import React from 'react'
import {
    Container,
    GridList,
    Box,
    Grid,
    Typography,
    Card,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import { navigate } from 'gatsby'
const cars = require('../../all.json')

const useStyles = makeStyles((theme) => ({

    root: {
        width: '80%'
    },
    gridRoot: {
        flexGrow: 1,
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
    placeholder: {
        width: 400,
        height: 300,
        textAlign: 'center'
    }

}));

let updateSoldItemsBuy = () => { }
const BuyPage = (props) => {

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState(['#001', '#002', '#003', '#004', '#005'])

    updateSoldItemsBuy = (newSoldItems) => {
        setSoldItems(newSoldItems)
        document.getElementById(newSoldItems[newSoldItems.length - 1]).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    }

    return (
        <Layout pageTitle='Buy' pageIndex={1}>
            <Container className={classes.root}>
                <Box>
                    <Grid item xs={12}>
                        <Grid container justify='center' cols={2} spacing={20} className={classes.gridRoot}>
                            <Grid item>
                                <Card><Typography className={classes.placeholder}>How To Buy</Typography></Card>
                            </Grid>
                            <Grid item>
                                <Card><Typography className={classes.placeholder}>Address as a QR-Code</Typography></Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <GridList id='gridList' cellHeight={350} className={classes.gridList} cols={2.5}>
                        {cars.filter(item => soldItems.includes(item.id)).map((item) => (
                            <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id).toString()} showdetail={() => {
                                navigate('/detail/', { state: { selectedItem: item } })
                            }} />
                        ))}
                    </GridList>
                </Box>
            </Container>
        </Layout>
    )
}



export default BuyPage