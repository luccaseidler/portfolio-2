import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const animationContact = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0}
    }

    return (
        <div id='contact' className='w-full h-screen bg-gradient-to-r from-[#28696A] to-[#2b888b] flex justify-center items-center p-4'>
            <motion.form 
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animationContact}
            transition={{ duration: 1 }}
            method='POST' action='https://getform.io/f/5fc2d371-22dc-4778-b7cb-3633c4c3e185' className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8 px-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ffb134] text-[#F0E6D7]'>Contato</p>
                    <p className='text-2xl font-semibold text-[#F0E6D7] py-4'>Vamos fazer negócio, entre em contato pelo formulário abaixo.</p>
                </div>
                <input className='my-4 p-2 bg-[#b4dadb] rounded-2xl shadow-xl shadow-[#2a4f50] font-semibold text-[#28696A] transtion-focus duration-300 focus:outline-[#ffb134]' type='text' placeholder='Nome' name='name' />
                <input className='p-2 bg-[#b4dadb] rounded-2xl shadow-xl shadow-[#2a4f50] font-semibold text-[#28696A] transtion-focus duration-300 focus:outline-[#ffb134]' type='email' placeholder='Email' name='email' />
                <textarea className='mt-4 bg-[#b4dadb] p-2 rounded-2xl shadow-xl shadow-[#2a4f50] text-[#28696A] transtion-focus duration-300 focus:outline-[#ffb134]' name='message' rows="10" placeholder='Mensagem'></textarea>            
                <button href='/' className='flex justify-center py-2'>
                    <p className='text-center transition ease-in-out shadow-xl shadow-[#2a4f50] font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-transparent hover:text-white hover:border-white hover:scale-110'>Let's Work</p>
                </button>
                <div className='flex justify-center py-3 text-[#ffb134] font-semibold'>ou</div>
                <div className='flex justify-center'>
                    <a href='https://api.whatsapp.com/send?phone=5551983137431&text=Ol%C3%A1,%20vim%20pelo%20seu%20portf%C3%B3lio.' target='_blank' rel='noopener noreferrer' className='text-center transition ease-in-out shadow-xl shadow-[#2a4f50] font-bold rounded-full group text-[#28696A] bg-[#F4AE3F] border-2 border-[#F4AE3F] px-6 py-3 my-2 flex items-center hover:bg-[#59CE72] hover:text-white hover:border-[#59CE72] hover:scale-110'>
                        WhatsApp <AiOutlineWhatsApp style={{ fontSize: '20px'}} className="ml-1"/>
                    </a>
                </div>
            </motion.form>
        </div>
    )
}

export default Contact