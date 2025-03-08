import './App.css'
import  Navbar  from './components/Navbar.jsx'
import  Home  from './components/Home.jsx'
import  Login  from "./components/Login.jsx";
import  About  from './components/About.jsx'
import User from './components/User.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  // Yahan hum ek router create kar rahe hain jo different paths ke hisab se different components ko render karega.
  const router = createBrowserRouter([
    {
      path: '/', // Root path, jab user homepage par jayega
      // element: <Home /> // Agar aisa likhenge to sirf Home component render hoga
      element: <> <Navbar /><Home /></> // Yahan hum Navbar aur Home dono components ko ek sath render kar rahe hain
    },
    {
      path: '/Login', // Login path, jab user login page par jayega
      // element: <Login /> // Agar aisa likhenge to sirf Login component render hoga
      element: <> <Navbar /><Login /></> // Yahan hum Navbar aur Login dono components ko ek sath render kar rahe hain
    },
    {
      path: '/About', // About path, jab user about page par jayega
      // element: <About /> // Agar aisa likhenge to sirf About component render hoga
      element: <> <Navbar /><About /></> // Yahan hum Navbar aur About dono components ko ek sath render kar rahe hain
    },
    {
      path: '/user/:username', // Dynamic path, jahan username ek dynamic parameter hai
      // element: <About /> // Agar aisa likhenge to sirf About component render hoga
      element: <> <Navbar /><User /></> // Yahan hum Navbar aur User dono components ko ek sath render kar rahe hain
    }
  ])

  return (
    <>
      <div>Hello EveryOne</div> {/* Yahan ek simple message render ho raha hai */}
      {/* <Navbar /> */} {/* Agar yahan Navbar ko render karenge to har page par Navbar dikhega, lekin humne already router mein Navbar ko include kar diya hai */}
      <RouterProvider router={router} /> {/* Yahan hum router ko provide kar rahe hain jo different paths ke hisab se components render karega */}
    </>
  )
}

export default App

/*
Kyon use karte hain element: <> <Navbar /><About /></> instead of element:<About />?
Navbar Har Page Par Dikhaney Ke Liye:

Agar hum sirf <About /> use karenge, to Navbar sirf usi page par dikhega jahan humne use manually include kiya hoga.

Lekin agar hum <Navbar /><About /> use karenge, to Navbar har us page par dikhega jahan humne use include kiya hai. Isse hume har page par Navbar ko manually add karne ki zarurat nahi padti.
*/