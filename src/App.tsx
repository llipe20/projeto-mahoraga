import React from 'react'
import './App.css'
import { Routers } from './router/index'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col justify-between lg:justify-center items-center w-screen min-h-screen font-Inter">
        <BrowserRouter>
            <NavBar />
            <Routers />
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
