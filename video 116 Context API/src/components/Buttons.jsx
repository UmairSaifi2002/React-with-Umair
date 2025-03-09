import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../Context/ContextApi'

// Buttons naam ka functional component define kiya gaya hai
const Buttons = () => {
  // useContext hook ka use karke counterContext se `count` aur `setCount` ko access kiya gaya hai
  const { count, setCount } = useContext(counterContext);

  return (
    // Fragment (<>) ka use kiya gaya hai taaki multiple elements ko wrap kiya ja sake
    <>
      <br /> {/* Line break for spacing */}
      
      {/* Ek div hai jo "This is a Buttons" aur current `count` value display karega */}
      <div>This is a Buttons {count}</div>
      
      {/* Ek button hai jo `count` ki value ko 1 se increase karega */}
      <button onClick={() => setCount(count => count + 1)}>Add 1</button>
      
      {/* Ek button hai jo `count` ki value ko 1 se decrease karega */}
      <button onClick={() => setCount(count => count - 1)}>Minus 1</button>
      
      <br /> {/* Line break for spacing */}
    </>
  );
};

export default Buttons