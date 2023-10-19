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


const techs = [
    {
        id:0,
        title: 'ReactJS',
        alt: 'React Icon',
        image: reactjs
    },
    {
        id:1,
        title: 'HTML',
        alt: 'HTML icon',
        image: HTML
    },
    {
        id:2,
        title: 'CSS',
        alt: 'CSS Icon',
        image: CSS
    },
    {
        id:3,
        title: 'JavaScript',
        alt: 'JS Icon',
        image: javascript
    },
    {
        id:4,
        title: 'TypeScript',
        alt: 'TypeScript Icon',
        image: typescript
    },
    {
        id:5,
        title: 'Redux',
        alt: 'Redux Icon',
        image: redux
    },
    {
        id:6,
        title: 'Git',
        alt: 'Git Icon',
        image: git
    },
    {
        id:7,
        title: 'TailwindCSS',
        alt: 'TailwindCSS Icon',
        image: tailwind
    },
    {
        id:8,
        title: 'NextJS',
        alt: 'Next Icon',
        image: nextjs
    },
    {
        id:9,
        title: 'PHP',
        alt: 'Php Icon',
        image: php
    },
]

const Skills = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const animationSkills = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0}
    }

    return (
        <div className=' bg-[#28696A] text-[#F0E6D7]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationSkills}
                transition={{ duration: 1 }}
                >
                    <p className='text-4xl font-bold inline border-b-4 border-[#F4AE3F]'>Skills</p>
                    <p className='py-4'>Linguagens e tecnologias que trabalhei previamente</p>
                </motion.div>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8 overflow-hidden'>
            {techs.map((tech, i) => (
                <motion.div 
                    key={tech.id}
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationSkills}
                    transition={{ duration: 0.5, delay: i * 0.3 }}
                >
                    <div className='hover:scale-110 duration-300'>
                        <img className='w-20 mx-auto' src={tech.image} alt={tech.alt}/>
                        <p className='my-4'>{tech.title}</p>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
    )
}

export default Skills

