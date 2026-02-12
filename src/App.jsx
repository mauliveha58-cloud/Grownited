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
import Netflixseries from "./components/Netflixseries";
import Netflixeroorpage from "./components/Netflixeroorpage";
import Netflixwatch from "./components/Netflixwatch";
import Teamerror from "./components/Teamerror";
import Team from "./components/Team";
import Teamdetails from "./components/Teamdetails";
import Usestatedemo1 from "./components/Usestatedemo1";
import Props from "./components/Props";
import Inputdemo1 from "./components/input/Inputdemo1";
import Hookform from "./components/input/Hookform";


function App() {
  return (
    <div>
      <Navbar> </Navbar>

      <Routes>
         <Route path="/" element={<Netflix/>}> </Route>
           <Route path="/netflixhome" element={<Netflixhome />}></Route>
           <Route path="/movie" element={<NetflixMovie/>}></Route> 
           <Route path="/originals" element={<Netflixorignal/>}></Route> 
           <Route path="/series" element={<Netflixseries/>}></Route> 
           <Route path="/watch/:name" element={<Netflixwatch/>}></Route>
           <Route path="/usestate" element={<Usestatedemo1/>}></Route>
           <Route path="/props" element={<Props/>}></Route>
           <Route path="/inputdemo" element={<Inputdemo1/>}></Route>
           <Route path="/hookform" element={<Hookform/>}></Route>
           <Route path="/*" element={<Netflixeroorpage/>}></Route>
      </Routes>
  
     {/* <Routes>
       <Route path="/" element={<Team/>}></Route>
       <Route path="/teamdetail/:name/:des" element={<Teamdetails/>}></Route>
       <Route path="/*" element={<Teamerror/>}></Route>
       
     </Routes> */}
       
    </div>
  );
}

export default App;
