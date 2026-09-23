import React from 'react'

function ICard({data}) {
  
  return (
    <div style={{border:"2px solid red",backgroundColor:"black",height:"60vh",width:"30vw"}}>
      <h2>College:{data.college}</h2>
     <div>
      <img src={data.pic} alt="Profile" height={200} width={200}/>
     </div>
      <h2>Roll Number:{data.rollNumber}</h2>
      <h2>Name:{data.name}</h2>
      <h2>Branch:{data.branch}</h2>
    </div>
  )
}

export default ICard