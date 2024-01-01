// Arquivo para types e interface do sistema
import React, { ReactNode } from 'react'

export interface Router {
    id : number,
    name: string,
    path: string,
    component : React.FC
}

export type ButtonProps = {
    children: React.ReactNode,
    onClick?: (...args: any[]) => void,
    classes?: string,
    type : "submit" | "reset" | "button"
}

export interface CardProps {
    children?: ReactNode,
    classes : {
        box ?: string
    },
    user ?: {
        people : string,
        icon : string
    }
    title?: string,
    sub?: string,
    overview : string,
    status : "Pendente" | "Em andamento" | "Concluido"
    prazo : string,
    isTaks: boolean
}

export interface Link {
    name : string,
    ancora : string,
    icon : ReactNode
}

export type InputProps = {
    id : string,
    type : string,
    place ?: string,
    name : string,
    label: string | ReactNode
    cols ?: number,
    rows ?: number
    classes?: string,
    isTextarea : boolean,
    value?: string | ReactNode
}

export interface MessegerProps {
    children : ReactNode,
    classes : string
}

export interface FormProps {
    id : string,
    user ?: boolean
}

export interface Icons {
    id : number,
    name : string,
    url : string
} 

export interface Task {
    id_task : string | number,
    title : string,
    overview : string,
    date : string,
    status : "Pendente" | "Em andamento" | "Concluido",
    people : string,
    icon : string
}

export interface IProject {
    id_project : string | number,
    id_user : string | number,
    title : string,
    sub_title : string,
    overview : string,
    date : string,
    status : "Pendente" | "Em andamento" | "Concluido",
    people : string,
    icon : string
    task : Task[]
}