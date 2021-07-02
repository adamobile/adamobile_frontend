import * as React from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Layout from '../components/layout'
import {
    Box,
    Container,
    Grid,
    Typography,
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    grid: {
       justifyContent: 'center',
       textAlign: 'center',
       padding: 16,
    },
    pie: {
    },
}))

const StatsPage = ({ pageContext: { cars } }) => {

    const microcar = cars.filter(car => car.type === 'Microcar').length
    const hatchback = cars.filter(car => car.type === 'Hatchback').length
    const sedan = cars.filter(car => car.type === 'Sedan').length
    const supercar = cars.filter(car => car.type === 'Supercar').length
    const suv = cars.filter(car => car.type === 'SUV').length


    const black = cars.filter(car => car.color === 'Black').length
    const blue = cars.filter(car => car.color === 'Blue').length
    const red = cars.filter(car => car.color === 'Red').length
    const white = cars.filter(car => car.color === 'White').length
    const yellow = cars.filter(car => car.color === 'Yellow').length
    const pink = cars.filter(car => car.color === 'Pink').length
    const orange = cars.filter(car => car.color === 'Orange').length

    const wings = cars.filter(car => car.rims === 'Wings').length
    const doubleWings = cars.filter(car => car.rims === 'Double wings').length
    const feathers = cars.filter(car => car.rims === 'Feathers').length
    const blades = cars.filter(car => car.rims === 'Blades').length
    const columns = cars.filter(car => car.rims === 'Columns').length
    const shanks = cars.filter(car => car.rims === 'Shanks').length
    const cardanos = cars.filter(car => car.rims === 'Cardanos').length
    const teddies = cars.filter(car => car.rims === 'Teddies').length
    const rockets = cars.filter(car => car.rims === 'Rockets').length
    const skis = cars.filter(car => car.rims === 'Skis').length
    const monster = cars.filter(car => car.rims === 'Monster').length
    const tank = cars.filter(car => car.rims === 'Tank').length
    const robot = cars.filter(car => car.rims === 'Robot').length
    const gone = cars.filter(car => car.rims === 'Gone').length


    const dog = cars.filter(car => car.sticker === 'Dog').length
    const tiger = cars.filter(car => car.sticker === 'Tiger').length
    const fox = cars.filter(car => car.sticker === 'Fox').length
    const cat = cars.filter(car => car.sticker === 'Cat').length
    const adamobile = cars.filter(car => car.sticker === 'Racing').length
    const racing = cars.filter(car => car.sticker === 'Adamobile').length
    const cardano = cars.filter(car => car.sticker === 'Cardano').length
    const ada = cars.filter(car => car.sticker === 'ADA').length
    const eth = cars.filter(car => car.sticker === 'ETH').length
    const btc = cars.filter(car => car.sticker === 'BTC').length
    const smile = cars.filter(car => car.sticker === 'Smile').length
    const mandala = cars.filter(car => car.sticker === 'Mandala').length
    const eye = cars.filter(car => car.sticker === 'Eye').length
    const noSticker = cars.filter(car => car.sticker === '').length

    const frontHorn = cars.filter(car => car.extras.includes('Front horn')).length
    const topHorn = cars.filter(car => car.extras.includes('Top horn')).length
    const topSpikes = cars.filter(car => car.extras.includes('Front spikes')).length
    const frontSpikes = cars.filter(car => car.extras.includes('Top spikes')).length
    const rearSpikes = cars.filter(car => car.extras.includes('Rear spikes')).length
    const frontLights = cars.filter(car => car.extras.includes('Front lights')).length
    const topLights = cars.filter(car => car.extras.includes('Top lights')).length
    const policeLights = cars.filter(car => car.extras.includes('Police lights')).length
    const sharkFin = cars.filter(car => car.extras.includes('Shark fin')).length
    const goldenLion = cars.filter(car => car.extras.includes('Golden lion')).length
    const turbine = cars.filter(car => car.extras.includes('Turbine')).length
    const monsterExhaust = cars.filter(car => car.extras.includes('Monster exhaust')).length
    const spoiler = cars.filter(car => car.extras.includes('Spoiler')).length
    const taxi = cars.filter(car => car.extras.includes('Taxi')).length
    const antenna = cars.filter(car => car.extras.includes('Antenna')).length
    const firefighter = cars.filter(car => car.extras.includes('Firefighter')).length
    const ship = cars.filter(car => car.extras.includes('Ship')).length
    const tent = cars.filter(car => car.extras.includes('Tent')).length
    const devilHorns = cars.filter(car => car.extras.includes('Devil horns')).length
    const noExtras = cars.filter(car => car.extras.length === 0).length

    const classes = useStyles()
    return (
        <Layout pageTitle='Stats' pageIndex={3}>
            <Container>
                <Grid container spacing={10} justify='center' className={classes.grid} lg={12}>

                    <Grid justify='center' key='available' item>
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

                    <Grid justify='center' key='type' item>
                        <Typography>Type</Typography>
                        <PieChart
                            className={classes.pie}
                            data={[
                                { title: 'Microcar', value: microcar, color: '#E38627' },
                                { title: 'Hatchback', value: hatchback, color: '#C13C37' },
                                { title: 'Sedan', value: sedan, color: '#6A2135' },
                                { title: 'SUV', value: suv, color: '#6A2135' },
                                { title: 'Supercar', value: supercar, color: '#6A2135' },
                            ]}
                            animate={true}
                        />
                    </Grid>

                    <Grid justify='center' key='color' item>
                        <Typography>Color</Typography>
                        <PieChart
                            className={classes.pie}
                            data={[
                                { title: 'Black', value: black, color: '#E38627' },
                                { title: 'Blue', value: blue, color: '#C13C37' },
                                { title: 'Red', value: red, color: '#6A2135' },
                                { title: 'White', value: white, color: '#6A2135' },
                                { title: 'Yellow', value: yellow, color: '#6A2135' },
                                { title: 'Pink', value: pink, color: '#6A2135' },
                                { title: 'Orange', value: orange, color: '#6A2135' },
                            ]}
                            animate={true}
                        />
                    </Grid>

                    <Grid justify='center' key='rims' item>
                        <Typography>Rims</Typography>
                        <PieChart
                            className={classes.pie}
                            data={[
                                { title: 'Wings', value: wings, color: '#E38627' },
                                { title: 'Double wings', value: doubleWings, color: '#C13C37' },
                                { title: 'Feathers', value: feathers, color: '#6A2135' },
                                { title: 'Blades', value: blades, color: '#6A2135' },
                                { title: 'Columns', value: columns, color: '#6A2135' },
                                { title: 'Shanks', value: shanks, color: '#6A2135' },
                                { title: 'Cardanos', value: cardanos, color: '#6A2135' },
                                { title: 'Teddies', value: teddies, color: '#6A2135' },
                                { title: 'Rockets', value: rockets, color: '#6A2135' },
                                { title: 'Skis', value: skis, color: '#6A2135' },
                                { title: 'Monster', value: monster, color: '#6A2135' },
                                { title: 'Tank', value: tank, color: '#6A2135' },
                                { title: 'Robot', value: robot, color: '#6A2135' },
                                { title: 'Gone', value: gone, color: '#6A2135' },
                            ]}
                            animate={true}
                        />
                    </Grid>

                    <Grid justify='center' key='sticker' item>
                        <Typography>Sticker/Minted</Typography>
                        <PieChart
                            className={classes.pie}
                            data={[
                                { title: 'None', value: noSticker, color: '#E38627' },
                                { title: 'Dog', value: dog, color: '#E38627' },
                                { title: 'Tiger', value: tiger, color: '#C13C37' },
                                { title: 'Fox', value: fox, color: '#6A2135' },
                                { title: 'Cat', value: cat, color: '#6A2135' },
                                { title: 'Racing', value: racing, color: '#6A2135' },
                                { title: 'Adamobile', value: adamobile, color: '#6A2135' },
                                { title: 'Cardano', value: cardano, color: '#6A2135' },
                                { title: 'ADA', value: ada, color: '#6A2135' },
                                { title: 'ETH', value: eth, color: '#6A2135' },
                                { title: 'BTC', value: btc, color: '#6A2135' },
                                { title: 'Smile', value: smile, color: '#6A2135' },
                                { title: 'Mandala', value: mandala, color: '#6A2135' },
                                { title: 'Eye', value: eye, color: '#6A2135' },
                            ]}
                            animate={true}
                        />
                    </Grid>

                    <Grid justify='center' key='extras' item>
                        <Typography>Extras</Typography>
                        <PieChart
                            className={classes.pie}
                            data={[
                                { title: 'Front horn', value: frontHorn, color: '#E38627' },
                                { title: 'Top horn', value: topHorn, color: '#E38627' },
                                { title: 'Front spikes', value: frontSpikes, color: '#C13C37' },
                                { title: 'Top spikes', value: topSpikes, color: '#6A2135' },
                                { title: 'Rear spikes', value: rearSpikes, color: '#6A2135' },
                                { title: 'Front lights', value: frontLights, color: '#6A2135' },
                                { title: 'Top lights', value: topLights, color: '#6A2135' },
                                { title: 'Police lights', value: policeLights, color: '#6A2135' },
                                { title: 'Shark fin', value: sharkFin, color: '#6A2135' },
                                { title: 'Golden lion', value: goldenLion, color: '#6A2135' },
                                { title: 'Turbine', value: turbine, color: '#6A2135' },
                                { title: 'Monster exhaust', value: monsterExhaust, color: '#6A2135' },
                                { title: 'Spoiler', value: spoiler, color: '#6A2135' },
                                { title: 'Taxi', value: taxi, color: '#6A2135' },
                                { title: 'Antenna', value: antenna, color: '#6A2135' },
                                { title: 'Firefighter', value: firefighter, color: '#6A2135' },
                                { title: 'Ship', value: ship, color: '#6A2135' },
                                { title: 'Tent', value: tent, color: '#6A2135' },
                                { title: 'Devil horns', value: devilHorns, color: '#6A2135' },
                                { title: 'None', value: noExtras, color: '#6A2135' },
                            ]}
                        />
                    </Grid>

                </Grid>
            </Container>
        </Layout>
    )
}

export default StatsPage