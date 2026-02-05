import React from 'react'
import { Link } from 'react-router-dom'

var Teams = [
    {id:1,name:'Royal Challege Bangloor (RCB)',des:"kohli is a main plyer."},
    {id:2,name:'Mumbai Indians (MI)'},
    {id:3,name:'chennnai super King (CSK)'},
    {id:4,name:'Rajshtan Royal (RR)'},
    {id:5,name:'Gujrat Titans (GT)'},
    {id:6,name:'Delhi Capital (DC)'},

]
function Team() {
   return (
      <div style={{textAlign:"center"}}>
        <h1>Ipl Men's team</h1>
         
        {
          Teams.map((t)=>{
            return(
              <li>
                <Link to={`/teamdetail/${t.name}/${t.des}`}>{t.name}</Link>
              </li>
            )
          })
        }
      </div>
    )
}

export default Team
