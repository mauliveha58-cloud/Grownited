import React, { use } from "react";
import { useState } from "react";

function Usestatedemo1() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [User, setUser] = useState(['aaa', 'bbb', 'ccc'])

  const icrement = () => {
    setCount(count + 1);
  };
    const stoploader = () => {
    setLoading(false);
    };

    const adduser = () => {
        setUser([...User, 'ddd'])
    }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Usestate </h1>
      <h2>{count}</h2>
      <button onClick={icrement}>Increament</button>

      <h1>Usestate demo 2</h1>
      {
        loading == true && <h2>Loading...</h2>
      }
      <button onClick={stoploader}>stop</button>


      <h1>Array usestate</h1>
      {
        User.map((u)=>{
            return <li>{u}</li>
        })
      }
        <button onClick={adduser}>push</button>
    </div>
  );
}

export default Usestatedemo1;
