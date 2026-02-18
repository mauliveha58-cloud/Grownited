import React, { useState } from 'react'
import axios from 'axios'

function Apidemo() {

      const [message, setmessage] = useState("")
      const [users, setusers] = useState([])

  const getuser=async()=>{
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response) 
        console.log(response.data) 
        setmessage(response.data.message)
       
        setusers(response.data.data)
      
  }

  return (
    <div>
      <h1>API Demo Component</h1>
      <button onClick={()=>{getuser()}}>Get User</button>
       <h1>MESSAGE = {message}</h1>

         <h1>api data</h1>
         <table className='table'>
             <thead>
              <tr>
                <th>id</th>
                <th>name</th>
                <th>Password</th>
                <th>Email</th>
                <th>age</th>
                </tr>
             </thead>
              <tbody>
                {
                  users.map((user)=>{
                    return <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.password}</td>
                      <td>{user.email}</td>
                      <td>{user.age}</td>
                    </tr>
                    
                  })
                }

              </tbody>
          </table>
    
    </div>
  )
}

export default Apidemo
