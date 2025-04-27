import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from '../redux/counter/counterSlice'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>

            <h1>NavBar count : {count}</h1>
        </div>
    )
}

export default Navbar