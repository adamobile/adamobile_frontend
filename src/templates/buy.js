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
    Tooltip,
    useMediaQuery,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme/theme'
import CarCard from '../components/carCard'
import Layout from '../components/layout'
import Address from '../images/address.png'
import '../theme/theme'
import { FileCopy, ExpandMore, ExpandLess } from '@material-ui/icons'
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
    const price = 20

    const calculateFees = (count) => {
        return Math.max(2, Math.ceil((count + 1) / 2))
    }

    const increaseItemCount = () => {
        const newItemCount = Math.min(itemCount + 1, 10)
        setItemCount(newItemCount)
        setFees(calculateFees(newItemCount))
    }

    const decreaseItemCount = () => {
        const newItemCount = Math.max(itemCount - 1, 1)
        setItemCount(newItemCount)
        setFees(calculateFees(newItemCount))
    }

    const copyValue = (value, title) => {
        navigator.clipboard.writeText(value)
        setSnackbarTitle(title)
        setSnackbarOpen(true)
    }

    const classes = useStyles()
    const [soldItems, setSoldItems] = React.useState(new Map())
    const [acceptTerms, setAcceptTerms] = React.useState(initialAcceptTerms)
    const [customerWallet, setCustomerWallet] = React.useState(initialCustomerWallet)
    const [itemCount, setItemCount] = React.useState(1)
    const [fees, setFees] = React.useState(2)
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const [snackbarTitle, setSnackbarTitle] = React.useState('')

    const updateSoldItems = () => {

        axios.get(`${process.env.GATSBY_API_URL}/sold?receiver=${customerWallet}&limit=50`)
            .then(function (response) {
                if (Array.isArray(response.data)) {
                    setSoldItems(new Map(response.data.map(key => [key.id, key.receiver])))
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    React.useEffect(() => {
        updateSoldItems()
    }, [customerWallet])

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
        const sortedIds = Array.from(soldItems.keys())
        soldCars.sort((one, two) => sortedIds.indexOf(one.id) - sortedIds.indexOf(two.id))
        return soldCars
    }

    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    const columnCount = () => {
        return isSmall ? 1.5 : 2.5
    }

    return (
        <Layout addStats={true}>
            <Container className={classes.root}>
                <Box className={classes.topRow}>
                    <Box>
                        <Typography component='li'>Send the Exact amount of ADA to the given address. Adjust the number of items using the arrows if you'd like to purchase multiple Adamobiles</Typography>
                        <Typography component='li'>Send ADA from a wallet that support native assets like <Link target='_blank' href='https://yoroi-wallet.com/'>Yoroi</Link>, <Link target='_blank' href='https://daedaluswallet.io'>Daedalus</Link>, <Link target='_blank' href='https://adalite.io'>AdaLite</Link>, or <Link target='_blank' href='https://namiwallet.io/'>Nami</Link>. Do not send ADA from an exchange! Your Adamobile and funds will be lost!</Typography>
                        <Typography component='li'>You will get a refund if you send less than the given amount or all Adamobiles have been already sold</Typography>
                        <Box display='flex' alignItems='center' margin={2}>
                            <Checkbox checked={acceptTerms} color='primary' onChange={handleAcceptTermsValueChange} />
                            <Typography>I accept the aforementioned terms of use</Typography>
                        </Box>
                    </Box>
                    <Box marginTop={3} display={acceptTerms ? 'flex' : 'none'} flexDirection='column' alignItems='center' >
                        <img src={Address} alt='Wallet address' width={300} />
                        <Box display='flex' marginTop={3}>
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
                        <Box display='flex' marginTop={3}>
                            <TextField
                                label="Number of items"
                                className={classes.textField}
                                InputProps={{
                                    readOnly: true,
                                }}
                                value={itemCount}
                            />
                            <Box display='flex' flexDirection='column'>
                                <Button onClick={increaseItemCount}><ExpandLess /></Button>
                                <Button onClick={decreaseItemCount}><ExpandMore /></Button>
                            </Box>
                        </Box>
                        <Box display='flex' marginTop={3}>
                            <Tooltip title={`Including ${fees} ADA for transaction fees`}>
                                <TextField
                                    label="Amount ADA"
                                    className={classes.textField}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value={price * itemCount + fees}
                                />
                            </Tooltip>
                            <Button onClick={() => { copyValue(price * itemCount + fees, 'Amount copied!') }}><FileCopy /></Button>
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
                    <Typography style={{ marginBottom: 16 }}>Recently sold</Typography>
                    <GridList id='gridList' cellHeight={280} className={classes.gridList} cols={columnCount()}>
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