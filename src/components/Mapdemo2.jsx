import React from 'react'

var touriests = [
    {name:"forest",location:"mumbai",Image:"https://images.unsplash.com/photo-1511497584788-876760111969?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9yZXN0fGVufDB8fDB8fHww"},
    {name:"Hill station",location:"mumbai",Image:"https://images.unsplash.com/photo-1652501834567-937de29c4533?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhpbGwlMjBzdGF0aW9ufGVufDB8fDB8fHww"},
    {name:"Matheran",location:"mumbai",Image:"https://images.unsplash.com/photo-1660142388885-75b1dde23b44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1hdGhlcmFufGVufDB8fDB8fHww"},
    {name:"Saputara",location:"gujarat",Image:"https://images.unsplash.com/photo-1701154773708-066ef64c3f73?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FwdXRhcmF8ZW58MHx8MHx8fDA%3D"},
    {name:"Jaipur",location:"rajasthan",Image:"https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFpcHVyfGVufDB8fDB8fHww"},
    {name:"DisneyLand",location:"california",Image:"https://images.unsplash.com/photo-1605443791607-80a259dd3c3c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGlzbmV5TGFuZHxlbnwwfHwwfHx8MA%3D%3D"},
    {name:"mathura",location:"uttar pradesh",Image:"https://images.unsplash.com/photo-1616787671779-eed71117a65e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWF0aHVyYXxlbnwwfHwwfHx8MA%3D%3D"},
    
  ]
function Mapdemo2() {
  return (
    <div>
       <h1>Task</h1>
     <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Location</th>
                <th>Image</th>
            </tr>
        </thead>
        <tbody>
            {
                touriests.map((t)=>{
                    return <tr>
                        <td>{t.name}</td>
                        <td style={{color:t.location==="mumbai" &&  'purple'}}>{t.location}</td>
                        <td> <img src={t.Image}  alt="some issue are there" style={{height:"80px",width:"150px"}} /> </td>
                    </tr>

                })
            }
        </tbody>

     </table>
    </div>
  )
}

export default Mapdemo2
