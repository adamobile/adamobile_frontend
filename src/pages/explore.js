import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import { StaticImage } from "gatsby-plugin-image"

const items = require('../res/explore.json')

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const ExplorePage = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Layout pageTitle="Explore Adamobiles">
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                {items.map((item) => (
                <GridListTile key={item.image}>
                    <Button onClick={handleClickOpen}>
                      <StaticImage src={`../images/micro.png`}/>
                    </Button>
                </GridListTile>
                ))}
            </GridList>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogContent dividers>
                <Typography gutterBottom>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </Typography>
                <Typography gutterBottom>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                  lacus vel augue laoreet rutrum faucibus dolor auctor.
                </Typography>
                <Typography gutterBottom>
                  Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                  scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                  auctor fringilla.
                </Typography>
              </DialogContent>
            </Dialog>
          </div>
      </Layout>
    )
  
  }
  
  export default ExplorePage