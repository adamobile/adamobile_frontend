import React from 'react'
import {
    Container,
    Typography,
    Grid,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'
import '../theme/theme'
const axios = require('axios')

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
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


const Stats = (props) => {

    const [stats, setStats] = React.useState({
        total: '-',
        minted: '-',
        available: '-',
    })

    const updateStats = () => {

        axios.get('http://localhost:8001/stats')
            .then(function (response) {
                setStats(JSON.parse(response.data))
            })
            .catch(function (error) {
                setStats({
                    total: '-',
                    minted: '-',
                    available: '-',
                })
                console.log(error)
            })
    }

    React.useEffect(() => {
        updateStats()
        /*         setTimeout(() => {
                    updateStats()
                }, 10 * 1000) */
    }, [])


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

export default Stats