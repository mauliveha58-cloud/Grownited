import React from 'react'
import { useParams } from 'react-router-dom'

function Teamdetails() {

    const {name} = useParams();
    const {des} = useParams();
  return (
    <div>
       <h2>The team is...{name}</h2>
        <p>{des}</p>
    </div> 
  )
}

export default Teamdetails
