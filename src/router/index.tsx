import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import the componenets
import Home from '../components/pages/Home'
import NewProject from '../components/pages/NewProject'

interface Router {
    name: string,
    path: string,
    component : React.FC
}

const rotas: Router[] = [
    {
        name : 'Inicio',
        path : '/',
        component : Home
    },
    {
        name : 'Novo Projeto',
        path : '/new',
        component : NewProject
    }
]

const Routers: React.FC = () => {
        return (
            <div className="flex min-h-screen">
                <Routes>
                    {
                        rotas.map((rota, index) => (
                            <Route 
                                key={index}
                                path={rota.path}
                                Component={rota.component}
                            />
                        ))
                    }
                </Routes>
            </div>
        )
}

export {Routers, rotas}
