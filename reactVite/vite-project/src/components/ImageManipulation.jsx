import React, {useState} from 'react';
import cat from './cat.png';

function ImageManipulation() {

  const [cath, setcath] = useState(100);
  const [catw, setcatw] = useState(100);
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  function incw(){
    setcatw(catw+10);
  }

  function inch(){
    setcath(cath+10);
  }

  function resetdimensions(){
    setcath(100);
    setcatw(100);
  }

  function redbg(){
    setRed(255);
    setBlue(0);
    setGreen(0);
  }

  function bluebg(){
    setRed(0);
    setBlue(255);
    setGreen(0);
  }

  function greenbg(){
    setRed(0);
    setBlue(0);
    setGreen(255);
  }

  function resetbgcolor(){
    setRed(0);
    setBlue(0);
    setGreen(0);
  }

  function randombgcolor(){
    setRed(Math.floor(Math.random()*256));
    setBlue(Math.random()*255);
    setGreen(Math.random()*255);
  }

  function reset(){
    setcath(100);
    setcatw(100);
    setRed(0);
    setBlue(0);
    setGreen(0);
  }

  return (
    <div>
        <h2 style={{textAlign: 'center'}}>Image Manipulation</h2>
        <div style={{height: '200px', width: '200px', border: '2px solid red', margin: '0 auto', padding: '10px', backgroundColor: `rgb(${red}, ${blue}, ${green})`}}>
          <img src={cat} height={cath} width={catw}></img>
        </div>
        <div>
          <p>Dimensions: </p>
          <button onClick={incw}>Increase Width</button>
          &nbsp;
          <button onClick={inch}>Increase Height</button>
          &nbsp;
          <button onClick={resetdimensions}>Reset</button>
        </div>
        <div>
          <p>Background Colour: </p>
          <button onClick={redbg}>Red</button>
          &nbsp;
          <button onClick={bluebg}>Blue</button>
          &nbsp;
          <button onClick={greenbg}>Green</button>
          &nbsp;
          <button onClick={randombgcolor}>Random</button>
          &nbsp;
          <button onClick={resetbgcolor}>Reset</button>
        </div>
        <br></br>
        <button onClick={reset}>Reset All</button>
    </div>
  )
}

export default ImageManipulation