import HTML from '../assets/images/html.png';
import CSS from '../assets/images/css.png';
import javascript from '../assets/images/javascript.png';
import reactjs from '../assets/images/reactjs.png'; 
import typescript from '../assets/images/typescript.png';
import React from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const Skills = () => {
    return (
        <div className=' bg-[#28696A]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F4AE3F] text-[#F0E6D7]'>Skills</p>
                    <p className='py-4'>Linguagens e tecnologias que trabalhei previamente</p>
                </div>
            </div>
            <div>
                <div>
                    <img className='w-20 mx-auto' src={reactjs} alt='React icon'/>
                    <p>ReactJS</p>
                </div>
            </div>
        </div>
    )
}

export default Skills