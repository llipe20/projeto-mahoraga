import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import the componenets
import Home from '../components/pages/Home'
import NewProject from '../components/pages/NewProject'
import Profile from '../components/pages/Profile'
import Project from '../components/pages/Projects'

interface Router {
    id : number,
    name: string,
    path: string,
    component : React.FC
}

// Rotas 
const rotas: Router[] = [
    {
        id: 10,
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        id: 20,
        name : 'Projects',
        path : '/project',
        component : Project
    },
    {
        id: 30,
        name : 'New project',
        path : '/new',
        component : NewProject
    },
    {
        id: 40,
        name : 'Profile',
        path : '/profile',
        component : Profile
    }
]

const Routers: React.FC = () => {

    return (
        <div className="flex lg:min-h-screen w-full lg:w-4/5">
            <Routes>
                {
                    rotas.map((rota) => (
                        <Route 
                            key={rota.id}
                            path={rota.path}
                            Component={rota.component}
                        />
                    ))
                }
            </Routes>
        </div>
    )
}

export { Routers, rotas }
