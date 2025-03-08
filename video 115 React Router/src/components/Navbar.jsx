import React from 'react'
import { NavLink } from 'react-router-dom' // React Router se NavLink import kiya gaya hai

const Navbar = () => {
  return (
    <div>
      <nav>
        {/* NavLink ek special component hai jo routing ke liye use hota hai */}
        {/* className mein ek function pass kiya gaya hai jo active link ko highlight karta hai */}
        <NavLink className={(e) => {return e.isActive?'red':''}} to='/'><li>Home</li></NavLink>
        <NavLink className={(e) => {return e.isActive?'red':''}} to='/About'><li>About</li></NavLink>
        <NavLink className={(e) => {return e.isActive?'red':''}} to='/Login'><li>Login</li></NavLink>

        {/* Normal anchor tags ka use nahi kiya gaya kyunki wo page ko reload kar dete hain */}
        {/* <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/login"><li>Login</li></a> */}
      </nav>
    </div>
  )
}

export default Navbar