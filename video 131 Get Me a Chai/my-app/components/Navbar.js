'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    const { data } = useSession()
    if (data) {
        return (
            <>
                Signed in as {data.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
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
                <div>
                    <Link href={"/login"}>
                        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LogIn</button>
                    </Link>
                </div>
            </nav >
        </>
    )
}

export default Navbar