import * as React from 'react'
import Layout from '../components/layout'
import Stats from '../components/stats'

const API = "http://localhost:8001"

const IndexPage = (props) => {


  const [stats, setStats] = React.useState({"total":0,"minted":0,"minting":0,"available":0});

  const fetchStats = async () => {
    await fetch(API + "/stats").then((res) => res.json()).then((data) => setStats(data));
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
    <button onClick={()=>{fetchStats();}}>Refresh Statistics</button>
    </Layout>
  )
}

export default IndexPage
