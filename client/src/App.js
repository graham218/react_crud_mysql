import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName]=useState("")
  const [age, setAge]=useState("")
  const [country, setCountry]=useState("")
  const [position, setPosition]=useState("")
  const [wage, setWage]=useState("")  
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event)=>{setName=event.target.value}}/>
        <label>Age:</label>
        <input type="number" onChange={(event)=>{setName=event.target.value}}/>
        <label>Country:</label>
        <input type="text" onChange={(event)=>{setName=event.target.value}}/>
        <label>Position:</label>
        <input type="text" onChange={(event)=>{setName=event.target.value}}/>
        <label>Wage (Year):</label>
        <input type="number" onChange={(event)=>{setName=event.target.value}}/>
        <button>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
