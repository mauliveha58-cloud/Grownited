import React from 'react'
import { Link } from 'react-router-dom'

function Netflixseries() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Netflix Series</h1>

      <h3>
        <Link to="/watch/strangerthings">Stranger Things</Link></h3>

      <h3>
        <Link to="/watch/moneyheist">Money Heist</Link></h3>

      <h3>
        <Link to="/watch/thecrown">The Crown</Link></h3>

       <h3>
        <Link to="/watch/allofusaredead">All of us are dead</Link></h3>
    </div>
  )
}

export default Netflixseries
