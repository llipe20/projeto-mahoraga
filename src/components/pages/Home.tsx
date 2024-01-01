import Button from '../Button'
import { Link } from 'react-router-dom'
import { rotas } from '../../router/index'
import { Router } from '../../assets/types'

const Home: React.FC = () => {

    const create: Router | undefined = rotas.find((rota) => rota.id == 30)

    return (
        <div className="flex flex-col justify-center items-center gap-4 h-auto lg:h-screen w-full text-black p-5">
            <h1 className="flex flex-col lg:flex-row justify-center items-center gap-1 text-2xl lg:text-4xl">
                Welcome to the
                <span className="font-gold p-2">
                    MAHORAGA
                </span>
                project
            </h1>
            <h2 className="text-center text-lg lg:text-xl">
                Start managing your project plans now! 
            </h2>
            <p className="text-center text-base lg:text-lg lg:w-3/5">
                The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.
            </p>
            {/* Router for create project */}
            <Link to={create?.path || ''}>
                <Button type='button' classes='bg-black text-white'>
                    {create?.name}
                </Button>
            </Link>
            <img src="/plano.gif" alt="gif" className="w-40 lg:w-80" />
        </div>
    )
}

export default Home