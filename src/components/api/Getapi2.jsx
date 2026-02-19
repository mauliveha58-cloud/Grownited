import axios from 'axios'
import React, { useState } from 'react'

function Getapi2() {
    const [title,setTitle]=useState("");
    const [movies,setMovies]=useState([]);




    const getmovie=async()=>{
        const res = await axios.get(`https://www.omdbapi.com/?apikey=983c77e7&s=${title}`);
        const data = res.data.Search;
        console.log(res);
        console.log(res.data);
        console.log(data);
         
        setMovies(data);
    }

  return (
    <div>
      <h1>get api with input</h1>
      <input type="text" placeholder='enter movie name'  onChange={(e)=>setTitle(e.target.value)}></input>
      <button onClick={()=>{getmovie()}}>search</button>
      {
        movies.map((movie)=>{
            return(
             <ul>
                 <li>title={movie.Title}</li>
                 <li>year={movie.Year}</li>  
                 <li><img src={movie.Poster} style={{height:"150px",width:"150px"}}></img></li> 
             </ul> 
               
            )
        
        })
        
      }      

    </div>
  )
}

export default Getapi2
