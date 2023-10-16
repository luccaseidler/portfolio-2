import Frases from '../assets/textos/textos'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const animationAbout = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0}
    }

    return (
        <div name='about' className="w-full h-screen bg-[#28696A] text-[#F0E6D7]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <motion.div className="sm:text-right pb-8 pl-4"
                        ref={ref}
                        initial="hidden"
                        animate={inView ? 'visible' : 'hidden'}
                        variants={animationAbout}
                        transition={{ duration: 1.5 }}
                    >
                        <p className="text-4xl font-bold inline border-b-4 border-[#F4AE3F]">Sobre</p>
                    </motion.div>
                    <div></div>
                    </div>
                <motion.div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationAbout}
                    transition={{ duration: 1.5 }}
                >
                    <div>
                        <p className='sm:text-right text-4xl font-bold'>Olá, meu nome é Lucca, é um prazer te-lo aqui.</p>
                    </div>
                <div>
                    <p className='text-[#7ec7c9]'>{Frases[1]}</p>
                </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About