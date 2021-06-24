import React from 'react'
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
    },
}))

let updateStats = () => { }
const Stats = (props) => {

    const [stats, setStats] = React.useState({
        total: 999,
        minted: 0,
        minting: 0,
        available: 999,
    })
    updateStats = (newStats) => {
        setStats(newStats)
    }
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Grid container justify="center" spacing={10}>
                <Grid key='total' item>
                    <Typography>Total: {stats.total}</Typography>
                </Grid>
                <Grid key='minted' item>
                    <Typography>Minted: {stats.minted}</Typography>
                </Grid>
                <Grid key='minting' item>
                    <Typography>Minting: {stats.minting}</Typography>
                </Grid>
                <Grid key='available' item>
                    <Typography>Available: {stats.available}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export { Stats, updateStats }