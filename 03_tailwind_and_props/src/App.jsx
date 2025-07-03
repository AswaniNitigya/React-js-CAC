import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  const myObj= {name: "niti", loggedIn: true}
  const myarr = ["CPP","flutter","js"]
  return (
<>

    <Card />  
    <Card title="hello"/>

    {/* by default value inside props is undefined, so you can pass props to the component like below: <Card title="Hello" /> */}

    {/* <Card passingObject={name:"nitigya"}/>      CANT pass object like this       */} 
    <Card title="final" passingObject={myObj}/> 
    <Card title="final" passingarr={myarr}/> 

    
</>

  )
}

export default App
