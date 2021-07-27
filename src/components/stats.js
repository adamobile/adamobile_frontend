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
        marginBottom: theme.spacing(2),
        '& .MuiTypography-root': {
            [theme.breakpoints.down('md')]: {
                fontSize: theme.typography.pxToRem(14),
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.typography.pxToRem(10),
            },
            [theme.breakpoints.up('md')]: {
                fontSize: theme.typography.pxToRem(20),
            },
        },
        marginTop: 120,
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

        axios.get(`${process.env.GATSBY_API_URL}/stats`)
            .then(function (response) {
                if (response.data) {
                    setStats(response.data)
                }
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
        const timerId = setTimeout(() => {
            updateStats()
        }, 60 * 1000)
        return () => { clearInterval(timerId) }
    }, [])


    const classes = useStyles()
    return (
        <Container className={classes.root}>
            <Link className={classes.link} to='/stats/'>
                <Grid container justify="center" spacing={4}>
                    <Grid key='total' item>
                        <DodgerTypography>Total {stats.total}</DodgerTypography>
                    </Grid>
                    <Grid key='minted' item>
                        <DodgerTypography>Sold {stats.minted}</DodgerTypography>
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