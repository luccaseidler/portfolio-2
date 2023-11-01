import React from "react"
import { motion } from 'framer-motion'
import {HiArrowNarrowRight, HiDownload} from 'react-icons/hi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Typed from 'react-typed'
import Frases from '../assets/textos/textos'

/*Styles*/

const buttonAbout = "text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white"
const buttonCV = "sm:hidden text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white"

const Home = () => {
    return (
        <div name='home' className="w-full h-screen bg-gradient-to-r from-[#28696A] to-[#2b888b]">
            {/*Container*/}
            <motion.div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" 
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.5}}
                >
                <motion.p 
                    className="text-[#F0E6D7] font-semibold"
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 1}}
                >Bem-Vindo ao site de</motion.p>
                <motion.h1 
                    className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ffb134] to-[#fafafa] sm:text-7xl font-bold text-[#F0E6D7]"
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
                    <FaGithub className="hover:scale-110 duration-300" size={20} color= '#F4AE3F' />
                    <FaLinkedin className="hover:scale-110 duration-300" size={20} color= '#F4AE3F' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home