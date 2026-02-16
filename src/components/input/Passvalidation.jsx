import React from 'react'
import { useForm } from 'react-hook-form'


function Passvalidation() {

   const {register,handleSubmit,formState:{errors},watch}=useForm({mode:"all"});

    const password = watch("password","");


   const validation={
       username:{
            required:{
                value:true,
                message:"name is required"
            },
       },
       password:{
           required:{
               value:true,
                message:"password is required"
           },
           pattern:{
              value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
            //   message:"password must contain 8 characters,one uppercase,one lowercase,one number and one special character"
           },
       },

       confpass:{
         required: {
            value: true,
            message: "confirm password is required*",
         },
         validate:(params)=>{
             return params == password || "confirm password not matched*"
         },
      },
   }

    
   const submithandler = (data) => {
    console.log(data);
   }

  return (
    <div style={{textAlign:'center'}}>
      <h1>Password Validation</h1>
      <form onSubmit={handleSubmit(submithandler)}>
           
         <div>
            <label>Enter user name</label>
            <input type="text" {...register("username",validation.username)}></input>
            {errors.username?.message}
         </div>

         <div>
            <label>Enter Password</label>
            <input type="text"{...register("password",validation.password)}></input>
            {errors.password?.message}
         </div>

         <div>
          <p style={{ color: password.length >= 8  ? "green" : "red" }}>
             Minimum 8 characters
          </p>
          <p style={{ color:password.match(/[a-z]/) ? "green" : "red" }}>
            One lowercase letter
          </p>
          <p style={{ color:password.match(/[A-Z]/) ? "green" : "red" }}>
            One uppercase letter
          </p>
          <p style={{ color: password.match(/\d/) ? "green" : "red" }}>
            One number
          </p>
          <p style={{ color: password.match(/[@$!%*?&]/) ? "green" : "red" }}>
            One special character (@$!%*?&)
          </p>
        </div>

            <div>
                <label>confirm password</label>
                <input type="text"{...register("confirmpass",validation.confpass)}></input>
                {errors.confirmpass?.message}
            </div>

          <div>
            <input type="submit" value="submit"></input>
          </div>

      </form>
      
    </div>
  )
}

export default Passvalidation
