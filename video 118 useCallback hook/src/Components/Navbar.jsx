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
// we are using memo here 
// memo renders the component when props changes
// when props not change then components donot renders
