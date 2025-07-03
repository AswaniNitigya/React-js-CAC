import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setcounter]=useState(1) // created actually "let counter ;"  --> bs react apne ps control rakhta through this method of updation

  

function addvalue(){
 console.log("added value");
  setcounter( ++counter);
}

function removevalue(){
 console.log("removedd value");
  setcounter( --counter);
}

  return (
    <>
     <h1>Learning React</h1>
     <h2>Counter value : {counter} </h2>
     <button onClick={addvalue}>Add value</button>
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
