import '../../assets/types'
import Card from '../Card'
import icons from '../../db/icons'
import Input from '../Input'
import Button from '../Button'
import ModalForm from '../ModalForrm'
import { IProject } from '../../assets/types'
import  Messeger from '../Messeger'
import { FaJava } from "react-icons/fa"


const Project: React.FC = () => {

    const projects: IProject[]  = [
        {
            id_project : 1,
            id_user : 2,
            title : 'Projetc name',
            sub_title : 'Create your project and then add tasks',
            overview : 'The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.',
            date : '20 de jan',
            status : 'Em andamento',
            people : 'Felipe',
            icon : 'https://viaplaceholder.com/50',
            task : [
                {
                    id_task : 1,
                    title : 'Task name',
                    overview : 'The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.',
                    date : '25 de jan',
                    status : 'Pendente', 
                    people : 'Felipe',
                    icon : 'https://via.placeholder.com/50'
                },
                {
                    id_task : 2,
                    title : 'Task name',
                    overview : 'The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.',
                    date : '30 de jan',
                    status : 'Concluido', 
                    people : 'Mahora',
                    icon : 'https://via.placeholder.com/50'
                }
            ]
        }
    ]
    
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 lg:gap-8 min-h-96 lg:min-h-screen w-full text-black p-5 lg:pb-8">
                <section className="flex flex-col justify-center items-center gap-4 w-full lg:w-4/5">
                    <h2 className="text-xl lg:text-2xl lg:mt-2">
                        Trazer projeto
                    </h2>
                    {/* Form for pull projects */}
                    <form className="flex flex-col lg:flex-row justfy-center items-start lg:items-end gap-3 w-full" action="POST">
                        <Input
                            id='input-id-project'
                            isTextarea={false}
                            label="Project ID :"
                            name="input-id-project"
                            type='text'
                            place='Insira ID do projeto'
                            classes='w-full h-10'
                        />
                        <Input
                            id='input-name-project'
                            isTextarea={false}
                            label="Project name:"
                            name="input-name-project"
                            type='text'
                            place='Insira o nome do projeto'
                            classes='w-full h-10'
                        />
                        <Button type="submit" classes="bg-black text-white mt-2 lg:m-0">
                            Search
                        </Button>
                    </form>
                </section>
                <h1 className="text-2xl lg:text-4xl">
                    Your projects
                </h1>
                <section className="flex flex-col lg:grid grid-cols justify-center items-center gap-6 min-h-96 w-full text-black">
                    {   // Apresentação dos projetos
                        projects.length !== 0 ? (
                            projects.map((project) => (
                                <Card 
                                    key={project.id_project}
                                    title={project.title}
                                    sub={project.sub_title}
                                    overview={project.overview}
                                    prazo={project.date}
                                    status={project.status}
                                    isTaks={true}
                                    classes={{}}
                                    user={{people: project.people, icon: project.icon}} 
                                >   
                                    {   // Apresentação das taks
                                        project.task.length !== 0 ? (
                                            project.task.map((task) => (
                                                <Card 
                                                    key={task.id_task}
                                                    sub={task.title}
                                                    overview={task.overview}
                                                    prazo={task.date}
                                                    status={task.status}
                                                    isTaks={false}
                                                    classes={{box :"border border-black scale-95"}}
                                                    user={{people : task.people, icon : task.icon}}
                                                /> 
                                            )) 
                                        ) : ( // Msg sem taks
                                            <Messeger classes="flex-col w-96 text-4xl">
                                                <span className="text-base lg:text-xl">
                                                    Sem taks :/
                                                </span>
                                            </Messeger>
                                        )
                                    }
                                </Card>
                            ))
                        ) : ( // Msg sem projetos
                            <Messeger classes="flex-col w-96 text-4xl">
                                <span className="text-lg lg:text-2xl">
                                   Sem projetos :/
                                </span>
                                <FaJava />
                            </Messeger>
                        )
                    }  
                </section>
            </div>
            <ModalForm id='container-edit' user={true} />
            <ModalForm id='container-create' user={true} />
        </>
    )
}

export default Project