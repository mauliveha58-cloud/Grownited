import React from "react";

let arr = [
  "fronx",
  "creata",
  "breeza",
  "grandVitara",
  "ciaz",
  "ertiga",
  "sx4",
  "ignis",
  "baleno",
  "alto",
];

var user= [
   { id:1,name:"raj",age:32,gender:'male'},
   {id:2,name:"aaa",age:23,gender:"female"},
   {id:3,name:"bbb",age:25,gender:"male"},
];

var students =[
        {id:1,name:"amit",age:23,marks:78,city:"ahmedabad",gender:"male"},
        {id:2,name:"prathna",age:25,marks:81,city:"ahmedabad",gender:"female"},
        {id:3,name:"rekha",age:22,marks:72,city:"ahmedabad",gender:"female"},
    ];

var cities = [
    { id: 1, name: "Ahmedabad", pop: 8000000, AQI: 302 },
    { id: 2, name: "Delhi", pop: 10000000, AQI: 400 },
    { id: 3, name: "Dehradun", pop: 8000000, AQI: 150 },
  ];

  
 
function Mapdemo1() {
  return (
    <div>

      <div>
        <h1>MAP DEMO 1</h1>
        {arr.map((c) => {
          return <h3>{c}</h3>;
        })}
      </div>

      <div>
        <h1>MAP DEMO 2</h1>
        {
            user.map((u)=>{
                return <h2>{u.name}-{u.age}-{u.gender}</h2>
            })
        }
      </div>

       <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 3</h1>
        <table className='table' >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>MARKS</th>
                    <th>CITY</th>
                    <th>GENDER</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((st)=>{
                        return <tr style={{backgroundColor:st.gender =="female" && "pink" }}>
                            <td>{st.id}</td>
                            <td>{st.name}</td>
                            <td style={{color:st.age>22 ? "red": "black"}}>{st.age}</td>
                            <td style= {{backgroundColor:st.marks>80 && "lightblue"}}>{st.marks}</td>
                            <td>{st.city}</td>
                            <td >{st.gender}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>

   
   <div style={{ textAlign: "center" }}>
      <h1>MAP DEMO 4</h1>
      <table className="table table-dark">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>POPULATION</th>
                <th>AQI</th>
            </tr>
        </thead>
        <tbody>
            {
                cities.map((city)=>{
                    return <tr>
                        <td>{city.id}</td>
                        <td>{city.name}</td>
                        <td>{city.pop}</td>
                        <td>{city.AQI}</td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>



  
    


    </div>
  );
}

export default Mapdemo1;
