import React from 'react'
import { useForm } from 'react-hook-form'

function Validation2() {
  const {register,handleSubmit,formState:{errors}}=useForm({mode:"all"});

      const validation={
         namevalidation:{
            required:{
                value:true,
                message:"name is required"
            },
         },
         contactvalidation:{
            required:{
               value:true,
               message:"contact is required"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}/,
                message:"invalid contact number"
            },
         },
         promoCodeValidator:{
            required:{
                value:true,
                message:"promocode is required"
            },
            validate:(param)=>{
               return param == "123" || "invalid promocode"
            },
         },
         hobbiesValidator:{
            required:{
                value:true,
                message:"select hobbies"
            },
            validate:(param)=>{
                return param?.length>=2 ||"select at least 2 hobbies"
            }
         },

      }

      const submithandler=(data)=>{
        console.log(data);
      }

  return (
    <div style={{textAlign:'center'}}>
      <h2>Validation2 Component</h2>
        <form onSubmit={handleSubmit(submithandler)}>
  
            <div>
                <label>enter the name</label>
                <input type="text" {...register("name",validation.namevalidation)}></input>
                {errors.name?.message}
            </div>

              <div>
                <label>contact</label>
                <input type="text" {...register("contact",validation.contactvalidation)}></input>
                {errors.contact?.message}
              </div>

              <div>
                <label>Promocode</label>
                 <input type='text' {...register("promocode",validation.promoCodeValidator)}></input>
                {errors.promocode?.message}
              </div>

             <div>
                <label>Hobbies</label>
                 Cricket:<input type='checkbox' {...register("hobbies",validation.hobbiesValidator)} value="cricket"></input>
                    Travel:<input type='checkbox' {...register("hobbies",validation.hobbiesValidator)} value="travel"></input>
                    Scrolling:<input type='checkbox' {...register("hobbies",validation.hobbiesValidator)} value="scrolling"></input>
                 {errors.hobbies?.message}
             </div>

            <div>
                <input type="submit" value="submit"></input>
            </div>
        </form>
    </div>
  )
}

export default Validation2
