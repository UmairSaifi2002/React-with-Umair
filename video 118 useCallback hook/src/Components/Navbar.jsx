import React from 'react'
import { memo } from 'react';

const Navbar = ({ adjective, getAdjective }) => {
    console.log('NavBar is Rendered');
    return (
        <div>
            I am {adjective} Navbar
            <button onClick={() => {getAdjective()}}>{getAdjective()}</button>
        </div>
    )
}

export default memo(Navbar)