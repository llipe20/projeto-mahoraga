import React, { ReactNode } from 'react'
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {

    interface Link {
        name : string,
        ancora : string,
        icon : ReactNode
    }

    const links: Link[] = [
        {
            name : 'Linkedin',
            icon : <FaLinkedinIn />,
            ancora : 'https://www.linkedin.com/in/felipe-silva--/'
          },
          {
            name : 'Github',
            icon : <FaGithub />,
            ancora : 'https://github.com/llipe20'
          },
          {
            name : 'WhatsApp',
            icon : <FaWhatsapp />,
            ancora : 'https://wa.me/qr/O43EG6NVZ3QCE1'
          },
          {
            name : 'Instagram',
            icon : <FaInstagram />,
            ancora : 'https://instagram.com/___llpe'
          }
    ]

    return (
        <div className="flex flex-col justify-center items-center gap-2 w-full h-auto p-5 bg-black text-sm lg:text-base text-white">
            {/* Logo */}
            <div className="flex justify-center items-center gap-2 h-full w-full xl:text-2xl text-xl">
                <img className="w-16 h-16" src="/roda.png" alt="logo-mahoraga"/>
                <span className="font-gold">
                    MAHORAGA
                </span>
            </div>
            {/* List the social midia */}
            <ul className="flex flex-wrap justify-center itmes-center gap-3 w-full pt-2 pb-2">
                {
                    links.map((link, index) => (
                        <li className="hover:font-gold" key={index}>
                            <a href={link.ancora} target="_blank" rel="noopener noreferrer">
                                { link.icon }
                            </a>
                        </li>
                    ))
                }
            </ul>
            {/* Copy */}
            <div className="flex justify-center itmes-center w-full mb-2">
                <p className="lg:flex gap-1 text-center pr-2 pl-2">
                    &copy; 2023 
                    <a href="https://github.com/llipe20/projeto-mahoraga">
                        projeto-mahoraga
                    </a> 
                    - Criado e desenvolvido por 
                    <span className="cursor-pointer">
                        Felipe C Silva
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Footer