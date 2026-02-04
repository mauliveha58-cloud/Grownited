import React from 'react'
import { Link } from 'react-router-dom';

var movies=[
  {id:1,name:"Dhurandhar"},{id:2,name:"kill"},{id:3,name:"Kantara"},
]
function NetflixMovie() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Netflix Movie Page</h1>
       
      {
        movies.map((movie)=>{
          return(
            <li>
              <Link to={`/watch/${movie.name}`}>{movie.name}</Link>
            </li>
          )
        })
      }
    </div>
  )
}

export default NetflixMovie
