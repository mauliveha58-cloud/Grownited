import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Getapi() {

    const [movies, setmovies] = useState([])
    const [searchParam, setsearchParam] = useState("Iron Man")

    const searchMovie=async()=>{
        // const response = await axios.get("https://www.omdbapi.com/?&apikey=983c77e7&s=Avatar")
         const response = await axios.get(`https://www.omdbapi.com/?apikey=983c77e7&s=${searchParam}`)
        console.log(response);
        console.log(response.data);
        setmovies(response.data.Search)
    }

  return (
    <div style={{textAlign:"center"}}>
      <h1>OMDB SEARCh</h1>
        <button onClick={()=>{searchMovie()}}>SEARCH</button>
         <table className='table'>
            <thead>
                <tr>
                    <th>IMDB ID</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>POSTER</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies.map((movie)=>{
                        return<tr>
                            <td>{movie.imdbID}</td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>
                                <img src={movie.Poster} style={{height:"150px",width:"150px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default Getapi
