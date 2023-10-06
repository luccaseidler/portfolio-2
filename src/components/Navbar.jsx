import React, { useState } from 'react';
import { FaBars, FaTimes, FaFreebsd, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { SiLitecoin } from 'react-icons/si'


const Navbar = () => {
    const [ nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#28696A] text-[#F0E6D7]'>
            <div>
                <SiLitecoin class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 ..." 
                size={40}
                color= '#F4AE3F'
                />
            </div>
                {/* menu */}
                <ul className='hidden md:flex'>
                    <li className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Home</li>
                    <li className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Skills</li>
                    <li className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Experience</li>
                    <li className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Contact</li>
                </ul>

            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars
                size={20} 
                className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'
                /> : <FaTimes
                size={20}
                className='transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'
                />}
            </div>

            {/*Mobile*/}
            <ul className={`transition-transform ${!nav ? 'translate-y-[100%]' : 'translate-y-0'} absolute top-0 left-0 w-full h-screen bg-[#28696A] flex flex-col justify-center items-center`}>
            <SiLitecoin class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 ..." 
                size={50}
                onMouseOver={({target})=>target.style.color="#F4AE3F"}
                onMouseOut={({target})=>target.style.color="#F0E6D7"}
                />
                <li className='py-6 text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Home</li>
                <li className='py-6 text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Skills</li>
                <li className='py-6 text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Experience</li>
                <li className='py-6 text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]'>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#F4AE3F] font-semibold'
                        href='/'
                        >
                            Linkedin <FaLinkedin size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#F4AE3F] font-semibold'
                        href='/'
                        >
                            Github <FaGithub size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#F4AE3F] font-semibold'
                        href='/'
                        >
                            Email <HiOutlineMail size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'>
                        <a className='flex justify-between items-center w-full text-[#F4AE3F] font-semibold'
                        href='/'
                        >
                            Currículo <BsFillPersonLinesFill size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar