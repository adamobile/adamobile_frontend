import * as React from 'react'
import {
    Box,
    Typography,
    Chip,
    Card,
    CardContent,
    CardMedia,
    Container,
    Avatar,
    Button,
    Dialog,
    Snackbar,
    DialogContent,
    TextField,
    Tooltip,
    Link,
} from '@material-ui/core'
import {
    withStyles, makeStyles
} from '@material-ui/core/styles'
import '../theme/typography.css'
import Layout from '../components/layout'
import theme from '../theme/theme'
import { Share, FileCopy, Twitter, Email, Telegram, WhatsApp } from '@material-ui/icons'
const axios = require('axios')

const DodgerTypography = withStyles({
    root: {
        fontFamily: 'dodger'
    }
})(Typography);

const ItemTitle = withStyles({
    root: {
        margin: 10,
        fontSize: '1.5rem',
    }
})(DodgerTypography)

const FlexBox = withStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 60,
    }
})(Box);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '95%',
        maxWidth: 1000,
        minHeight: '100vh',
    },
    cardRoot: {
        width: 400,
        height: 600,
    },
    chips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    chip: {
        fontFamily: 'dodger'
    },
    image: {
        width: '80%',
    },
    shareButton: {
        float: 'right',
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    shareUrlTextField: {
        width: '80%'
    },
    dialogContent: {
        textAlign: 'center'
    },
    snackbar: {
        '& > *': {
            background: theme.palette.background.main,
            fontSize: theme.typography.pxToRem(18),
            textAlign: 'center',
            display: 'block',
        }
    },
}));


const CarDetail = ({ pageContext: { car } }) => {

    const shareUrl = typeof window !== 'undefined' ? window.location.href : null
    const shareViaTwitter = () => { window.open(`https://twitter.com/intent/tweet?text=Check%20out%20Adamobile%20%23${car.id.slice(1)}%0A&url=${shareUrl}%0A&hashtags=CNFT,Adamobile,${car.id.slice(1)}`, '_blank') }
    const shareViaTelegram = () => { window.open(`https://t.me/share/url?url=${shareUrl}&text=Check%20out%20Adamobile%20%23${car.id.slice(1)}`, '_blank') }
    const shareViaWhatsapp = () => { window.open(`https://wa.me/?text=check%20out%20Adamobile%20%23${car.id.slice(1)} at ${shareUrl}`, '_blank') }
    const shareViaMail = () => {
        window.location.href = `mailto:?subject=Check%20out%20Adamobile%20%23${car.id.slice(1)}
    &body=Check%20out%20Adamobile%20%23${car.id.slice(1)} at ${shareUrl}`
    }

    const [dialogOpen, setDialogOpen] = React.useState(false)
    const [snackbarOpen, setSnackbarOpen] = React.useState(false)
    const [owner, setOwner] = React.useState(false)

    React.useEffect(() => {
        axios.get(`${process.env.GATSBY_API_URL}/owner?id=${car.id.slice(1)}`)
            .then(function (response) {
                if (response.data) {
                    setOwner(response.data.receiver)
                }
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const showShareMenu = () => {
        setDialogOpen(true)
    }

    const handleSnackbarClose = () => {
        setSnackbarOpen(false)
    }

    const copyLink = () => {
        navigator.clipboard.writeText(shareUrl)
        setSnackbarOpen(true)
    }

    const classes = useStyles()
    const getChips = (trait) => {
        if (Array.isArray(trait)) {
            return trait.map((extra) => (getChips(extra)))
        } else {
            return <Chip
                className={classes.chip}
                key={trait}
                label={trait}
                avatar={<Avatar alt={trait} src={`../../../clipart/${trait}.png`} />} />
        }
    }

    return (
        <Layout pageIndex={2} pageTitle='Explore'>
            <Container className={classes.root}>
                <Card className={classes.cardRoot}>
                    <Button className={classes.shareButton} onClick={showShareMenu}><Share /></Button>
                    <CardMedia
                        component="img"
                        className={classes.cardMedia}
                        image={`../../../cars/${car.id.slice(1)}.png`}
                        title={car.id}
                    />
                    <CardContent className={classes.cardContent}>
                        <ItemTitle>Adamobile<br/>{car.id}</ItemTitle>
                        {owner !== null && <Tooltip title={`Owner: ${owner}`}>
                            <Link style={{color: 'white'}} href={`https://pool.pm/${owner}`} target='_blank'><Typography noWrap variant='body1' style={{ marginTop: 8, marginBottom: 8 }}>{owner}</Typography></Link>
                        </Tooltip>
                        }
                        <Box className={classes.chips}>
                            {Object.keys(car).filter(trait => car[trait].length).filter(trait => trait !== 'id').map((trait) => (
                                getChips(car[trait])
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Container>

            <Dialog onClose={handleDialogClose} open={dialogOpen}>
                <DialogContent dividers className={classes.dialogContent}>
                    <DodgerTypography>Share</DodgerTypography>
                    <DodgerTypography>Adamobile {car.id}</DodgerTypography>
                    <img src={`../../../cars/${car.id.slice(1)}.png`} alt={car.id} width={350} />
                    <FlexBox>
                        <TextField
                            className={classes.shareUrlTextField}
                            InputProps={{
                                readOnly: true,
                            }}
                            value={shareUrl}
                        />
                        <Button onClick={copyLink}><FileCopy /></Button>
                    </FlexBox>
                    <FlexBox>
                        <Button onClick={shareViaTwitter}> <Twitter /> </Button>
                        <Button onClick={shareViaTelegram}> <Telegram /> </Button>
                        <Button onClick={shareViaWhatsapp}> <WhatsApp /> </Button>
                        <Button onClick={shareViaMail}> <Email /> </Button>
                    </FlexBox>

                </DialogContent>
            </Dialog>
            <Snackbar
                classes={{
                    root: classes.snackbar,
                }}
                open={snackbarOpen}
                onClose={handleSnackbarClose}
                message="Link copied!"
                autoHideDuration={3000}
            />
        </Layout>
    )
}

export default CarDetail