import React, { useContext } from 'react'
import { counterContext } from '../Context/ContextApi'

// ComponentsOne naam ka functional component define kiya gaya hai
const ComponentsOne = () => {
  // useContext hook ka use karke counterContext se `count` aur `setCount` ko access kiya gaya hai
  const { count, setCount } = useContext(counterContext);

  return (
    // Fragment (<>) ka use kiya gaya hai taaki multiple elements ko wrap kiya ja sake
    <>
      <br /> {/* Line break for spacing */}
      
      {/* Ek div hai jo "This is a ComponentsOne" aur current `count` value display karega */}
      <div>This is a ComponentsOne {count}</div>
      
      {/* Ek button hai jo `count` ki value ko 2 se increase karega */}
      <button onClick={() => setCount(count => count + 2)}>Add 2</button>
      
      {/* Ek button hai jo `count` ki value ko 2 se decrease karega */}
      <button onClick={() => setCount(count => count - 2)}>Minus 2</button>
      
      <br /> {/* Line break for spacing */}
    </>
  );
};

export default ComponentsOne