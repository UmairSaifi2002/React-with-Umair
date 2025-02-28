import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)
  // const a = 0

  // useEffect(() => {
  //   // console.log(`${count} times re-rendering`);   
  //   a = a+1
  //   a ki value re rendreing ki wajah se a ki value increase nhi ho paygi bina useRef use kare
  //   console.log(`re-rendering and the value of a is ${a}`);  
  //   // bina useRef use kare hame console m a ki value 0 hi print hot hui dikhegi  
  // }, [count])

  // useRef is a React hook that allows you to persist values across renders without triggering re-renders. 
  // It returns an object with a single property, current, which can hold any mutable value.
  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1
    // console.log(`${count} times re-rendering`);    
    console.log(`re-rendering and the value of a is ${a.current}`);
  }, [count])

  return (
    <>
      <div>
        <Timer/>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
