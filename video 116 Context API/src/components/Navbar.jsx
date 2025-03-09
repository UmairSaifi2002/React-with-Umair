import React, { useContext } from 'react'
import { counterContext } from '../Context/ContextApi'

// Navbar naam ka functional component define kiya gaya hai
const Navbar = () => {
  // useContext hook ka use karke counterContext se `count` aur `setCount` ko access kiya gaya hai
  const { count, setCount } = useContext(counterContext);

  return (
    // Fragment (<>) ka use kiya gaya hai taaki multiple elements ko wrap kiya ja sake
    <>
      <br /> {/* Line break for spacing */}
      
      {/* Ek div hai jo "This is a Navbar" aur current `count` value display karega */}
      <div>This is a Navbar {count}</div>
      
      {/* Ek button hai jo `count` ki value ko 3 se increase karega */}
      <button onClick={() => setCount(count => count + 3)}>Add 3</button>
      
      {/* Ek button hai jo `count` ki value ko 3 se decrease karega */}
      <button onClick={() => setCount(count => count - 3)}>Minus 3</button>
      
      <br /> {/* Line break for spacing */}
    </>
  );
};

export default Navbar