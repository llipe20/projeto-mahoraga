import '../../assets/types'
import Card from '../Card'
import icons from '../../db/icons'
import Input from '../Input'
import Button from '../Button'
import ModalForm from '../ModalForrm'

const Project: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 lg:gap-8 min-h-96 lg:min-h-screen w-full text-black p-5 lg:pb-8">
                <section className="flex flex-col justify-center items-center gap-4 w-full lg:w-4/5">
                    <h2 className="text-xl lg:text-2xl lg:mt-2">
                        Trazer projeto
                    </h2>
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
                <section className="flex flex-col lg:grid grid-cols justify-center items-center gap-5 min-h-96 w-full text-black">
                    <Card 
                        overview='The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.'
                        sub='Create your project and then add tasks'
                        prazo='Até 15 de jan'
                        status='Em andamento'
                        title='Projetc name' 
                        isTaks={true}
                        classes={{
                            
                        }}
                        user={{
                            name:'Felipe',
                            icon:'https://via.placeholder.com/50' 
                        }}
                    >
                        <Card 
                                overview='The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.'
                                prazo='Até 15 de jan'
                                status='Pendente'
                                sub='Projetc name'
                                isTaks={false}
                                classes={{box :"border border-black scale-95"}}
                                user={{
                                    icon : 'https://via.placeholder.com/50',
                                    name : 'Felipe'
                                }}
                            ></Card>  
                            <Card 
                                overview='The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.'
                                prazo='Até 15 de jan'
                                status='Concluido'
                                sub='Projetc name'
                                isTaks={false}
                                classes={{
                                    box :"border border-black scale-95",
                                }}
                                user={{
                                    icon : 'https://via.placeholder.com/50',
                                    name : 'Felipe'
                                }}
                            ></Card>  
                    </Card>
                </section>
            </div>
            <ModalForm id='container-edit' user={true} />
            <ModalForm id='container-create' user={true} />
        </>
    )
}

export default Project