import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='bg-slate-800 text-white'>
        <div className="mycontainer flex justify-between items-center px-4 py-5">
          <div className="logo font-bold text-white text-2xl">
            <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
          </div>
          <ul>
            <li className='flex gap-4'> 
              <a className='hover:font-bold' href="/">Home</a>
              <a className='hover:font-bold' href="#">About</a>
              <a className='hover:font-bold' href="#">Contact</a>
            </li>
          </ul>
          <button className='flex items-center gap-2 bg-green-800 rounded-full px-4 py-2  border-green-900 cursor-pointer hover:bg-green-700 hover:font-bold'>
            <img className='invert w-[30px] cursor-pointer' src="/icons8-github.svg" alt="github" />
            <p>GitHub</p>
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar