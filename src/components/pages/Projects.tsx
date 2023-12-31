import React from 'react'
import Card from '../Card'
import icons from '../../db/icons'

const Project: React.FC = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-5 lg:gap-8 min-h-96 lg:min-h-screen w-full text-black p-5">
                <h1 className="text-2xl lg:text-4xl">
                    Your projects
                </h1>
                <section className="flex flex-col lg:grid grid-cols justify-center items-center gap-5 min-h-96 w-full text-black">
                    <Card 
                        overview='The application aims to facilitate the organization and structuring of planning group projects or simple everyday tasks.'
                        sub='Create your project and then add tasks'
                        prazo='Até 15 de jan'
                        status='Em andamento'
                        username='Felipe'
                        icon='https://via.placeholder.com/50' 
                        title='Projetc name'
                    >
                    </Card>
                </section>
                
            </div>
        </>
    )
}

export default Project