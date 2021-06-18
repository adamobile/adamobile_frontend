import * as React from 'react'
import {
  GridListTile,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme/theme'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    maxWidth: 300,
    background: theme.palette.background.paper,
    margin: 10,
  },
  cardMedia: {
    height: 200,
  },
  cardContent: {
  },
}))


export default function CarCard({ car, isSold, showDetail }) {

  const classes = useStyles()
  return (
    <GridListTile id={car.id} key={car.id}>
      <Card className={classes.cardRoot} onClick={showDetail}>
        <CardActionArea>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={`../${car.image}.png`}
          title={car.id}
        />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant='h5' component='h2'>
          {car.id} {isSold? 'SOLD!': ''}
        </Typography>
      </CardContent>
      </CardActionArea>
      </Card>
    </GridListTile>
  )

}
