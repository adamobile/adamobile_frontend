import * as React from 'react'
import Layout from '../components/layout'
import {
    Container,
    Typography
} from '@material-ui/core'

const StatsPage = () => {
    return (
        <Layout pageTitle='Stats' pageIndex={3}>
            <Container>
                <Typography variant='h6'>STATS</Typography>
            </Container>
        </Layout>
    )
}

export default StatsPage