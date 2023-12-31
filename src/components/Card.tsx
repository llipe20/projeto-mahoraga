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
    classes : {
        box ?: string,
        title ?: string,
        button ?: string,
    },
    user ?: {
        name : string,
        icon : string
    }
    title?: string,
    sub?: string,
    overview : string,
    status : "Pendente" | "Em andamento" | "Concluido"
    prazo : string,
    isTaks: boolean
}

const Card: React.FC<CardProps> = (CardProps) => {

    const CardClasses = classNames(
        "flex flex-col justify-center items-center gap-3.5 w-full p-4 bg-gray-200",
        {
            [CardProps.classes.box!] : CardProps.classes.box
        }
    )

    const StatusClasses = classNames(
        "w-4 h-4 rounded-full",
        {
            "bg-red-500" : CardProps.status === "Pendente",
            "bg-yellow-500" : CardProps.status === "Em andamento",
            "bg-green-500" : CardProps.status === "Concluido" 
        }
    )

    return (
        <>
            <section className={CardClasses}>
                {/* Bloco 1: Colaborador e botão de editar */}
                {
                    CardProps.user !== undefined && (
                        <div className="flex justify-between items-center w-full h-auto p-2 pb-4 border-b border-black">
                            <div className="flex justify-center items-center gap-2.5">
                                <img 
                                    src={ CardProps.user.icon } 
                                    alt="img-user" 
                                    className="rounded-full w-10 lg:w-14" 
                                />
                                <span className="text-base lg:text-lg">
                                    { CardProps.user.name }
                                </span>
                            </div>
                            <Button type='button'>
                                <FaRegEdit />
                            </Button>
                        </div>
                    )
                }
                {/* Bloco 2: Condicionais para title e sub-title */}
                {  
                    CardProps.title !== undefined && (
                        <h1 className="text-2xl lg:text-4xl lg:pt-2">
                           { CardProps.title }
                        </h1>
                    )
                }
                {
                    CardProps.sub !== undefined && (
                        <h2 className="text-center text-lg lg:text-xl">
                            {CardProps.sub} 
                        </h2>
                    ) 
                }
                <p className="text-center text-base lg:text-lg w-full lg:pb-2">
                    { CardProps.overview }
                </p>

                { /* Bloco 3: Botão para novas tarefas */}
                {
                    CardProps.isTaks && (
                        <Button type="button" classes="w-full h-16 hover:scale-95 bg-white">
                            <IoMdAdd />
                            <span className="text-center text-base lg:text-lg">
                                Add task
                            </span>
                        </Button>
                    )
                }
                {/* Bloco 4: taks */}
                {
                    CardProps.isTaks && (
                        <section className="flex flex-col justify-center items-center w-full h-auto gap-5 -mt-1 bg-white scale-95">
                            <Button type="button" classes="w-full h-16 hover:scale-95 bg-white">
                                <SlArrowDown />
                                <span className="text-center text-base lg:text-lg">
                                    My task
                                </span>
                            </Button>
                            {/* Subs taks */}
                            <div className="flex flex-col lg:grid lg:grid-cols-2 justify-center items-center gap-3 lg:gap-0 w-full h-auto p-4 lg:pb-6 pb-5 pt-0">
                                { CardProps.children }
                            </div>
                        </section>
                    )
                }
                {/* Bloco 5: Prazo e status da task */}
                <div className="flex justify-between items-center p-2 w-full h-auto">
                    <span className="text-center text-base lg:text-lg">
                        { CardProps.prazo }
                    </span>
                    <div className="flex justify-center items-center gap-2">
                        <span className={StatusClasses}>
                            {/* botão redondo de status */}
                        </span>
                        <span className="text-center text-base lg:text-lg">
                            { CardProps.status }
                        </span>
                    </div>
                </div>
            </section>
        </> 
    )
}

export default Card