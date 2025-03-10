import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Exercise from './Components/exercise'

function App() {
  const [count, setCount] = useState(0)
  const [adjective, setAdjective] = useState('good')

  // const getAdjective = () => {
  //   return "another Adjective"
  // }

  const getAdjective = useCallback(() => {
    return 'Another'+count
  },[])

  // const getAdjective = () => {
  //   return 'Another' + count
  // }

  const forExercise = useCallback(() => {
    return 'Another Exercise'+count
  },[])

  return (
    <>
      <Exercise val={'exercise'} getVal={forExercise} />
      <Navbar adjective={'good'} getAdjective={getAdjective}/>
      <div>
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
