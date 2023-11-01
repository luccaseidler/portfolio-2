import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import shoeProject from '../assets/images/shoeproject.jpg'
import portFirst from '../assets/images/portfirst.jpg'
import phpSystem from '../assets/images/sistemaphp.jpg'
import botZap from '../assets/images/botZap.jpg'
import atfSite from '../assets/images/atfSite.jpg'
import { AiOutlineWhatsApp, AiOutlineExport} from 'react-icons/ai'

const Projects = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const animationProj = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0}
    }

    return (
        <div name='project' className='bg-gradient-to-r from-[#28696A] to-[#2b888b] text-[#F0E6D7]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                 ref={ref}
                 initial="hidden"
                 animate={inView ? 'visible' : 'hidden'}
                 variants={animationProj}
                 transition={{ duration: 1 }}
                >
                <p className='text-4xl font-bold inline border-b-4 border-[#F4AE3F]'>Projetos</p>
                <p className='py-4'>Projetos que construi por conta própria ou para empresas</p>
                </motion.div>
                <motion.div 
                    className='grid md:grid-cols-2 gap-8'
                     ref={ref}
                     initial="hidden"
                     animate={inView ? 'visible' : 'hidden'}
                     variants={animationProj}
                     transition={{ duration: 2.5 }}
                >
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2a4f50] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b888b] to-[#7ec7c9]'>
                        <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300 ease-in-out' src={atfSite} alt='Bot WhatsApp'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl  track text-center'>Site Institucional</h3>
                            <p className='pb-4 pt-2 text-center'>ReactJS/TailwindCSS/JavaScript</p>
                            <button href='/' className='px-12'>
                                <p className='text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white'>Visitar Site</p>
                            </button>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2a4f50] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b888b] to-[#7ec7c9]'>
                        <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300 ease-in-out' src={shoeProject} alt='Projeto venda de tênis'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl  track text-center'>Loja de tênis</h3>
                            <p className='pb-4 pt-2 text-center'>ReactJS/TypeScript/CSS</p>
                            <button href='/' className='px-4'>
                                <p className='text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white'>Ver no Github</p>
                            </button>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2a4f50] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b888b] to-[#7ec7c9]'>
                        <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300 ease-in-out' src={portFirst} alt='Primeiro Portfólio'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl  track text-center'>Primeiro Portfólio</h3>
                            <p className='pb-4 pt-2 text-center'>JavaScript/CSS/HTML</p>
                            <button href='/' className='px-4'>
                                <p className='text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white'>Ver no Github</p>
                            </button>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2a4f50] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b888b] to-[#7ec7c9]'>
                        <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300 ease-in-out' src={phpSystem} alt='Sistema PHP'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl  track text-center'>Sistema Interno</h3>
                            <p className='pb-4 pt-2 text-center'>PHP/WordPress/CSS/HTML/APIs - não oficial por questões éticas</p>
                            <button href='/' className='px-[48px]'>
                                <p className='text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white'>Ver no Github</p>
                            </button>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#2a4f50] rounded-xl p-4 group hover:bg-gradient-to-r from-[#2b888b] to-[#7ec7c9]'>
                        <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300 ease-in-out' src={botZap} alt='Bot WhatsApp'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl  track text-center'>Chatbot para WhatsApp</h3>
                            <p className='pb-4 pt-2 text-center'>JavaScript/APIs/Blip</p>
                            <button href='/' className='px-8'>
                                <p className='text-center transition ease-in-out font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white'>Conversar <AiOutlineWhatsApp className='ml-1'/></p>
                            </button>
                        </div>
                    </div>
                </motion.div>
                <div className='py-6 flex justify-center '>
                    <button className='transition ease-in-out font-bold rounded-full text-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:scale-125 duration-300'>
                        Ver Todos <AiOutlineExport className='font-bold ml-1'/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Projects