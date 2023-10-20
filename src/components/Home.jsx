import React from "react"
import { motion } from 'framer-motion'
import {HiArrowNarrowRight, HiDownload} from 'react-icons/hi'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Typed from 'react-typed'
import Frases from '../assets/textos/textos'

/*Styles*/

const buttonAbout = "transition ease-in-out font-bold rounded-full group text-[#F0E6D7] border-2 border-[#F0E6D7] px-6 py-3 my-2 flex items-center hover:bg-[#F4AE3F] hover:text-[#28696A] hover:border-[#F4AE3F]"
const buttonCV = "sm:hidden transition ease-in-out font-bold rounded-full group text-[#F0E6D7] border-2 border-[#F0E6D7] px-6 py-3 my-2 flex items-center hover:bg-[#F4AE3F] hover:text-[#28696A] hover:border-[#F4AE3F]"

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#28696A]">
            {/*Container*/}
            <motion.div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" 
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.5}}
                >
                <motion.p 
                    className="text-[#F4AE3F] font-semibold"
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 1}}
                >Bem-Vindo ao site de</motion.p>
                <motion.h1 
                    className="text-4xl sm:text-7xl font-bold text-[#F0E6D7]"
                    initial={{opacity: 0, translateX: -1000 }}
                    animate={{opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5, delay: 1.3}}
                >Lucca Seidler</motion.h1>
                <motion.h2 
                    className="text-2xl sm:text-7xl font-bold text-[#7ec7c9]"
                    initial={{ opacity: 0, translateX: 1000 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.5, delay: 1.8}}
                >Desenvolvedor Frontend
                <br/>
                <Typed 
                    strings={['ReactJS.', 'Javascript.', 'NextJS.', 'PHP.', 'TailwindCSS.', 'HTML.', 'CSS.', 'TypeScript.']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                /><br/>
                </motion.h2>
                <motion.p 
                    className="text-[#7ec7c9] py-4 max-w-[700px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.2}}
                >{Frases[0]}
                </motion.p>
                <div className="flex gap-4">
                    <motion.button 
                        className={buttonAbout}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5}}
                    >Saiba mais 
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-2 "/>
                    </span>
                    </motion.button>
                    <motion.button 
                        className={buttonCV}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5}}
                    >Baixar CV 
                    <span className="">
                        <HiDownload className="ml-2"/>
                    </span>
                    </motion.button>
                </div>
                <motion.div 
                    className="sm:hidden flex gap-4 py-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3}}  
                >
                    <FaGithub size={20} color= '#F4AE3F' />
                    <FaLinkedin size={20} color= '#F4AE3F' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home