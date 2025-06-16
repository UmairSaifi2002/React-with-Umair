'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [showdropdown, setShowdropdown] = useState(false)
    const toggleDropdown = () => {
        setShowdropdown(!showdropdown)
    }
    const { data } = useSession()
    // if (data) {
    //     return (
    //         <>
    //             Signed in as {data.user.email} <br />
    //             <button onClick={() => signOut()}>Sign out</button>
    //         </>
    //     )
    // }
    return (
        <>
            <nav style={{ backgroundColor: 'oklch(0.18 0.07 264.85)' }} className='text-white p-4 flex justify-between items-center'>
                <div className='logo font-bold text-xl flex items-center gap-2'>
                    <img src="\tea.gif" alt="tea" width={44} />
                    <span>GetMeaChai</span>
                </div>

                {/* <ul className='gap-4'>
                <li className='inline-block mr-4 cursor-pointer'>
                    Home
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    About
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    Projects
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    Sign Up
                </li>
                <li className='inline-block mr-4 cursor-pointer'>
                    Login
                </li>
            </ul> */}
                <div className="relative">
                    {data && <>
                        <button
                            onClick={toggleDropdown}
                            className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                            type="button"
                        >
                            Dropdown
                            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        {/* <!-- Dropdown menu --> */}
                        {showdropdown && (
                            <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44">
                                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDelayButton">
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Earnings</a>
                                    </li>
                                    <li>
                                        <button onClick={() => signOut()} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sign out</button>
                                    </li>
                                </ul>
                            </div>
                        )}
    
                    </>}
                    {data && <Link href={'/dashboard'}>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Dashboard</button>
                    </Link>}
                    {data && <button onClick={() => signOut()} type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sign Out</button>}
                    {!data &&
                        <Link href={"/login"}>
                            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogIn</button>
                        </Link>}
                </div>
            </nav >
        </>
    )
}

export default Navbar