import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar />
      <h3>Learn About React Redux</h3>
      <div>
        <button onClick={() => dispatch(decrement())} >-</button>
        Currently count is: {count}
        <button onClick={() => dispatch(increment())} >+</button>
      </div>
      <button onClick={() => dispatch(multiply())}>Multiply</button>
    </>
  )
}

export default App
