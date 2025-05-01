import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
                <div className='text-center'>Copywrite @ Facebook | All rights reserved</div>
                <ul className='flex gap-2 text-sm'>
                    <Link href="/" className='test-xs'>Home</Link>
                    <Link href="/about" className='test-xs'>About</Link>
                    <Link href="/contact" className='test-xs'>Contact</Link>
                </ul>
            </footer>
        </div>
    )
}

export default Footer