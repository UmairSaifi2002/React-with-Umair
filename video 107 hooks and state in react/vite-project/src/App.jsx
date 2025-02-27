import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    // hooks in react give you different powers to perform different task with ease
    // so in useState hook

    // useState is a hook that lets you add React state to function components. 
    // It returns a pair: the current state value and a function that lets you update it.
    <>
      <div>
        The count is {count}
      </div>
      <button onClick={() => {setCount(count + 1)}} >Update Count</button>
      <hr />

      {/* see how useState is used for text input */}

      <div>
        The input is {text}
      </div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />

      {/* see how to handle Objects*/}
      <hr />
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <br />
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Submit</button>
      <div>
        The form name is {form.name}
      </div>
      <div>
        The form email is {form.email}
      </div>

    </>
  )
}

export default App
