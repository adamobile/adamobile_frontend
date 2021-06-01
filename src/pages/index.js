import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'

const API = "http://localhost:8001"

const IndexPage = (props) => {

  const [stats, setStats] = React.useState({'total':0,'minted':0,'minting':0,'available':0});

  const fetchStats = async () => {
    await fetch(API + "/stats").then((res) => res.json()).then((data) => setStats(data));
  };

  var ws = new WebSocket('ws://localhost:8080', "protocolOne");
  ws.onopen = function (event) {
    console.log('connected to web socket server');
    ws.send('Here\'s some text that the server is urgently awaiting!');
  };
  ws.onmessage = function (event) {
    console.log(event.data);
  }

  const sendMsg = () => {
    ws.send('Here\'s some text that the server is urgently awaiting!');
  }

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
    <button onClick={()=>{fetchStats();}}>Refresh Statistics</button><br/>
    <button onClick={()=>{sendMsg();}}>Send Message</button>
    </Layout>
  )
}

export default IndexPage
