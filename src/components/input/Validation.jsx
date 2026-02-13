import React from 'react'
import { useForm } from 'react-hook-form';

function Validation() {
   const{register,handleSubmit,formState:{errors}}=useForm();

   const validation={
      agevalidation:{
        required:{
          value:true,
          message:"age is required*"
        },
        min:{
          value:18,
          message:"age should be above 18*"
        },
        max:{
          value:60,
          message:"age should be below 60*"
        },   
          

      },
      addressvalidation:{
        required:{
          value:true,
          message:"please add address*"
        },
       minLength:{
          value:5,
          message:"min 5 char is required"
        },
       maxLength:{
          value:20,
          message:"max 20 char is accepted****"
        }
      },
   }

    const submithandler=(data)=>{
      console.log(data);
        // alert("data submitted successfully")
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Validation Component</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        
       <div>
          <label>enter the name</label>
          <input type="text" {...register("name",{required:{value:true,message:"name is required"}})}></input>
            {errors.name && errors.name.message}
       </div>

       <div>
        <label>Age</label>
        <input type="text" {...register("age",validation.agevalidation)}></input>
        {errors.age && errors.age.message}
       </div>

       <div>
        <label>Address</label>
        <input type="text"{...register("address",validation.addressvalidation)}></input>
        {errors.address && errors.address.message}
       </div>

        <div>
          <label>Email</label>
          <input type="password"{...register("email",{required:{value:true,message:"please enter email*"}})}></input>
          {errors.email?.message}
        </div>

        <div >
          <input type="submit" value="submit"  ></input>
        </div>
      </form>
    </div>
  )
} 

export default Validation
