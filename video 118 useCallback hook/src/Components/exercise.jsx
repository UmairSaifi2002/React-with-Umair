import React from 'react'
import { useState, useCallback } from 'react'

const Exercise = ({val,getVal}) => {
    console.log('Exercise is rendered');
    
    const [count, setCount] = useState(0)

    const Increment = useCallback(() => {
        console.log('increment is rendering');        
        setCount((prevCount) => prevCount+1)
    },[])

    return (
        <>
            <div>exercise</div>
            <div>
                <p>Count: {count}</p>
                <button onClick={Increment}>Increment</button>
                <p>value: {val}</p>
                <button onClick={getVal}>External</button>
            </div>
        </>
    )
}

export default Exercise