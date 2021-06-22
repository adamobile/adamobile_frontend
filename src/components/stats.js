import React from 'react'
import {
    Box,
    Container,
    Typography
} from '@material-ui/core'
export default function Stats ({stats}) {

    return (

        <Container>
            <Typography>AdaMobile Statistics</Typography>
            <Typography>
                Total: {stats.total} 
                Minted: {stats.minted}
                Minting: {stats.minting}
                Available: {stats.available}
            </Typography>
        </Container>

    )
}