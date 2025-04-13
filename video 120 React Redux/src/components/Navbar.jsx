import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function Navbar() {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            This is Navbar {count} 
        </div>
    )
}

export default Navbar
