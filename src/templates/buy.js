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
    Checkbox,
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
    infos: {
        justifyContent: 'space-around',
        marginTop: theme.spacing(5),
        '& .MuiTypography-root': {
            fontSize: theme.typography.pxToRem(20),
            lineHeight: 3,
        },
    },
    shareButton: {
        float: 'right',
    },
    textField: {
        width: '100%',
        minWidth: 300
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
    const [acceptTerms, setAcceptTerms] = React.useState(false)
    const [customerWallet, setCustomerWallet] = React.useState('')
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const [snackbarTitle, setSnackbarTitle] = React.useState('')

    const handleAcceptTermsValueChange = (event) => {
        setAcceptTerms(event.target.checked)
        sessionStorage.setItem('acceptTerms', acceptTerms)
    }

    const handleCustomerWalletChange = (event) => {
        setCustomerWallet(event.target.value)
        sessionStorage.setItem('customerWallet', customerWallet)
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
                        <Typography component='li'>Send the Exact amount of ADA to the given address. If you like to purchase multiple Adamobiles please send multiple transactions</Typography>
                        <Typography component='li'>Send ADA from a wallet that support native assets like <Link href='https://yoroi-wallet.com/'>Yoroi</Link>, <Link href='https://daedaluswallet.io'>Daedalus</Link>, or <Link href='https://adalite.io'>AdaLite</Link>. Do not sent ADA from an exchange! Your Adamobile and funds will be lost!</Typography>
                        <Typography component='li'>You will get a refund if you send less than the given amount or all Adamobiles have been already sold</Typography>
                        <Box display='flex' alignItems='center' margin={2}>
                            <Checkbox checked={acceptTerms} color='primary' onChange={handleAcceptTermsValueChange} />
                            <Typography>I accept the aforementioned terms of use</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={2} display={acceptTerms ? 'flex' : 'none'} flexDirection='column' alignItems='center' >
                        <img src={Address} alt='Wallet address' width={300} />
                        <Box display='flex' marginTop={2}>
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
                        <Box display='flex' marginTop={2}>
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
                    <Typography style={{ marginTop: 24}} component='li'>Enter your wallet address below to see the items you already purchased</Typography>
                    <TextField
                        style={{marginBottom: 24, width: '50%', }}
                        label="Your wallet address"
                        value={customerWallet}
                        onChange={handleCustomerWalletChange}
                    />
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