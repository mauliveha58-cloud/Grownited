import React, { useState } from 'react'
import { useForm } from "react-hook-form";




function Hookform() {
   const {register,handleSubmit} = useForm();
    const { register: registerBooking, handleSubmit: handletravel, } = useForm();
   const [submit,setsubmit]=useState(false);
   
   

   const submitHandler = (data) =>{
    console.log(data);
  setsubmit(true);
   }

    const travelhandler = (data) =>{
    console.log(data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Hook Form Demo</h1>

        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
            <label>First NAME</label>
            <input type='text' placeholder='enter name' {...register("firstName")}></input>
          </div>

          <div>
            <label>Last NAME</label>
            <input type='text' placeholder='enter name' {...register("lastName")}></input>
          </div>

          <div>
            <label>Age</label>
            <input type='text'{...register("age")}></input>
          </div>

          <div>
            <label>Password</label>
            <input type='password' {...register("password")}></input>
          </div>

          <div>
            <label>Gender:</label>
            Male <input type='radio' value="male" {...register("gender")}></input> &nbsp;
            Female <input type='radio' value ="female" {...register("gender")}></input>
          </div>
          
          <div>
            <label>City</label>
            <select>
                <option value="delhi" {...register("city")}>Delhi</option>
                <option value="mumbai" {...register("city")}>Mumbai</option>
                <option value="kolkata" {...register("city")}>Kolkata</option>
                <option value="chennai" {...register("city")}>Chennai</option>
            </select>
          </div>
           

          <div>
            <label>HOBBIES:</label>  &nbsp;
            CRICKET <input type='checkbox' value="cricket" {...register("hobbies")}></input> &nbsp;&nbsp;&nbsp;
            TRAVEL <input type='checkbox' value="travel" {...register("hobbies")}></input>  &nbsp;&nbsp;&nbsp;
            SCCROLLING <input type='checkbox' value="scrolling" {...register("hobbies")}></input> &nbsp;&nbsp;&nbsp;
          </div>



          <div>
            <input type='submit'></input>
          </div>

        </form>

        {
            submit && <h1>Form Submitted Successfully</h1>
            
        }

 <br></br>
    
     <form onSubmit={handletravel(travelhandler)}>
        <h2> travelling form</h2>

        <div>
          <label>Full Name</label>
          <input type='text' placeholder='Enter full name' {...registerBooking("fullname")}></input>
        </div>

        <div>
          <label>Email ID</label>
          <input type='email' {...registerBooking ("email")}></input>
        </div>
          
         <div>
          <label>Contact number</label>
          <input type='number' {...registerBooking("contact")}></input>
         </div>

          <div>
            <label>Destination</label>
            <select {...registerBooking("destination")}>
              <option value="Goa">Goa</option>
              <option value="Kerala">Kerala</option>
              <option value="Manali">Manali</option>
              <option value="Shimla">Shimla</option>
              <option value="Mathura">Mathura</option>
              <option value ="Vrundavan">Vrundavan</option>
            </select>
          </div>

          <div>
            <label>Departure Time</label>
            <input type='date' {...registerBooking("departure")}></input>
          </div>

          <div>
            <label>Return Time</label>
            <input type='date' {...registerBooking("return")}></input>
          </div>

          <div>
            <label>Number of Travellers</label>
            <input type='number' {...registerBooking("travellers")}></input>
          </div>

          <div>
            <label>Travel type :</label>
           Bus  <input type='radio' value='Bus' {...registerBooking('traveltype')}></input>&nbsp;
           Train <input type='radio' value="Train" {...registerBooking('traveltype')}></input>&nbsp;
           Flight <input type='radio' value="Flight" {...registerBooking('traveltype')}></input>
          </div>

         <div>
          <input type='submit'></input>
        </div>

     </form>

    </div>
  )
}

export default Hookform
