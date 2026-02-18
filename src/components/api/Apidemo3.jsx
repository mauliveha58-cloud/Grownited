import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Apidemo3() {

    const [data,setdata]=useState([]);
  
    const getdata=async()=>{
        const response = await axios.get("https://dummyjson.com/comments/");
        console.log(response);
        console.log(response.data);
       console.log(response.data.comments);
        setdata(response.data.comments);
    }
    

  return (
    <div>
      <h2>Api demo 3</h2>
      <button onClick={()=>{getdata()}}>click me</button>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>body</th>
            <th>user</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>{
              return <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.body}</td>
                <td>{item.user.username}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Apidemo3
