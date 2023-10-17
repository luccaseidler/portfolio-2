import React from 'react';
import { ReactComponent as WorkIcon } from '../work.svg';
import { ReactComponent as SchoolIcon } from '../school.svg';
import timelineElements from '../timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const TimeLine = () => {
    const workIconStyles = {background: "#06D6A0"}
    const schoolIconStyles = {background: "#f9c74f"}

    const [ref, inView] = useInView({
        triggerOnce: true,
    })

    const animationTime = {
        hidden: { opacity: 0, y: 100},
        visible: { opacity: 1, y: 0}
    }
    
    return (
        <div name="skills" className='bg-[#28696A]'>
            {/* Container */}
            <motion.div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={animationTime}
                transition={{ duration: 1.5 }}
            >
                <div>
                    <p className='text-4xl text-[#F0E6D7] font-bold inline border-b-4 border-[#F4AE3F]'>Linha do tempo</p>
                    <p className='mt-4 text-xl text-[#7ec7c9]'>Conheça a minha trajetória na programação até chegar aqui...</p>
                    <br/>
                    <br/>
                    <VerticalTimeline className=''>
                        {
                            timelineElements.map(element => {
                                const isWorkIcon = element.icon === 'work';

                                return (
                                    <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName='date text-white'
                                    iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                    icon={isWorkIcon ? <WorkIcon/> : <SchoolIcon/> }
                                    >
                                        <h3 className='vertical-timeline-element-title overflow-hidden'>{element.title}</h3>
                                        <h5 className='vertical-timelin-element-subtitle'>{element.location}</h5>
                                        <p id='description'>{element.description}</p>
                                    </VerticalTimelineElement>
                                )
                            })
                        }
                    </VerticalTimeline>
                </div>
            </motion.div>
        </div>
    )
};

export default TimeLine