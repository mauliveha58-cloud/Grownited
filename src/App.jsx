import React from "react";
import Header from "./components/Header";
import Contain from "./components/Contain";
import Mapdemo1 from "./components/Mapdemo1";
import Mapdemo2 from "./components/Mapdemo2";
import { Route, Routes } from "react-router-dom";
import Netflix from "./components/Netflix";
import Navbar from "./components/Navbar";
import Netflixhome from "./components/Netflixhome";
import NetflixMovie from "./components/NetflixMovie";
import Netflixorignal from "./components/Netflixorignal";
import Comedymovie from "./components/Comedymovie";
import Netflixseries from "./components/Netflixseries";

function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
         <Route path="/" element={<Netflix/>}> </Route>
           <Route path="/netflixhome" element={<Netflixhome />}></Route>
           <Route path="/movie" element={<NetflixMovie/>}></Route> 
           <Route path="/Comedymovie" element={<Comedymovie/>}></Route> 
           <Route path="/originals" element={<Netflixorignal/>}></Route> 
           <Route path="/series" element={<Netflixseries/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
