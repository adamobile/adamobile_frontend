import React from 'react'
import {
    Container,
    Typography
} from '@material-ui/core'

let updateStats = () => {}
const Stats = (props) => {

    const [stats, setStats] = React.useState(false)
    updateStats = (newStats) => {
        setStats(newStats)
    }
    
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

export default {Stats, updateStats}