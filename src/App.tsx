import React from 'react'
import { Routers } from './router/index'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen bg-gray-200 font-Inter">
        <BrowserRouter>
            <NavBar />
            <Routers />
            <Footer />
        </BrowserRouter>
    </div>
  )
}

export default App
