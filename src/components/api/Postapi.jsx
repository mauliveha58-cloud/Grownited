import axios from 'axios';
import React from 'react'

function Postapi() {

  const postuser = async()=>{
    const userobj = {
            name:"amit",
            age:23,
            email:"amit1@gmail.com",
            password:"amit123",
            isActive:true,
        }


        try{
          const response = await axios.post("https://node5.onrender.com/user/user/",userobj);
          console.log(response);
          console.log(response.data)
        }catch(err){
            console.log(err)
            alert("error while adding user")
           }
   }
      
  

  return (
    <div style={{textAlign:"center"}}>
      <h1>Post API Demo</h1>
      <button onClick={()=>{postuser()}}>Add data</button>
    </div>
  )
}

export default Postapi
