import React, { ReactNode } from "react"
import classNames from "classnames"
import Input from "./Input"
import Button from "./Button"
import { FaRegEdit } from "react-icons/fa"
import { IoMdAdd } from "react-icons/io"
import { SlArrowDown } from "react-icons/sl"
import { SlArrowUp } from "react-icons/sl"


interface CardProps {
    children?: ReactNode,
    classes?: string,
    title?: string,
    sub?: string,
    overview : string,
    username : string,
    icon: string
    status : string
    prazo : string
}

const Card: React.FC<CardProps> = (CardProps) => {

    return (
        <>
            <section className="flex flex-col justify-center items-center gap-3.5 w-full shadow bg-gray-200 p-4">
                {/* Bloco 1: Colaborador e botão de editar */}
                <div className="flex justify-between items-center w-full h-auto p-2 pb-4 border-b border-black">
                    <div className="flex justify-center items-center gap-2.5">
                        <img 
                            src={ CardProps.icon } 
                            alt="img-user" 
                            className="rounded-full w-10 lg:w-14" 
                        />
                        <span className="text-base lg:text-lg">
                            { CardProps.username }
                        </span>
                    </div>
                    <Button type='button'>
                        <FaRegEdit />
                    </Button>
                </div>
                {/* Bloco 2: Condicionais para title e sub-title */}
                {  
                    CardProps.title !== undefined ? (
                        <h1 className="text-2xl lg:text-4xl pt-2">
                           { CardProps.title }
                        </h1>
                    ) : ''
                }
                {
                    CardProps.sub !== undefined ? (
                        <h2 className="text-center text-lg lg:text-xl">
                            {CardProps.sub} 
                        </h2>
                    ) : ''
                }
                <p className="text-center text-base lg:text-lg lg:w-3/5">
                    { CardProps.overview }
                </p>

                { /* Bloco 3: Botão para novas tarefas */}
                <Button type="button" classes="w-full h-20 lg:40 bg-white hover:scale-95 mt-2 shadow">
                    <IoMdAdd />
                    <span className="text-center text-base lg:text-lg">
                        Add task
                    </span>
                </Button>

                {/* Bloco 4: Prazo e status da task */}
                <div className="flex justify-between items-center p-2 w-full h-auto">
                    <span className="text-center text-base lg:text-lg">
                        { CardProps.prazo }
                    </span>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-white">
                            {/* botão redondo de status */}
                        </span>
                        <span className="text-center text-base lg:text-lg">
                            { CardProps.status }
                        </span>
                    </div>
                </div>

                {/* Bloco 5: taks */}
                <section className="flex flex-col justify-center items-center gap-3 w-full h-auto">
                    <div className="flex flex-col justify-center items-center w-full">
                        <h2 className="w-full text-start text-lg lg:text-xl p-2 border-b border-black">
                            My task
                        </h2>
                        <Button type="button" classes="w-full h-12">
                            <SlArrowDown />
                        </Button>
                    </div>
                </section>
            </section>
        </> 
    )
}

export default Card