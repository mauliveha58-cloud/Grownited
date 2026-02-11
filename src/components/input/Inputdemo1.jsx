import React, { useState } from "react";

function Inputdemo1() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");

  const india = ["Gujrat", "delhi", "Mumbai", "Chennai", "Banglore"];
  const usa = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
  const uk = ["London", "Manchester", "Birmingham", "Leeds", "Glasgow"];
  const australia = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"];

  const namehandler = (event) => {
    setName(event.target.value);
  };

  const GenderHandler = (evenr) => {
    setGender(evenr.target.value);
  };

  const CountryHandler = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>Input Demo 1</h1>
      <div>
        <label>Enter Name</label>
        <input
          type="text"
          onChange={(event) => {
            namehandler(event);
          }}
        />
        {name}
      </div>

      <div>
        <label>Age</label>
        <input
          type="text"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        {age}
      </div>

      <div>
        <label>Gender:</label>
        <input
          type="radio"
          value="male"
          name="gender"
          onChange={(event) => {
            GenderHandler(event);
          }}
        />
        Male
        <input
          type="radio"
          value="female"
          name="gender"
          onChange={(event) => {
            GenderHandler(event);
          }}
        />{" "}
        Female &nbsp;&nbsp;&nbsp;{gender}
      </div>

      <div>
        <label>Country</label>
        <select
          onChange={(event) => {
            CountryHandler(event);
          }}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <div>
        <label>City</label>
        <select>
          {country == "India" &&
            india.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          ,
          {country == "USA" &&
            usa.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          ,
          {country == "UK" &&
            uk.map((c) => {
              return <option value={c}>{c}</option>;
            })}
          {country == "Australia" &&
            australia.map((c) => {
              return <option value={c}>{c}</option>;
            })}
        </select>
      </div>
    </div>
  );
}

export default Inputdemo1;
