import * as React from 'react'
import {
    Box,
    Typography,
    Dialog,
    DialogContent,
    Chip
} from '@material-ui/core'
import {
    withStyles,
    makeStyles
} from '@material-ui/core/styles'
import '../theme/typography.css'

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
    }
}));

let showCarDetails = () => { }

const CarDetail = () => {

    const [dialogOpen, setDialogOpen] = React.useState(false)
    const [selectedItem, setSelectedItem] = React.useState('')

    const classes = useStyles()

    showCarDetails = (item) => {
        setSelectedItem(item)
        setDialogOpen(true)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    const getChips = (trait) => {
        if (Array.isArray(trait)) {
            return trait.map((extra) => (getChips(extra)))
        } else {
            return <Chip className={classes.chip} label={trait} />
        }
    }

    const getDetailText = () => {
        if (dialogOpen) {
            return <Box className={classes.root}>
                <ItemTitle>Adamobile {selectedItem.id}</ItemTitle>
                <Box className={classes.chips}>
                    {Object.keys(selectedItem.traits).filter(trait => selectedItem.traits[trait].length).map((trait) => (
                        getChips(selectedItem.traits[trait])
                    ))}
                </Box>
            </Box>
        }
    }

    const getDetailImg = () => {
        if (dialogOpen) {
            return <img src={`../${selectedItem.image}.png`} alt='grid item' />
        }
        return <Box />
    }

    return (
        <Dialog onClose={handleClose} aria-labelledby='customized-dialog-title' open={dialogOpen}>
            <DialogContent dividers>
                {getDetailImg()}
                {getDetailText()}
            </DialogContent>
        </Dialog>
    )
}

export { CarDetail, showCarDetails }