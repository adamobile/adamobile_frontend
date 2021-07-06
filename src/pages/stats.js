import * as React from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import Layout from '../components/layout'
import {
    Container,
    Grid,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 32,
    },
    grid: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 16,
    },
    pie: {
    },
}))

const stats = require('../../stats.json')

const StatsPage = () => {

    const colorBlack = '#2b2b2b'
    const colorBlue = '#1968d3'
    const colorWhite = '#d9d8d1'
    const colorRed = '#af1919'
    const colorGreen = '#51734f'
    const colorYellow = '#f3a90a'
    const colorPink = '#c346c8'
    const colorOrange = '#e65711'
    const colors = [colorBlack, colorBlue, colorRed, colorGreen, colorWhite, colorYellow, colorOrange, colorPink]

    var currentColorIndex = -1
    const nextColor = () => {
        currentColorIndex++
        return colors[currentColorIndex % colors.length]
    }
    const resetColor = () => {
        currentColorIndex = -1
    }

    const pieData = (data, reset) => {

        if (reset) {
            resetColor()
        }

        return Object.keys(data).map(key => {
            return { title: key, value: data[key], color: nextColor() }
        })
    }

    const [dialogOpen, setDialogOpen] = React.useState(false)
    const [detailStat, setDetailStat] = React.useState({ title: '', data: {} })
    const handleClose = () => {
        setDialogOpen(false);
    }
    const showDetailStats = (title, data) => {

        setDetailStat({ title: title, data: data })
        setDialogOpen(true)
    }



    const classes = useStyles()
    return (
        <Layout pageTitle='Stats' pageIndex={3}>
            <Container className={classes.root}>
                <Grid container spacing={10} justify='center' className={classes.grid}>

                    <Button onClick={() => showDetailStats('Available', { available: 876, sold: 76 })}>
                        <Grid item key='available'>
                            <Typography>Available/Minted</Typography>
                            <PieChart
                                className={classes.pie}
                                data={[
                                    { title: 'Minted', value: 13, color: '#E38627' },
                                    { title: 'Available', value: 986, color: '#C13C37' },
                                ]}
                                animate={true}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Type', stats.Type)}>
                        <Grid item key='type' item>
                            <Typography>Type</Typography>
                            <PieChart
                                className={classes.pie}
                                data={pieData(stats.Type)}
                                animate={true}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Color', stats.Color)}>
                        <Grid key='color' item>
                            <Typography>Color</Typography>
                            <PieChart
                                className={classes.pie}
                                data={pieData(stats.Color, true)}
                                animate={true}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Rims', stats.Rims)}>
                        <Grid key='rims' item>
                            <Typography>Rims</Typography>
                            <PieChart
                                className={classes.pie}
                                data={pieData(stats.Rims)}
                                animate={true}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Sticker', stats.Sticker)}>
                        <Grid key='sticker' item>
                            <Typography>Sticker</Typography>
                            <PieChart
                                className={classes.pie}
                                data={pieData(stats.Sticker)}
                                animate={true}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Extras', stats.Extras)}>
                        <Grid key='extras' item>
                            <Typography>Extras</Typography>
                            <PieChart
                                className={classes.pie}
                                data={pieData(stats.Extras)}
                            />
                        </Grid>
                    </Button>

                </Grid>
            </Container>

            <Dialog
                open={dialogOpen}
                onClose={handleClose}
            >

                <DialogTitle>{detailStat.title}</DialogTitle>
                <DialogContent>
                    {
                        Object.keys(detailStat.data).map(key => {
                            return <Typography>{key} {detailStat.data[key]}/{Object.values(detailStat.data).reduce((a, b) => a + b, 0)}</Typography>
                        })
                    }

                </DialogContent>
            </Dialog>

        </Layout>
    )
}

export default StatsPage