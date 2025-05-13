'use client'

import { useEffect } from "react"
import React from 'react'



export default function Error({ error, reset }) {
    useEffect(() => {
        console.log('Error: ', error);
    }, [error]);

    return (
        <div>
            <h1 className='text-4xl font-bold mb-4'>Blog Post Not Found</h1>
            <p className='text-lg text-gray-600'>The blog post you are looking for does not exist.</p>
            <button onClick={() => reset()} className='bg-blue-500 text-white px-4 py-2 rounded'>Try again</button>
        </div>
    )
}