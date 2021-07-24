import React from 'react'
import Layout from '../components/layout'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
    Box,
    Container,
    Link,
} from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import theme from '../theme/theme';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const VerticalAccordionDetails = withStyles({
    root: {
        flexDirection: 'column'
    }
})(AccordionDetails)

const useStyles = makeStyles((theme) => ({
    faqRoot: {
        minHeight: '100vh',
        width: '95%',
        maxWidth: 1000,
        marginTop: 120,
    },
    heading: {
        fontSize: theme.typography.pxToRem(18),
        fontWeight: 600,
    },
    gatsbyLink: {
        textDecoration: 'none',
        color: '#b71c1c',
    }
}));

const FaqPage = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Layout addStats={false}>
            <Container className={classes.faqRoot}>
                <Box background={theme.palette.background.default}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>What is Adamobile?</Typography>
                        </AccordionSummary>
                        <VerticalAccordionDetails>
                            <Typography>
                                Adamobile is an NFT-Collectables project on the Cardano block chain.<br />
                                You can buy, sell, or gift ADAmobiles. Or simply enjoy them living in your wallet.<br />
                                Get your Adamobile now and join the ride!<br />
                            </Typography>
                        </VerticalAccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                        >
                            <Typography className={classes.heading}>What is an NFT?</Typography>
                        </AccordionSummary>
                        <VerticalAccordionDetails>
                            <Typography>
                                NFT stands for Non-fungible token, which is a unique, digital, immutable certificate of ownership. NFTs on the cardano block chain are
                                native tokens and are treated like ADA, cardanos native currency, thus they can be managed in or sent from a standard cardano wallet.
                            </Typography>
                            <br />
                            <Typography>
                                Every NFT consists of an on-chain part and an off-chain part. The on-chain part includes the native token representing the NFT and meta-data describing different
                                aspects of the token. This meta-data is attached to the minting transaction and is thus immutable.
                                The off-chain part consists of the image that resides on <Link href='https://ipfs.io/'>IPFS</Link>. The image cannot be saved on-chain due to restrictions on the transaction size.
                            </Typography>
                        </VerticalAccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                        >
                            <Typography className={classes.heading}>How to buy?</Typography>
                        </AccordionSummary>
                        <VerticalAccordionDetails>
                            <Typography>
                                On the <GatsbyLink className={classes.gatsbyLink} to='/buy/'>Buy</GatsbyLink> page you will find the amount of ADA and the address to send it to.
                                Please send ADA from a wallet that support native assets like <Link href='https://yoroi-wallet.com/'>Yoroi</Link>, <Link href='https://daedaluswallet.io'>Daedalus</Link>, or <Link href='https://adalite.io'>AdaLite</Link>.
                                After the payment is processed, an Adamobile will be selected randomly from the pool of available items. This item will be created on the block chain and sent to your address automatically.
                            </Typography>
                            <br />
                            <Typography>
                                On the <GatsbyLink className={classes.gatsbyLink} to='/buy/'>Buy</GatsbyLink> page there is also a list of already minted ADAmobiles. This list can be filtered by your address, so that you can see which Adamobiles you pulled.
                                If you want to purchase multiple items, please send the specified amout multiple times and not the multiple of the amout one time.
                            </Typography>
                            <br />
                            <Typography>
                                Dont send ADA from an exchange!!! If you send ADA from an exchange the funds and the NFT will be lost for ever.
                            </Typography>
                        </VerticalAccordionDetails>
                    </Accordion>
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                        >
                            <Typography className={classes.heading}>Why Cardano?</Typography>
                        </AccordionSummary>
                        <VerticalAccordionDetails>
                            <Typography>
                                In addition to being in the top 5 crypto currencies by market capitalization Cardano has a vibrant NFT community.
                                Cardano also has low transaction fees and relatively fast settlement times.
                                The NFTs are represented by native tokens which can be viewed, sent, and received via standrad wallets.
                                In addition to all these advantages Cardano uses a prove of stake POS algorithm that has a very low environmental impact.
                            </Typography>
                            <br />
                            <Typography>
                                So it was really a no brainer to launch Adamobile on the cardano blockchain!
                            </Typography>
                        </VerticalAccordionDetails>
                    </Accordion>
                </Box>
            </Container>
        </Layout >
    )
}

export default FaqPage