import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import duck from '../assets/images/ducklogo.svg'

/* Styles */
const navButtons = 'font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]';
const mobileNav = 'py-6 text-4xl transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-[#F4AE3F]';
const socialLi = 'w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300';
const socialA = 'flex justify-between items-center w-full text-[#F4AE3F] font-semibold';

/////////////////////////

const Navbar = () => {
    const [ nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    const [scrolling, setScrolling] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const hideNav = currentScrollPos > prevScrollPos

            setScrolling(hideNav);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos])
    

    return (
        <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 bg-gradient-to-r from-[#28696A] to-[#2b888b] text-[#F0E6D7] z-10 transition-opacity duration-300 ${scrolling ? 'opacity-0' : 'opacity-100'}`}>
            <motion.div
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, delay: 0.25}}
            >
                <img src={duck} alt='duck logo' class="ml-4 w-[45px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 ..."/>
            </motion.div>
                {/* menu */}
                <motion.ul className='hidden md:flex'
                    initial={{ opacity: 0, translateY: -50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{ duration: 1.5, delay: 0.25}}
                >
                    <li onClick={() => {
                        const scrollTo = document.getElementById("home")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Home
                </li>
                    <li onClick={() => {
                        const scrollTo = document.getElementById("about")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Sobre
                </li>
                    <li onClick={() => {
                        const scrollTo = document.getElementById("timeline")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Linha do Tempo
                </li>
                    <li onClick={() => {
                        const scrollTo = document.getElementById("skills")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Skills
                </li>
                    <li onClick={() => {
                        const scrollTo = document.getElementById("project")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Projetos
                </li>
                    <li onClick={() => {
                        const scrollTo = document.getElementById("contact")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                        }
                    }}  className={navButtons}>Contato
                </li>
                </motion.ul>

            <motion.div onClick={handleClick} className='md:hidden z-10'
            initial={{ opacity: 0, translateY: -50 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1.5, delay: 0.25}}
            >
                {!nav ? <FaBars
                size={20} 
                className={navButtons}
                /> : <FaTimes
                size={20}
                className={navButtons}
                />}
            </motion.div>

            {/*Mobile*/}
            <ul className={`transition-transform duration-500 ${!nav ? 'translate-y-[100%]' : 'translate-y-0'} absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#28696A] to-[#2b888b] flex flex-col justify-center items-center`}>
            <img src={duck} alt='duck logo' class="w-[45px] transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200 ..." 
                size={50}
                onMouseOver={({target})=>target.style.color="#F4AE3F"}
                onMouseOut={({target})=>target.style.color="#F0E6D7"}
                />
                <li onClick={() => {
                        const scrollTo = document.getElementById("home")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Home
                </li>
                <li onClick={() => {
                        const scrollTo = document.getElementById("about")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Sobre
                </li>
                <li onClick={() => {
                        const scrollTo = document.getElementById("timeline")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Linha do Tempo
                </li>
                <li onClick={() => {
                        const scrollTo = document.getElementById("skills")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Skills
                </li>
                <li onClick={() => {
                        const scrollTo = document.getElementById("project")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Projetos
                </li>
                <li onClick={() => {
                        const scrollTo = document.getElementById("contact")
                        if (scrollTo) {
                            scrollTo.scrollIntoView({
                                behavior: "smooth",
                            });
                            handleClick();
                        }
                    }}  className={mobileNav}>Contato
                </li>       
            </ul>

            {/* Social Icons */}
            <motion.div className='hidden lg:flex fixed flex-col top-[30%] left-0'
                initial={{ opacity: 1, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1, delay: 1.5}}
            >
                <ul>
                    <li className={socialLi}>
                        <a className={socialA}
                        href='/'
                        >
                            Linkedin <FaLinkedin size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className={socialLi}>
                        <a className={socialA}
                        href='/'
                        >
                            Github <FaGithub size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className={socialLi}>
                        <a className={socialA}
                        href='/'
                        >
                            Email <HiOutlineMail size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                    <li className={socialLi}>
                        <a className={socialA}
                        href='/'
                        >
                            Currículo <BsFillPersonLinesFill size={30} color= '#F4AE3F' />    
                        </a>
                    </li>
                </ul>
            </motion.div>
        </div>
    )
}

export default Navbar