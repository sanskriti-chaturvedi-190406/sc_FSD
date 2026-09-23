import React, { useState } from "react";

function ChangeEntries() {

    const [myName, setmyName] = useState("SC");
    const [myCollege, setmyCollege] = useState("Abesec");

        
    function changeName(){
        setmyName("SP");
       
    }

    function changeCollege(){
        setmyCollege("Akg ec");
    }

    function changetoinit(){
        setmyName("SC");
        setmyCollege("Abesec");
    }

    return (
    <div>
        <h3>Name: {myName}</h3> 
        <h3>College: {myCollege}</h3>
        <button onClick={changeName}>Change Name</button>
        &nbsp; 
        <button onClick={changeCollege}>Change College</button>
        &nbsp; 
        <button onClick={changetoinit}>Initially</button>
    </div>
  )
}

export default ChangeEntries