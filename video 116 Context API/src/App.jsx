// React aur useState hook ko import kiya gaya hai
import { useState } from 'react'

// React aur Vite ke logos ko import kiya gaya hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// App.css file ko import kiya gaya hai jisme styling hai
import './App.css'

// counterContext ko import kiya gaya hai jo Context API ka use karke state manage karega
import { counterContext } from './Context/ContextApi'

// Navbar component ko import kiya gaya hai
import Navbar from './components/Navbar.jsx'

// Buttons component ko import kiya gaya hai
import Buttons from './components/Buttons'

// ComponentsOne component ko import kiya gaya hai
import ComponentsOne from './components/ComponentsOne'

// App component define kiya gaya hai
function App() {
  // useState hook ka use karke `count` state aur `setCount` function define kiya gaya hai
  // `count` ki initial value 0 hai
  const [count, setCount] = useState(0)

  return (
    // Fragment (<>) ka use kiya gaya hai taaki multiple elements ko wrap kiya ja sake
    <>
      {/* counterContext.Provider ka use kiya gaya hai taaki `count` aur `setCount` ko 
          sare child components mein share kiya ja sake */}
      <counterContext.Provider value={{count, setCount}}>
        {/* Navbar component ko render kiya gaya hai */}
        <Navbar /> <br />
        
        {/* Ek button hai jo `count` ko increase karega */}
        <button onClick={() => setCount((count) => count + 1)}>
          Add {count} {/* Button par "Add" aur current count value display hogi */}
        </button>
        
        {/* Ek button hai jo `count` ko decrease karega */}
        <button onClick={() => setCount((count) => count - 1)}>
          Sub {count} {/* Button par "Sub" aur current count value display hogi */}
        </button>
        
        <br />
        
        {/* Buttons component ko render kiya gaya hai */}
        <Buttons />
        
        {/* ComponentsOne component ko render kiya gaya hai */}
        <ComponentsOne />
      </counterContext.Provider>
    </>
  )
}

// App component ko export kiya gaya hai taaki ise dusre files mein use kiya ja sake
export default App