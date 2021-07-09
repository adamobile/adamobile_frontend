import React from 'react'
import {
    Container,
    GridList,
    Box,
    Typography,
    TextField,
    Button,
    Snackbar,
    Link,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import Address from '../images/address.png'
import '../theme/theme'
import { FileCopy } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({

    root: {
    },
    topRow: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: theme.spacing(5),
        '& .MuiTypography-root': {
            fontSize: theme.typography.pxToRem(18),
            lineHeight: 2,
        },
    },
    shareButton: {
        float: 'right',
    },
    textField: {
        marginTop: 16,
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
    snackbar: {
        '& > *': {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontSize: theme.typography.pxToRem(18),
            textAlign: 'center',
            display: 'block',
        }
    },

}));

// document.getElementById(newSoldItems[newSoldItems.length - 1]).scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
const BuyPage = ({ pageContext: { cars } }) => {
    const address = 'addr1qx9ksp5xuytqap4fssa56g9jleqtxwf3w33d0ejv0x0we7djcdes9txqhldvlyysy8ryq4uqgyzkl2enq0nawkqu2lvs0yldxe'
    const amount = '25'
    const copyValue = (value, title) => {
        navigator.clipboard.writeText(value)
        setSnackbarTitle(title)
        setSnackbarOpen(true)
    }

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState(
        [{ id: '#0101', wallet: 'addr1qx9ksp5xuytqap4fssa56g9jleqtxwf3w33d0ejv0x0we7djcdes9txqhldvlyysy8ryq4uqgyzkl2enq0nawkqu2lvs0yldxe' },
        { id: '#0315', wallet: 'other' },
        { id: '#1605', wallet: 'yet another' },
        { id: '#2218', wallet: 'yours' },])
    const [customerWallet, setCustomerWallet] = React.useState('')
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const [snackbarTitle, setSnackbarTitle] = React.useState('')

    const handleCustomerWalletChange = (event) => {
        setCustomerWallet(event.target.value)
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const getFilteredItems = () => {
        const soldCars = cars.filter(car => soldItems.map(sold => sold.id).includes(car.id))
        if (!customerWallet) {
            return soldCars
        }

        const customerItems = soldItems.filter(sold => sold.wallet === customerWallet)
        return soldCars.filter(car => customerItems.map(sold => sold.id).includes(car.id))
    }

    return (
        <Layout pageTitle='Buy' pageIndex={1}>
            <Container className={classes.root}>
                <Box className={classes.topRow}>
                    <Box>
                        <Typography component='li'>Send the Exact amount of ADA to the given address</Typography>
                        <Typography component='li'>Send ADA from a wallet that support native assets like <Link to='https://yoroi-wallet.com/'>Yoroi</Link>, <Link to='https://daedaluswallet.io'>Daedalus</Link>, or <Link to='https://adalite.io'>AdaLite</Link></Typography>
                        <Typography component='li'>Do not sent ADA from an exchange! The NFT and funds will be lost!</Typography>
                        <Typography component='li'>Always send one transaction at a time. If you'd like to purchase multiple NFTs please send multiple transactions</Typography>
                        <Typography component='li'>Enter your wallet address below to see the items you already purchased</Typography>
                        <TextField
                                style={{ marginTop: 24, width: '100%', }}
                                label="Your wallet address"
                                value={customerWallet}
                                onChange={handleCustomerWalletChange}
                            />
                    </Box>
                    <Box style={{ marginLeft: 24 }}>
                        <img src={Address} alt='Wallet address' width={200} style={{ marginRight: 16 }} />
                        <Box display='flex'>
                            <TextField
                                label="Our wallet address"
                                className={classes.textField}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={address}
                            />
                            <Button onClick={() => { copyValue(address, 'Address copied!') }}><FileCopy /></Button>
                        </Box>
                        <Box display='flex'>
                            <TextField
                                label="Amount ADA"
                                className={classes.textField}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={amount}
                            />
                            <Button onClick={() => { copyValue(amount, 'Amount copied!') }}><FileCopy /></Button>
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <GridList id='gridList' cellHeight={250} className={classes.gridList} cols={2.5}>
                        {getFilteredItems().map((item) => (
                            <CarCard key={item.id} id={item.id} car={item} issold={soldItems.includes(item.id)} />
                        ))}
                    </GridList>
                </Box>
            </Container>
            <Snackbar
                classes={{
                    root: classes.snackbar,
                }}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                message={snackbarTitle}
                autoHideDuration={3000}
            />
        </Layout>
    )
}



export default BuyPage