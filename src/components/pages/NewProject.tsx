import React from 'react'
import Input from '../Input'

const NewProject: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-auto lg:h-screen w-full text-black p-5">
             <h1 className="flex flex-col lg:flex row justify-center items-center gap-1 text-2xl lg:text-4xl">
                New Project
            </h1>
            <h2 className="text-center text-lg lg:text-xl">
                Crie seu projeto para depois adicionar as tarefas 
            </h2>

            <form className="flex flex-col justify-center items-center gap-5 p-2 mt-5 w-full lg:w-1/2 h-auto" action="POST">
                <Input
                    id='input-title'
                    name='Nome do projeto:'
                    type='text'
                    place='Insira o nome do projeto'
                    special='h-10 lg:h-12'
                />
                <Input
                    id='input-sub'
                    name='Sub-título:'
                    type='text'
                    place='Insira um sub-título'
                    special='h-10 lg:h-12'
                />
                <Input
                    id='input-overview'
                    name='Descrição:'
                    type='textarea'
                    place='Explique sobre o projeto'
                    special='h-20'
                />
            </form>
        </div>
    )
}

export default NewProject