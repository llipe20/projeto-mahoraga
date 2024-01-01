import {OpenContainer} from '../assets/functions'
import { FormProps } from '../assets/types'
import classNames from 'classnames'
import Input from './Input'
import Button from './Button'
import icons from '../db/icons'
import { IoClose } from "react-icons/io5"

const ModalForm: React.FC<FormProps> = (FormProps) => {
    return (
        <>
            <section id={FormProps.id} className="flex justify-center items-center w-full h-full absolute inset-0 bg-modal hidden">
                <section className="flex flex-col justify-center items-center gap-5 w-full lg:w-1/2 h-auto bg-white p-7">
                    {/* header */}
                    <div className="flex justify-between items-center w-full border-b-2 pb-5">
                        <h2 className="text-center text-lg lg:text-2xl">
                            { FormProps.id === 'container-create' ? 'New task ': 'Edit task'}
                        </h2>
                        <Button type='button' onClick={() => OpenContainer(`${FormProps.id}`, false)}>
                            <IoClose />
                        </Button>
                    </div>
                    {/* Formulário */}
                    <form className="flex flex-col justify-center items-center gap-5 w-full h-auto" action="POST">
                        {/* Input sub */}
                        <Input
                            isTextarea={false}
                            id='input-task-sub'
                            name='input-task-sub'
                            label='Task name:'
                            type='text'
                            classes='w-full h-10 lg:h-12'
                            place='Insira o nome da tarefa'
                        />
                         {/* Input Overview */}
                        <Input
                            isTextarea={true}
                            id='input-task-overview'
                            name='input-task-overview'
                            label='Overview:'
                            type='textarea'
                            place='Explique sobre o projeto ou tarefa'
                            rows={4}
                            classes='w-full p-2'
                        />
                        <div className="flex justify-between items-center w-full">
                            {/* Input data */}
                            <Input
                                isTextarea={false}
                                id='input-task-data'
                                name='input-task-data'
                                label='Data:'
                                type='date'
                                classes='w-11/12 h-10 lg:h-12'
                            />
                            {/* Select do status da task */}
                            <div className="flex flex-col gap-2 w-full">
                                <label htmlFor="status-task" className="text-base lg:text-lg text-black font-bold">
                                    Status task:
                                </label>
                                <select id="status-task" name="status-task" className="pl-3 border-0 outline-0 shadow bg-gray-200 w-full h-10 lg:h-12">
                                    <option value="Não Iniciada">Não Iniciada</option>
                                    <option value="Em andamento">Em andamento</option>
                                    <option value="Concluida">Concluida</option>
                                    <option value="Pendente">Pendente</option>
                                </select>
                            </div>
                        </div>
                        {
                            /* Input people */
                            FormProps.user && (
                                <div className="flex flex-col justify-center items-center gap-5 w-full h-auto">
                                    <Input
                                        isTextarea={false}
                                        id='input-task-people'
                                        name='input-task-people'
                                        label='People:'
                                        type='text'
                                        classes='w-full h-10 lg:h-12'
                                        place='Insira o nome do responsável pela tarefa'
                                    />
                                    
                                    <h3 className="text-center font-bold w-full text-start lg:text-lg">
                                        Icon people:
                                    </h3>
                                    {/* Input Icons */}
                                    <ul className="grid grid-cols-5 gap-y-3 w-full -mt-5 lg:mt-0 bg-gray-200 p-4">
                                        {
                                            icons.map((icon) => (
                                                <li className="flex justify-center items-center h-24">
                                                    <Button type='button' classes="w-auto h-auto rounded-full overflow-hidden p-0">
                                                        <img src={icon.url} alt={icon.name} className="w-24 rounded-full hover:border-4 border-black" />
                                                    </Button>  
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )  
                        }
                        <Button type='submit' classes='bg-black text-white w-28'>
                            Update
                        </Button>
                    </form>
                </section>
            </section>
        </>
    )
}

export default ModalForm