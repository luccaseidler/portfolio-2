import HTML from '../assets/images/html2.svg';
import CSS from '../assets/images/css2.svg';
import javascript from '../assets/images/javascript2.svg';
import reactjs from '../assets/images/react3.svg'; 
import typescript from '../assets/images/typescript2.svg';
import redux from '../assets/images/redux2.svg';
import three from '../assets/images/threejs.svg';
import git from '../assets/images/git2.svg';
import tailwind from '../assets/images/tailwind2.svg';
import nextjs from '../assets/images/nextjs.svg'
import php from '../assets/images/php.svg'
import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Skills = () => {
    return (
        <div className=' bg-[#28696A] text-[#F0E6D7]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F4AE3F]'>Skills</p>
                    <p className='py-4'>Linguagens e tecnologias que trabalhei previamente</p>
                </div>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 overflow-hidden'>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={reactjs} alt='React icon'/>
                    <p className='my-4'>ReactJS</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={CSS} alt='CSS icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={javascript} alt='JS icon'/>
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={typescript} alt='Type icon'/>
                    <p className='my-4'>TypeScript</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={tailwind} alt='Tailwind icon'/>
                    <p className='my-4'>TailwindCSS</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={redux} alt='Redux icon'/>
                    <p className='my-4'>Redux</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={nextjs} alt='Next icon'/>
                    <p className='my-4'>NextJS</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={php} alt='PHP icon'/>
                    <p className='my-4'>PHP</p>
                </div>
                <div className='hover:scale-110 duration-300'>
                    <img className='w-20 mx-auto' src={git} alt='Git icon'/>
                    <p className='my-4'>Git</p>
                </div>
            </div>
        </div>
    )
}

export default Skills