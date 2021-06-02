import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'
const WebSocket = require('isomorphic-ws');

const API = "http://localhost:8001"

var ws = new WebSocket('ws://localhost:8080');
ws.onopen = function (event) {
  console.log('Connection is open!');
};



const sendMsg = () => {
  ws.send('Here\'s some text that the server is urgently awaiting!');
}

const IndexPage = (props) => {

  const [stats, setStats] = React.useState({'total':0,'minted':0,'minting':0,'available':0});

  ws.onmessage = function (event) {
    console.log('received: ', event.data);
    const msg = JSON.parse(event.data);
    setStats(msg.stats)
  };

  /* React.useEffect(() => {
    const interval = setInterval(() => {
      fetchStats();
    }, 1000);
    return () => clearInterval(interval);
  }, []); */

  return (
    <Layout pageTitle="Welcome to ADAmobile">
    <p>Grab your ADAmobile and join the ride!</p>
    <Stats stats={stats}></Stats><br/>
    </Layout>
  )
}

export default IndexPage
