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

const rotas: Router[] = [
    {
        id: 10,
        name : 'Home',
        path : '/',
        component : Home
    },
    {
        id: 20,
        name : 'Project',
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

const navs: Router[] = rotas.filter((rota) => rota.name !== 'New project')

const Routers: React.FC = () => {
        return (
            <div className="flex lg:min-h-screen w-full lg:w-4/5">
                <Routes>
                    {
                        navs.map((nav) => (
                            <Route 
                                key={nav.id}
                                path={nav.path}
                                Component={nav.component}
                            />
                        ))
                    }
                </Routes>
            </div>
        )
}

export {Routers, rotas, navs}
