import React from 'react'

const Footer = () => {
  return (
    <>
        <footer style={{ backgroundColor: 'oklch(0.18 0.07 264.85)' }} className='bg-blue-950 text-white p-4 h-16 flex justify-center items-center'>
            <p className=''>
                Get Me a Chai &copy; {new Date().getFullYear()} - A Portfolio Website by Umair for ShowCasing a Projects 
            </p>
        </footer>
    </>
  )
}

export default Footer