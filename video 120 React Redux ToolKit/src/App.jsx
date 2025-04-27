import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch() // you have to declare this 
  // if you want that you will use useDispatch directly in the body then it will not work properly.

  return (
    <>
      <Navbar />
      <div>
        <button onClick={() => dispatch(decrement())} >Subtract ➖</button>
        count is : {count}
        <button onClick={() => dispatch(increment())} >Addition ➕</button>
      </div>
      <div>
        <button onClick={() => dispatch(multiply())} >Multiply ✖️ 2</button>
      </div>
    </>
  )
}

export default App
