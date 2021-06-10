import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'
const WebSocket = require('isomorphic-ws');

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Connection is open!');
};

const IndexPage = (props) => {

  const [stats, setStats] = React.useState({'total':0,'minted':0,'minting':0,'available':0})
  const [uuid, setUuid] = React.useState('')

  ws.onmessage = function (event) {

    console.log('received: ', event.data)
    const msg = JSON.parse(event.data)

    switch (msg.type) {
      case 'stats':
        setStats(msg.stats)
        break;

      case 'uuid':
        setUuid(msg.uuid)
        break;

      case 'log':
      break;
      default:
        break;
    }

  }

  return (
    <Layout pageTitle="Welcome to ADAmobile">
    <p>Grab your ADAmobile and join the ride!</p>
    <Stats stats={stats}></Stats><br/>
    <p>UUID: {uuid}</p>
    </Layout>
  )
}

export default IndexPage
