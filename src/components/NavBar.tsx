import React from 'react'
import { Link } from 'react-router-dom'
import { rotas } from '../router'

interface Router {
    id : number,
    name: string,
    path: string,
    component : React.FC
}

const NavBar: React.FC = () => {

    const navs: Router[] = rotas.filter((rota) => rota.name !== 'New project')  
    return (
        <div className="flex justify-center items-center w-full h-20 lg:h-24 bg-black text-white">
            <nav className="flex justify-between items-center w-full lg:w-4/5 h-full  pl-5 pr-5 lg:p-0">
                {/* Logo */}
                <div className="flex items-center gap-2 text-lg lg:text-xl">
                    <img className="w-16 h-16" src="/roda.png" alt="logo-mahoraga"/>
                    <span className="hidden lg:flex font-gold">
                        MAHORAGA
                    </span>
                </div>
                {/* Nagation */}
                <ul className="flex justify-center items-center gap-3 lg:gap-5 w-auto lg:text-lg">
                    {
                        navs.map((nav) => (
                            <li className="h-7 hover:border-b-2 pl-2 pr-2" key={`nav-${nav.id}`}>
                                <Link to={nav.path}>
                                    { nav.name }
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}

export default NavBar