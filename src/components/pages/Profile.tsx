import React from 'react'
import Input from '../Input'
import Button from '../Button'
import { FaRegEdit } from "react-icons/fa";

const Profile: React.FC = () => {
    // Função para trazer o form de editar perfil
    const ShowForm = (form: string, container: string) => {
        const forms = document.getElementById(`${form}`) as HTMLFormElement
        const contain = document.getElementById(`${container}`) as HTMLDivElement
        forms.classList.remove('hidden')
        contain.classList.remove('justify-start', 'lg:pt-20')
        contain.classList.add('justify-center')
    }

    return (
        <div id="container-profile" className="flex flex-col justify-start items-center gap-4 min-h-96 lg:h-screen w-full text-black p-5 lg:pt-20">
            <section className="flex justify-start items-center gap-7 w-full lg:w-1/2">
                <img 
                    src="https://via.placeholder.com/130" 
                    alt="img-user" 
                    className="rounded-full" 
                />
                <div className="flex flex-col justify-center items-start gap-3 w-2/3">
                    <h1 className="flex flex-col lg:flex row justify-center items-center gap-1 text-2xl lg:text-4xl">
                        User name
                    </h1>
                    <h2 className="text-center text-lg lg:text-xl">
                        email
                    </h2>
                </div>
                <Button onClick={() => ShowForm('form-profile', 'container-profile')}>
                    <FaRegEdit />
                </Button>
            </section>
            <form id="form-profile" className="flex flex-col justify-center items-center gap-5 p-2 mt-5 w-full lg:w-1/2 h-auto hidden" action="POST">
                <Input
                    isTextarea={false}
                    id='input-user'
                    name='User name:'
                    type='text'
                    classes='h-10 lg:h-12'
                />
                <Input
                    isTextarea={false}
                    id='input-email'
                    name='E-mail:'
                    type='text'
                    classes='h-10 lg:h-12'
                />
                <Input
                    isTextarea={false}
                    id='input-senha'
                    name='Senha:'
                    type='text'
                    classes='h-10 lg:h-12'
                />
                <Button classes='bg-black text-white w-28'>
                    Update
                </Button>
            </form>
        </div>
    )
}

export default Profile