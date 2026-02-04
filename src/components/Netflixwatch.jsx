import React from 'react'
import { useParams } from 'react-router-dom'


function Netflixwatch() {
    const {name} = useParams();
   
  return (
    <div>
      <h1>Watching....{name}</h1>
    </div>
  )
}

export default Netflixwatch
