import * as React from 'react'
import { navigate } from 'gatsby'
import {
  GridListTile,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import '../theme/typography.css'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    background: theme.palette.background.paper,
    display: 'block',
  },
  cardMedia: {
    height: 150,
  },
  cardTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
    fontSize: '1.5rem',
  },
  cardSubtitle: {
    fontSize: '1rem',
  },
}))

const DodgerTypography = withStyles({
  root: {
    fontFamily: 'dodger',
  }
})(Typography);


const CarCard = (props) => {

  const { car, receiver: owner } = props
  const classes = useStyles()
  const [imageLoaded, setImageLoaded] = React.useState(false)

  return (
    <GridListTile {...props}>
      <Card className={classes.cardRoot}
        onClick={
          () => {
            navigate(`/explore/car/${car.id.slice(1)}`)
          }}>
        <CardActionArea >
          {
            !imageLoaded && <Skeleton variant="rect" width='100%' height={200} />
          }
          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={`../cars/${car.id.slice(1)}.png`}
            title={car.id}
            onLoad={() => setImageLoaded(true)}
          />
          <CardContent className={classes.cardContent}>
            <DodgerTypography gutterBottom className={classes.cardTitle}>
              {`${car.id}`}
            </DodgerTypography>
            {owner !== null && <Tooltip title={`Owner: ${owner}`}>
              <Typography noWrap variant='body1'>{owner}</Typography>
            </Tooltip>
            }
          </CardContent>
        </CardActionArea>
      </Card>
    </GridListTile>
  )
}

export default CarCard
