import React from 'react'

const Navbar = () => {
  return (
    <>
        <nav style={{ backgroundColor: 'oklch(0.18 0.07 264.85)' }} className='text-white p-4 flex justify-between items-center'>
            <div className='logo font-bold text-xl'>GetMeaChai</div>
            <ul className='gap-4'>
                <li className='inline-block mr-4 cursor-pointer'>
                    {/* <a href="/" className='text-white hover:text-gray-300'>Home</a> */}
                    Home
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    {/* <a href="/about" className='text-white hover:text-gray-300'>About</a> */}
                    About
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    {/* <a href="/contact" className='text-white hover:text-gray-300'>Contact</a> */}
                    Projects
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    Sign Up
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    Login
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar