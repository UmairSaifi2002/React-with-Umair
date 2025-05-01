import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            {/* <h1 className='text-bold'>Navbar Component is here.</h1> */}
            <nav className='flex justify-between bg-slate-800 text-white p-4'>
                <div className='logo font-bold'>Facebook</div>
                <ul className='flex gap-6'>
                    <Link href="/"> <li>Home</li> </Link>
                    <Link href="/About"> <li>About</li> </Link>
                    <Link href="/Contact"> <li>Contact</li> </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar