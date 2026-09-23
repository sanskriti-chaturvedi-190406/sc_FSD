import React from 'react'
import ICard from './ICard'

function ICardGallery() {
    const student=[{
        college:"ABES Engineering College",
         pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7Z-4BV2rAziKSe-j8k1yQLgoGSGIbmOZ1a5lI4Jqlw&s=10",
        rollNumber:"12345",
        name:"Saloni Patel",
        branch:"Computer Science And Engineering"
    },
    {
        college:"ABES Engineering College",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWT5ReAlD1i1XvOKu7u_RYXbul04T2F9LC8ROo1mRdQ&s=10",
        rollNumber:"12346",
        name:"Sachin Patel",
        branch:"Computer Science And Engineering"
    },{
        college:"ABES Engineering College",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX2Afc4Ediqtu9UwHcIapzu99V6tP1ZWA2ONxAmQReA&s=10",
        rollNumber:"12348",
        name:"Saloni",
        branch:"Computer Science And Engineering"
    },{
    college:"ABES Engineering College" ,
    pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTuRO1rCJBMYqK7a4gGlqAuI_6wWb05PYbvTbbrtCSg&s=10", 
    rollNumber:"12349", 
    name:"John Doe",
        branch:"Computer Science And Engineering" 
    }
]
  return (
    <div>
        {/* <ICard college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7Z-4BV2rAziKSe-j8k1yQLgoGSGIbmOZ1a5lI4Jqlw&s=10" rollNumber="12345" name="Saloni Patel" branch="Computer Science And Engineering"/> */}
         {/* <ICard college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWT5ReAlD1i1XvOKu7u_RYXbul04T2F9LC8ROo1mRdQ&s=10" rollNumber="12346" name="Sachin Patel" branch="Computer Science And Engineering"/>
          <ICard college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLX2Afc4Ediqtu9UwHcIapzu99V6tP1ZWA2ONxAmQReA&s=10" rollNumber="12348" name="Saloni " branch="Computer Science And Engineering"/>
           <ICard college="ABES Engineering College" pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTuRO1rCJBMYqK7a4gGlqAuI_6wWb05PYbvTbbrtCSg&s=10" rollNumber="12349" name="John Doe" branch="Computer Science And Engineering"/> */}
           { student.map((ele) => (
                <ICard data={ele} />
            ))}
    </div>
  )
}

export default ICardGallery