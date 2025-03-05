import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setName] = useState("Umair")
  const [form, setForm] = useState({ name: "", phone: "" })

  const handleClick = () => {
    // alert("You Clicked the Button")
    console.log("You Clicked the Button");
  }

  const handleMouseOver = () => {
    // alert("You Drag Over the Div")
    console.log('You Drag Over the Div');
  }

  const handleNameChange = (e) => {
    // setName(e.target.value) // beacuse we comment the name useState
    // console.log(name);
    setForm({ ...form, [e.target.name]: e.target.value })
    /*
      Dynamic Key Update
        [e.target.name]: e.target.value:
        e.target.name accesses the name attribute of the input element (e.g., "email", "phone").
        e.target.value gets the current input value.
        The syntax [ ] allows dynamic property names. For example, if the input has name="email", it becomes { email: "new value" }.
    */
  }

  return (
    <>
      <div className="btn">
        <button onClick={handleClick} >Click Me</button>
      </div>
      <div onMouseOver={handleMouseOver} style={{ backgroundColor: "gray", borderRadius: "20px", height: "344px", width: "244px", margin: "10px" }}>
        Drag Your Mouse
      </div>

      {/* 
      now see the special case for the input field in react
      first create input field
      now set it's value like name & create a useState if you want that user can change the value of the input
      now add the Event Listener to the input field if user change the value then it set the value using its set function using another function
      as i use here
       */}
      {/* <input type="text" value={name} onChange={handleNameChange} /> */}

      {/* Now see the another Example using input field */}
      <input type="text" name='email' value={form.email ? form.email : ''} onChange={handleNameChange} />
      <input type="text" name='phone' value={form.phone ? form.phone : ''} onChange={handleNameChange} />
    </>
  )
}

export default App
