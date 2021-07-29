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
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import Address from '../images/address.png'
import '../theme/theme'
import { FileCopy } from '@material-ui/icons'
import { getSessionItem, setSessionItem } from '../utils/utils'
const axios = require('axios')

const useStyles = makeStyles((theme) => ({

    root: {
        minHeight: '100vh',
        width: '95%',
        maxWidth: 1000,
        marginTop: 60,
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


const BuyPage = ({ pageContext: { cars } }) => {

    const initialAcceptTerms = getSessionItem('acceptTerms', false)
    const initialCustomerWallet = getSessionItem('customerWallet', '')
    const address = 'addr1vxfehn9hwgv6vplxpkn84w2z8ueym7arg5zw6slnxpnfe3gq2lf50'
    const amount = '42'
    const copyValue = (value, title) => {
        navigator.clipboard.writeText(value)
        setSnackbarTitle(title)
        setSnackbarOpen(true)
    }

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState(new Map())
    const [acceptTerms, setAcceptTerms] = React.useState(initialAcceptTerms)
    const [customerWallet, setCustomerWallet] = React.useState(initialCustomerWallet)
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const [snackbarTitle, setSnackbarTitle] = React.useState('')

    const updateSoldItems = () => {

        axios.get(`${process.env.GATSBY_API_URL}/sold?receiver=${customerWallet}&limit=20`)
            .then(function (response) {
                if (Array.isArray(response.data)) {
                    setSoldItems(new Map(response.data.map(key => [key.id, key.receiver])))
                }
            })
            .catch(function (error) {
                setSoldItems([])
                console.log(error)
            })
    }

    React.useEffect(() => {
        updateSoldItems()
    }, [customerWallet])

    React.useEffect(() => {
        if (soldItems.length > 0) {
            var item = document.getElementById(soldItems[soldItems.length - 1].id)
            if (item) {
                item.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
            }
        }
    }, [soldItems])

    React.useEffect(() => {
        updateSoldItems()
        const timerId = setInterval(() => {
            updateSoldItems()
        }, 60 * 1000)
        return () => { clearInterval(timerId) }
    }, [])

    const handleAcceptTermsValueChange = (event) => {
        setAcceptTerms(event.target.checked)
        setSessionItem('acceptTerms', event.target.checked)
    }

    const handleCustomerWalletChange = (event) => {
        setCustomerWallet(event.target.value)
        setSessionItem('customerWallet', event.target.value)
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const getFilteredItems = () => {
        const soldCars = cars.filter(car => soldItems.has(car.id))
        if (!customerWallet) {
            return soldCars
        }

        const customerItems = Array.from(soldItems.entries()).filter(e => e[1] === customerWallet)
        return soldCars.filter(car => customerItems.map(e => e[0]).includes(car.id))
    }

    return (
        <Layout addStats={true}>
            <Container className={classes.root}>
                <Box className={classes.topRow}>
                    <Box>
                        <Typography component='li'>Send the Exact amount of ADA to the given address. If you like to purchase multiple Adamobiles please send multiple transactions</Typography>
                        <Typography component='li'>Send ADA from a wallet that support native assets like <Link target='_blank' href='https://yoroi-wallet.com/'>Yoroi</Link>, <Link target='_blank' href='https://daedaluswallet.io'>Daedalus</Link>, <Link target='_blank' href='https://adalite.io'>AdaLite</Link>, or <Link target='_blank' href='https://namiwallet.io/'>Nami</Link>. Do not send ADA from an exchange! Your Adamobile and funds will be lost!</Typography>
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
                    <Typography style={{ marginTop: 24 }} component='li'>Enter your wallet address below to see the items you already purchased</Typography>
                    <TextField
                        style={{ marginBottom: 24, width: '50%', minWidth: 300, }}
                        label="Your wallet address"
                        value={customerWallet}
                        onChange={handleCustomerWalletChange}
                    />
                    <Typography style={{marginBottom: 16}}>Recently sold</Typography>
                    <GridList id='gridList' cellHeight={250} className={classes.gridList} cols={2.5}>
                        {getFilteredItems().map((item) => (
                            <CarCard key={item.id} id={item.id} car={item} receiver={soldItems.get(item.id)} />
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