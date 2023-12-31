import Input from '../Input'
import Button from '../Button'
import { FaRegEdit } from "react-icons/fa"
import icons from '../../db/icons'
import '../../assets/types'
import { OpenContainer } from '../../assets/functions'

const Profile: React.FC = () => {

    return (
        <div id="container-profile" className="flex flex-col justify-start items-center gap-4 min-h-screen w-full text-black p-5 lg:pt-10">
            {/* Profile user */}
            <section className="flex justify-start items-center gap-7 w-full lg:w-1/2">
                <img 
                    src="https://via.placeholder.com/130" 
                    alt="img-user" 
                    className="rounded-full w-28 lg:w-40" 
                />
                <div className="flex flex-col justify-center items-start gap-3 w-2/3">
                    <h1 className="flex flex-col lg:flex row justify-center items-center gap-1 text-2xl lg:text-4xl">
                        User name
                    </h1>
                    <h2 className="text-center text-lg lg:text-xl">
                        email
                    </h2>
                </div>
                <Button type='button' onClick={() => OpenContainer('form-profile', true)}>
                    <FaRegEdit />
                </Button>
            </section>
            {/* Form de update profile */}
            <form id="form-profile" className="flex flex-col justify-center items-center gap-5 p-2 mt-5 w-full lg:w-1/2 h-auto hidden" action="POST">
                {/* Input Username */}
                <Input
                    isTextarea={false}
                    id='input-user'
                    name='input-user'
                    label='User name:'
                    type='text'
                    classes='w-full h-10 lg:h-12'
                />
                 {/* Input E-mail */}
                <Input
                    isTextarea={false}
                    id='input-email'
                    name='input-email'
                    label='E-mail:'
                    type='text'
                    classes='w-full h-10 lg:h-12'
                />
                 {/* Input Password */}
                <Input
                    isTextarea={false}
                    id='input-senha'
                    name='input-senha'
                    label='Senha:'
                    type='text'
                    classes='w-full h-10 lg:h-12'
                />

                <h3 className="text-center font-bold w-full text-start lg:text-lg">
                    Icons:
                </h3>
                 {/* Input Icons */}
                <ul className="grid grid-cols-5 gap-y-3 w-full -mt-5 lg:mt-0">
                    {
                        icons.map((icon) => (
                            <li className="flex justify-center items-center h-28 lg:h-32">
                                <Button type='button' classes="w-auto h-auto rounded-full overflow-hidden p-0 hover:border-2 border-black">
                                    <img src={icon.url} alt={icon.name} className="w-24 lg:w-28 rounded-full" />
                                </Button>  
                            </li>
                        ))
                    }
                </ul>

                <Button type='submit' classes='bg-black text-white w-28'>
                    Update
                </Button>
            </form>
        </div>
    )
}

export default Profile