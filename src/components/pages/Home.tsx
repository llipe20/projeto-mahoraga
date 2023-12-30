import React from 'react'
import Button from '../Button'

const Home: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-auto lg:h-screen w-full text-black p-5">
            <h1 className="flex flex-col lg:flex row justify-center items-center gap-1 text-2xl lg:text-4xl">
                Bem vindo ao projeto
                <span className="font-gold p-2">
                    MAHORAGA
                </span>
            </h1>
            <h2 className="text-center text-lg lg:text-xl">
                Comece a gerenciar seus planos de projetos agora mesmo! 
            </h2>
            <p className="text-center text-base lg:text-lg lg:w-3/5">
                A aplicação tem como objetivo facilitar a organização e a estruturização de planejamento de projetos em grupo ou tarefas simples do contidiano. 
            </p>
            <Button isDark>
                Create project
            </Button>
            <img src="/plano.gif" alt="gif" className="w-40 lg:w-80" />
        </div>
    )
}

export default Home