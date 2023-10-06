import React from "react"
import {HiArrowNarrowRight} from 'react-icons/hi'
import Typed from 'react-typed'

const Home = () => {
    return (
        <div className="w-full h-screen bg-[#28696A]">
            {/*Container*/}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#F4AE3F] font-semibold">Meu nome é</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#F0E6D7]">Lucca Seidler</h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-[#7ec7c9]">Frontend Developer <br/><Typed
                    strings={['ReactJS.', 'Javascript.', 'NextJS.', 'PHP.', 'TailwindCSS.', 'HTML.', 'CSS.', 'TypeScript.']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                /></h2>
                <p className="text-[#7ec7c9] py-4 max-w-[700px]">eu amo muito a minha esposa, adoro obedecer adoro passar tempo com ela e com nossos filhos aham </p>
                <div>
                    <button className="transition ease-in-out group text-[#F0E6D7] border-2 border-[#F0E6D7] px-6 py-3 my-2 flex items-center hover:bg-[#F4AE3F] hover:text-[#28696A] hover:border-[#F4AE3F]">Saiba mais 
                    <span className="group-hover:rotate-90 duration-300">
                        <HiArrowNarrowRight className="ml-2 "/>
                    </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home