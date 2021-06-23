import React from 'react'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Box,
    Container,
    Link,
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import theme from '../theme/theme';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 600,
    },
}));

const Faq = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <Container className={classes.root}>
            <Box background={theme.palette.background.default}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>What is Adamobile?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                ADAmobile is an NFT-Collectables project on the cardano block chain.<br />
                                You can buy, sell, or gift ADAmobiles. Or simply enjoy them living in your wallet.<br />
                                Get your Adamobile and join the ride!<br />
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className={classes.heading}>What is an NFT?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                NFT stands for Non-fungible token, which means that the token is unique. NFTs on the cardano block chain are
                                native tokens and are treated like ADA, cardanos native currency, thus they can be managed in or sent from a cardano wallet.
                            </p>
                            <p>
                                Every NFT consists of an on-chain part and an off-chain part. The on-chain part includes the native token representing the NFT and meta-data describing different
                                aspects of the token. This meta-data is attached to the transaction which creates the token and is thus immutable.
                                The off-chain part consists of the image. The image cannot be saved on-chain due to restrictions on the transaction size.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className={classes.heading}>How to buy?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                After the sale is launched, you can send a specified amount of ADA to a specific address.
                                Please send ADA from a wallet that support native assets like <Link to='https://yoroi-wallet.com/'>Yoroi</Link>, <Link to='https://daedaluswallet.io'>Daedalus</Link>, or <Link to='https://adalite.io'>AdaLite</Link>.
                                After the payment is in, an Adamobile will be selected randomly from the pool of available items. This item will be created of the block chain and send to your address automatically.
                                On the <Link to='/'>home page</Link> there will be a list of already created ADAmobiles. This list can be filtered by your address, so that you can see which ADAmobiles you pulled.
                                If you want to purchase multiple items, please send the specified amout multiple times and not the multiple of the amout one time.
                                After all items have been created and sent to their new owners this will be announced on the
                            </p>
                            <p>
                                Dont send ADA from an exchange!!! If you send ADA from an exchange the funds will be lost and the Adamobile will be lost for ever.
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className={classes.heading}>Why Cardano?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            ...
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Container>

    )
}

export default Faq