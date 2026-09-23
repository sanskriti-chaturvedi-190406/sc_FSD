import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import ICard from './components/ICard'
// import IcardGallery from './components/IcardGallery'
//import MyState from './components/MyState'
//import ChangeEntries from './components/ChangeEntries'
import ImageManipulation from './components/ImageManipulation'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div style={{ border:"2px solid red", width:"300px", height:"100%"}}>
    //   <h2 style ={{color:"red"}}>ABES Engineering College</h2>
    //   <ICard/>
    //   <img src="https://media.istockphoto.com/id/2171382633/vector/user-profile-icon-anonymous-person-symbol-blank-avatar-graphic-vector-illustration.jpg?s=612x612&w=0&k=20&c=ZwOF6NfOR0zhYC44xOX06ryIPAUhDvAajrPsaZ6v1-w=" style={{width:"100px", height:"100px"}}></img>
    //   <p><b>Roll:</b> 986</p>
    //   <p><b>Name:</b> SC</p>
    //   <p><b>Branch:</b> CSE</p>
    //   <p><b>Section:</b> CSE-24</p>
    //   <p><b>Skills:</b> eh</p>
    // </div>
    // <div>
    //   <IcardGallery/>
    // </div>
    <div>
      {/* <MyState/> */}
      <ImageManipulation/>
    </div>
  )
}

export default App
