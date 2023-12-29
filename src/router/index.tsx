import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import os componenets
import Home from '../components/pages/Home'
import NewProject from '../components/pages/NewProject'

const Routers: React.FC = () => {
        return (
            <>
                <Routes>
                    <Route 
                        path="/"
                        Component={Home}
                    />
                </Routes>
            </>
        )
}
