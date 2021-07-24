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
    TableContainer,
    Table,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import '../theme/typography.css'

const allCount = 1007
const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})

const useStyles = makeStyles((theme) => ({
    statsRoot: {
        minHeight: '100vh',
        width: '95%',
        maxWidth: 1000,
        marginTop: 60,
    },
    grid: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    pie: {
        marginTop: 10
    },
    pieTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'dodger'
    },
    table: {
        overflow: 'hidden'
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

    const carColors = [colorBlack, colorBlue, colorRed, colorGreen, colorWhite, colorYellow, colorOrange, colorPink]
    const gradientColors = ['#bb3b3b', '#6e0d0d', '#3d0505', '#af1818', '#ffffff']

    var currentColorIndex = -1
    const nextColor = (colors) => {
        currentColorIndex++
        return colors[currentColorIndex % colors.length]
    }
    const resetColor = () => {
        currentColorIndex = -1
    }

    const pieData = (data, colors) => {

        resetColor()
        return Object.keys(data).map(key => {
            return { title: key, value: data[key], color: nextColor(colors) }
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


    const shiftSize = 7
    const classes = useStyles()
    return (
        <Layout addStats={true}>
            <Container className={classes.statsRoot}>
                <Grid container spacing={10} justifyContent='center' className={classes.grid}>

                    <Button onClick={() => showDetailStats('Type', stats.Type)}>
                        <Grid item key='type' item>
                            <Typography className={classes.pieTitle}>Type</Typography>
                            <PieChart
                                radius={PieChart.defaultProps.radius - shiftSize}
                                segmentsShift={0.5}
                                lineWidth={50}
                                className={classes.pie}
                                data={pieData(stats.Type, gradientColors)}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Color', stats.Color)}>
                        <Grid key='color' item>
                            <Typography className={classes.pieTitle}>Color</Typography>
                            <PieChart
                                radius={PieChart.defaultProps.radius - shiftSize}
                                segmentsShift={0.5}
                                lineWidth={50}
                                className={classes.pie}
                                data={pieData(stats.Color, carColors)}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Rims', stats.Rims)}>
                        <Grid key='rims' item>
                            <Typography className={classes.pieTitle}>Rims</Typography>
                            <PieChart
                                radius={PieChart.defaultProps.radius - shiftSize}
                                segmentsShift={0.5}
                                lineWidth={50}
                                className={classes.pie}
                                data={pieData(stats.Rims, gradientColors)}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Sticker', stats.Sticker)}>
                        <Grid key='sticker' item>
                            <Typography className={classes.pieTitle}>Sticker</Typography>
                            <PieChart
                                radius={PieChart.defaultProps.radius - shiftSize}
                                segmentsShift={0.5}
                                lineWidth={50}
                                className={classes.pie}
                                data={pieData(stats.Sticker, gradientColors)}
                            />
                        </Grid>
                    </Button>

                    <Button onClick={() => showDetailStats('Extras', stats.Extras)}>
                        <Grid key='extras' item>
                            <Typography className={classes.pieTitle}>Extras</Typography>
                            <PieChart
                                radius={PieChart.defaultProps.radius - shiftSize}
                                segmentsShift={0.5}
                                lineWidth={50}
                                className={classes.pie}
                                data={pieData(stats.Extras, gradientColors)}
                            />
                        </Grid>
                    </Button>

                </Grid>
            </Container>

            <Dialog
                open={dialogOpen}
                onClose={handleClose}
                onClick={() => { setDialogOpen(false) }}
            >

                <DialogTitle>{detailStat.title} (Total {allCount})</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="right">Trait</TableCell>
                                    <TableCell align="right">Number</TableCell>
                                    <TableCell align="right">Percentage</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(detailStat.data).map(key => (
                                    <TableRow key={key}>
                                        <TableCell><img src={`../clipart/${key}.png`} alt={key} height={60} /></TableCell>
                                        <TableCell align="right">{key}</TableCell>
                                        <TableCell align="right"> {detailStat.data[key]}</TableCell>
                                        <TableCell align="right"> {formatter.format(detailStat.data[key] / allCount * 100)}%</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
            </Dialog>

        </Layout>
    )
}

export default StatsPage