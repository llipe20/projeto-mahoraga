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
             {/* Form the new project */}
            <form className="flex flex-col justify-center items-center gap-5 p-2 mt-5 w-full lg:w-1/2 h-auto" action="POST">
                 {/* Input Project name */}
                <Input
                    isTextarea={false}
                    id='input-title'
                    name='input-title'
                    label='Project name:'
                    type='text'
                    place='Insira o nome do projeto'
                    classes='w-full h-10 lg:h-12'
                />
                 {/* Input Sub-title */}
                <Input
                    isTextarea={false}
                    id='input-sub'
                    name='input-sub'
                    label='Sub-title:'
                    type='text'
                    place='Insira um sub-título'
                    classes='w-full h-10 lg:h-12'
                />
                 {/* Input Overview */}
                <Input
                    isTextarea={true}
                    id='input-overview'
                    name='input-overview'
                    label='Overview:'
                    type='textarea'
                    place='Explique sobre o projeto'
                    rows={4}
                    classes='w-full p-2'
                />
                 {/* Submit */}
                <Button type='submit' classes='bg-black text-white w-28'>
                    Create
                </Button>
            </form>
        </div>
    )
}

export default NewProject