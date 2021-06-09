import * as React from 'react'
import Layout from '../components/layout'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';

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
      width: 'auto',
      height: 'auto',
    },
    gridImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    
  }));

const ExplorePage = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Layout pageTitle='Explore Adamobiles'>
        <div className={classes.root}>
            <GridList cellHeight={220} className={classes.gridList}>
                {items.map((item) => (
                <GridListTile key={item.id}>
                    <Button onClick={() => {
                      setSelectedItem(item)
                      setOpen(true)
                    }}>
                      <div className={classes.gridImg}>
                        <img src={`../${item.image}.png`} alt='grid item'/>
                      </div>
                    </Button>
                </GridListTile>
                ))}
            </GridList>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogContent dividers>
                <img src={ selectedItem === null? ``: `../${selectedItem.image}.png`} alt='grid item'/>
              </DialogContent>
            </Dialog>
          </div>
      </Layout>
    )
  
  }
  
  export default ExplorePage