import React from 'react'

export default function Stats ({stats}) {

    return (

        <div>
            <center><h1>AdaMobile Statistics</h1></center> 
            <p>
                Total: {stats.total}<br/>
                Minted: {stats.minted}<br/>
                Minting: {stats.minting}<br/>
                Available: {stats.available}<br/>
            </p>
         </div>

    )
}