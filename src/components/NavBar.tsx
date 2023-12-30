import React from 'react'
import { Link } from 'react-router-dom'
import { rotas } from '../router/index'
import '../App.css'

const NavBar: React.FC = () => {
    return (
        <div className="flex justify-center items-center w-full h-20 lg:h-24 bg-black text-white">
            <nav className="flex justify-between items-center w-full lg:w-4/5 h-full  pl-5 pr-5 lg:p-0">
                {/* Logo */}
                <div className="flex items-center gap-2 text-lg">
                    <img className="w-10 h-10" src="/logo.png" alt="logo-mahoraga"/>
                    <span>
                        Mahoraga
                    </span>
                </div>
                {/* Nagation */}
                <ul className="flex justify-center items-center gap-3 w-auto lg:text-lg">
                    {
                        rotas.map((rota, index) => (
                            <li className="maho">
                                <Link to={rota.path} key={index}>
                                    { rota.name }
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