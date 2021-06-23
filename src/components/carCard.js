import * as React from 'react'
import {
  GridListTile,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '../theme/typography.css'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    background: theme.palette.background.paper,
  },
  cardMedia: {
  },
  cardContent: {
  },
}))

const DodgerTypography = withStyles({
  root: {
    fontFamily: 'dodger'
  }
})(Typography);


const CarCard = ({ car, isSold, showDetail }) => {

  const classes = useStyles()
  return (
    <GridListTile>
      <Card className={classes.cardRoot} onClick={showDetail}>
        <CardActionArea>
        <CardMedia
          component="img"
          className={classes.cardMedia}
          image={`../${car.image}.png`}
          title={car.id}
        />
      <CardContent className={classes.cardContent}>
        <DodgerTypography gutterBottom variant='h5' component='h2'>
          {car.id} {isSold? 'SOLD!': ''}
        </DodgerTypography>
      </CardContent>
      </CardActionArea>
      </Card>
    </GridListTile>
  )
}

export default CarCard
