import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'

function Postusingform() {

   const {register,handleSubmit}=useForm();
 

    const submithandler = async(data)=> {
          try{
            const response= await axios.post("https://node5.onrender.com/user/user/",data);
            console.log(response);
            console.log(response.data)
          }catch(err){
            console.log(err.message );
            alert("error while add user")
          }
    } 

  return (
    <div style={{textAlign:'center'}}>
         <h1>add data to api</h1>
         <form onSubmit={handleSubmit(submithandler)}>
 
            <div>
                <label>Name:</label>
                <input type="text" {...register("name")}></input>
            </div>

             <div>
                <label>Email:</label>
                <input type="email" {...register("email")}></input>
            </div>

             <div>
                <label>Password:</label>
                <input type="text" {...register("password")}></input>
            </div>

             <div>
                <label>Age:</label>
                <input type="number" {...register("age")}></input>
            </div>

             <div>
                <label>IsActive</label>
                <input  type="checkbox"  {...register("isActive")} ></input>
            </div>

            <div>
                <input type="submit"></input>
            </div>
         </form>
    </div>
  )
}

export default Postusingform
