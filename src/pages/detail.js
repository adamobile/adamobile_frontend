import * as React from 'react'
import {
    Box,
    Typography,
    Chip,
    Card,
    CardActionArea,
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

const cars = require('../res/all.json')

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
    root:{
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


const CarDetailPage = (props) => {
    console.log(props.location)
    const selectedItem = props.location.selectedItem !== undefined ? props.location.state.selectedItem : cars.filter(car => car.id === props.location.hash)[0]
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
                        image={`../thumb_${selectedItem.id.slice(1)}.png`}
                        title={selectedItem.id}
                    />
                    <CardContent className={classes.cardContent}>
                        <ItemTitle>Adamobile {selectedItem.id}</ItemTitle>
                        <Box className={classes.chips}>
                            {Object.keys(selectedItem).filter(trait => selectedItem[trait].length).map((trait) => (
                                getChips(selectedItem[trait])
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    )
}

export default CarDetailPage