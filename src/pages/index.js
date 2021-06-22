import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import GridList from '@material-ui/core/GridList'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import { makeStyles } from '@material-ui/core/styles'
import CarCard from '../components/carCard'

const IndexPage = (props) => {

  // const [uuid, setUuid] = React.useState('')

  return (
    <Layout pageTitle="Welcome to ADAmobile">
      <Container>Grab your ADAmobile and join the ride!</Container>
    </Layout>
  )
}

export default IndexPage
