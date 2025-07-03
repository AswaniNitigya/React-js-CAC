import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count,setCount]=useState(0) // default value kept "0" Throught passing inside useState

  function Add(){
    setCount((prevCounter)=>{return prevCounter+1})
    setCount((prevCounter)=>{return prevCounter+1})
    setCount((prevCounter)=>{return prevCounter+1})
    setCount((prevCounter)=>{return prevCounter+1})
    setCount((prevCounter)=>{return prevCounter+1})
    console.log(count);
  }
   function Remove(){
    setCount((prevCounter)=>{return prevCounter-1})
    console.log(count);
  }

  return (
    <>
        <h1>Basic Counter </h1>
        <h2>value : {count}</h2>

        <button id="add" onClick={Add} >Add</button>
        <button id="remove" onClick={Remove}>Remove</button>
    </>
  )
}

export default App
