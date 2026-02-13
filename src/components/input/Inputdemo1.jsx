import React, { useState } from "react";

function Inputdemo1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [city,setcity]=useState("");

  const data = [
    {
      id:1,
      name: "India",
      cities: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    },
    {
      id:2,
      name: "USA",
      cities: ["New York", "Los Angeles", "Chicago", "Houston"],
    },
    {
      id:3,
      name: "UK",
      cities: ["London", "Manchester", "Birmingham", "Liverpool"],
    },
    {
      id:4,
      name: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],

    }
  ]
  

  const namehandler = (event) => {
    setName(event.target.value);
  };

  const GenderHandler = (evenr) => {
    setGender(evenr.target.value);
  };

  const CountryHandler = (event) => {
    setCountry(event.target.value);
  };

  const CityHandler = (event) => {
    setcity(event.target.value);
  }

  return (
    <div>
      <h1>Input Demo 1</h1>
      <div>
        <label>Enter Name</label>
        <input  type="text"onChange={(event) => {namehandler(event);}}/>
        {name}
      </div>

      <div>
        <label>Age</label>
        <input type="text" onChange={(event) => { setAge(event.target.value); }}/>
        {age}
      </div>

      <div>
        <label>Gender:</label>
        <input type="radio" value="male" name="gender" onChange={(event) => {GenderHandler(event);} } />Male
        
        <input type="radio" value="female" name="gender" onChange={(event) => {GenderHandler(event); } } /> Female &nbsp;&nbsp;&nbsp;
        {gender}
      </div>

      <div>
        <label>Country</label>
        <select onChange={(event) => { CountryHandler(event)}}>
          <option value="">Select Country</option>
          {
            data.map((c)=>{
              return <option key={c.id} value={c.name}>{c.name}</option>;
            })
          }
        </select>
        {country}
      </div>

      <div>
        <label>City</label>
        <select onChange={(event)=>CityHandler(event)}>
          {
            data.map((c)=>{
              if(c.name == country){
                return c.cities.map((city,index)=>{
                  return <option key={index} value={city}>{city}</option>
                })
              }
            })
          }
        </select>
        {city}
      </div>
    </div>
  );
}

export default Inputdemo1;
