import axios from 'axios'
import React, { useState } from 'react'

function Apidemo2() {

    const [data,setdata]=useState([]);


   const getdata=async()=>{
     const response = await axios.get("https://dummyjson.com/products/");
     console.log(response);
     console.log(response.data);
    console.log(response.data.products);
    setdata(response.data.products);
   }

  return (
    <div style={{textAlign:"center"}}>
       <h1>Api demo2</h1>
        <button onClick={()=>{getdata()}}>click me</button>
        <h1>API data</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>price</th>
                    <th>category</th>
                    <th>brand</th>
                    <th>rating</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item)=>{
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>{item.brand}</td>
                            <td>{item.rating}</td>
                        </tr>
                    })
                }
            </tbody>
       </table> 

    </div>
  )
}

export default Apidemo2
