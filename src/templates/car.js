import * as React from 'react'
import {
    Box,
    Typography,
    Chip,
    Card,
    CardContent,
    CardMedia,
    Container,
} from '@material-ui/core'
import {
    withStyles,
    makeStyles
} from '@material-ui/core/styles'
import '../theme/typography.css'
import Layout from '../components/layout'

const DodgerTypography = withStyles({
    root: {
        fontFamily: 'dodger'
    }
})(Typography);

const ItemTitle = withStyles({
    root: {
        margin: 10,
    }
})(DodgerTypography)

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    cardRoot: {
        maxWidth: 400,
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
        width: '90%'
    }
}));


const CarDetail = ({ pageContext: { car } }) => {

    const classes = useStyles()

    const getChips = (trait) => {
        if (Array.isArray(trait)) {
            return trait.map((extra) => (getChips(extra)))
        } else {
            return <Chip key={trait} className={classes.chip} label={trait} />
        }
    }

    return (
        <Layout pageIndex={2} pageTitle='Explore'>
            <Container className={classes.root}>
                <Card className={classes.cardRoot}>
                    <CardMedia
                        component="img"
                        className={classes.cardMedia}
                        image={`../../cars/${car.id.slice(1)}.png`}
                        title={car.id}
                    />
                    <CardContent className={classes.cardContent}>
                        <ItemTitle>Adamobile {car.id}</ItemTitle>
                        <Box className={classes.chips}>
                            {Object.keys(car).filter(trait => car[trait].length).map((trait) => (
                                getChips(car[trait])
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    )
}

export default CarDetail