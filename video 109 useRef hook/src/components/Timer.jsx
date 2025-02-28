import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {

    const [count, setCount] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1)
        }, 1000);
    }, [])


    return (
        <div>
            <p>Timer : {count}</p>
        </div>
    )
}

export default Timer