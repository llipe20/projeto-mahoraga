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
        task ?: string
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

    // Classes paara personalizar
    const TitleClasses = classNames(
        "text-2xl lg:text-4xl lg:pt-2",
        {
            [CardProps.classes.title!] : CardProps.classes.title 
        }
    )

    const ButtonClasses = classNames(
        "w-full h-16 lg:36 hover:scale-95 mt-2 shadow bg-white",
        {
            [CardProps.classes.button!] : CardProps.classes.button 
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

    const BoxTaks = classNames(
        "flex flex-col justify-center items-center gap-4 w-full h-auto",
        {
            [CardProps.classes.task!] : CardProps.classes.task
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
                        <h1 className={TitleClasses}>
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
                <p className="text-center text-base lg:text-lg w-full lg:w-4/5">
                    { CardProps.overview }
                </p>

                { /* Bloco 3: Botão para novas tarefas */}
                {
                    CardProps.isTaks && (
                        <Button type="button" classes={ButtonClasses}>
                            <IoMdAdd />
                            <span className="text-center text-base lg:text-lg">
                                Add task
                            </span>
                        </Button>
                    )
                }
                {/* Bloco 4: Prazo e status da task */}
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

                {/* Bloco 5: taks */}
                {
                    CardProps.isTaks && (
                        <section className="flex flex-col justify-center items-center w-full h-auto">
                            <div className="flex flex-col justify-center items-center w-full">
                                <h2 className="w-full text-start text-lg lg:text-xl p-2 border-b border-black">
                                    My task
                                </h2>
                                <Button type="button" classes="w-full h-12">
                                    <SlArrowDown />
                                </Button>
                            </div>
                            {/* Subs taks */}
                            <div className={BoxTaks}>
                                { CardProps.children }
                            </div>
                        </section>
                    )
                }
            </section>
        </> 
    )
}

export default Card