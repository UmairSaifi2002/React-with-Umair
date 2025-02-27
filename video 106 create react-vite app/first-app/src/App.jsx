 import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <div className="umair">
        <main>
          <div>
            This is a Main content of the Website
          </div>
          <div className="card">
            <Card tittle = "card 1"/>
            <Card tittle = "card 2"/>
            <Card tittle = "card 3"/>
            <Card tittle = "card 4"/>
          </div>
        </main>
      </div>
      <Footer/>
    </>
  )
}

export default App
