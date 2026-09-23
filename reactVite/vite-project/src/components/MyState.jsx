import React, { useState } from "react";
function MyState(){
    const [counter,setCounter]=useState(10);

    function decrement(){
        setCounter(counter - 1);
    }
    function increment(){
        setCounter(counter + 5);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </div>
    )
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    function clear(){
        setRed(0);
        setGreen(0);
        setBlue(0);
    }

    function colorRed(){
        setRed(255);
        setGreen(0);
        setBlue(0);
    }

    function colorGreen(){
        setRed(0);
        setGreen(255);
        setBlue(0);
    }

    function colorBlue(){
        setRed(0);
        setGreen(0);
        setBlue(255);
    }


    return (
        <div>
            <h2>RGB Color Picker</h2>
            <br></br>
            <div style={{backgroundColor: `rgb(${red},${green},${blue})`, height: '200px', width: '200px', margin: '0 auto'}}></div>
            <div>
                <br></br>
                <button onClick={colorRed}>Red</button>
                <button onClick={colorGreen}>Green</button>
                <button onClick={colorBlue}>Blue</button>
                <button onClick={clear}>Reset </button>
            </div>
        </div>
    )
}

export default MyState;