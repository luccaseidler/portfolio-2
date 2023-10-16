import React from "react"
import { motion } from 'framer-motion'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'
import Frases from '../assets/textos/textos'

/*Styles*/

const buttonAbout = "transition ease-in-out group text-[#F0E6D7] border-2 border-[#F0E6D7] px-6 py-3 my-2 flex items-center hover:bg-[#F4AE3F] hover:text-[#28696A] hover:border-[#F4AE3F]"

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#28696A]">
            {/*Container*/}
            <motion.div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full" 
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 1}}
                >
                <p className="text-[#F4AE3F] font-semibold">Bem-Vindo ao site de</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#F0E6D7]">Lucca Seidler</h1>
                <h2 className="text-3xl sm:text-7xl font-bold text-[#7ec7c9]">Desenvolvedor Frontend
                <br/>
                <Typed 
                    strings={['ReactJS.', 'Javascript.', 'NextJS.', 'PHP.', 'TailwindCSS.', 'HTML.', 'CSS.', 'TypeScript.']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                /><br/>
                </h2>
                <p className="text-[#7ec7c9] py-4 max-w-[700px]">{Frases[0]}</p>
                <div className="flex">
                    <button className={buttonAbout}>Saiba mais 
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-2 "/>
                    </span>
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default Home