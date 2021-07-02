import React from 'react'
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginTop: 20,
        marginBottom: 20,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    },
}))

const DodgerTypography = withStyles({
    root: {
        fontFamily: 'dodger'
    }
})(Typography);

let updateStats = () => { }
const Stats = (props) => {

    const [stats, setStats] = React.useState({
        total: 999,
        minted: 0,
        available: 999,
    })
    updateStats = (newStats) => {
        setStats(newStats)
    }
    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Link className={classes.link} to='/stats/'>
                <Grid container justify="center" spacing={10}>
                    <Grid key='total' item>
                        <DodgerTypography>Total {stats.total}</DodgerTypography>
                    </Grid>
                    <Grid key='minted' item>
                        <DodgerTypography>Minted {stats.minted}</DodgerTypography>
                    </Grid>
                    <Grid key='available' item>
                        <DodgerTypography>Available {stats.available}</DodgerTypography>
                    </Grid>
                </Grid>
            </Link>
        </Container>
    )
}

export { Stats, updateStats }