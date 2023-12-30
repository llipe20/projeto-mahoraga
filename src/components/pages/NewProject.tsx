import React from 'react'
import Input from '../Input'
import Button from '../Button'

const NewProject: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4 h-auto lg:h-screen w-full text-black p-5">
             <h1 className="flex flex-col lg:flex row justify-center items-center gap-1 text-2xl lg:text-4xl">
                New Project
            </h1>
            <h2 className="text-center text-lg lg:text-xl">
                Create your project and then add tasks 
            </h2>

            <form className="flex flex-col justify-center items-center gap-5 p-2 mt-5 w-full lg:w-1/2 h-auto" action="POST">
                <Input
                    isTextarea={false}
                    id='input-title'
                    name='Project name:'
                    type='text'
                    place='Insira o nome do projeto'
                    classes='h-10 lg:h-12'
                />
                <Input
                    isTextarea={false}
                    id='input-sub'
                    name='Sub-title:'
                    type='text'
                    place='Insira um sub-título'
                    classes='h-10 lg:h-12'
                />
                <Input
                    isTextarea={true}
                    id='input-overview'
                    name='Overview:'
                    type='textarea'
                    place='Explique sobre o projeto'
                    rows={4}
                    classes='p-2'
                />
                <Button classes='bg-black text-white w-28'>
                    Create
                </Button>
            </form>
        </div>
    )
}

export default NewProject