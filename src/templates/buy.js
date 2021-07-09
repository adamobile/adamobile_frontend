import React from 'react'
import {
    Container,
    GridList,
    Box,
    Grid,
    Typography,
    Card,
    Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import { navigate } from 'gatsby'

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

}));

// document.getElementById(newSoldItems[newSoldItems.length - 1]).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
const BuyPage = ({ pageContext: { cars } }) => {

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState(['#0101', '#0102', '#2503', '#1504', '#1605'])

    return (
        <Layout pageTitle='Buy' pageIndex={1}>
            <Container className={classes.root}>
                <Box>
                    <Grid item>
                        <Grid container justify='space-around' spacing={20} className={classes.gridRoot}>
                            <Grid item>
                                <Card>
                                    <Typography>
                                        <p>
                                            After the sale is launched, you can send a specified amount of ADA to a specific address.
                                            Please send ADA from a wallet that support native assets like <Link to='https://yoroi-wallet.com/'>Yoroi</Link>, <Link to='https://daedaluswallet.io'>Daedalus</Link>, or <Link to='https://adalite.io'>AdaLite</Link>.
                                            After the payment is in, an Adamobile will be selected randomly from the pool of available items. This item will be created of the block chain and send to your address automatically.
                                            On the <Link to='/'>home page</Link> there will be a list of already created ADAmobiles. This list can be filtered by your address, so that you can see which ADAmobiles you pulled.
                                            If you want to purchase multiple items, please send the specified amout multiple times and not the multiple of the amout one time.
                                            After all items have been created and sent to their new owners this will be announced on the
                                        </p>
                                        <p>
                                            Dont send ADA from an exchange!!! If you send ADA from an exchange the funds will be lost and the Adamobile will be lost for ever.
                                        </p>
                                    </Typography>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card><img src='../images/address.png' alt='Wallet address' /></Card>
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