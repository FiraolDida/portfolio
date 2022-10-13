import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';

type Props = {
    projects: Project[]
}

function Projects({ projects }: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        whileInView={{
            opacity: 1
        }}
        transition={{
            duration: 1.5
        }}
        className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full md:justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

            <div className='relative w-full flex max-h-[700px] mt-10 md:mt-0 md:max-h-[1000px] overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {/* projects */}
                { projects?.map((project, index) => (
                    <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pl-10 pr-10 md:p-44 h-screen'>
                        <motion.img 
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}
                            viewport={{
                                once: true
                            }}
                            className="object-scale-down h-[250px] w-[500px]"
                            src={ project.image ? urlFor(project?.image).url() : project.title } alt="" 
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='md:text-4xl text-2xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>Case Study { index + 1} of { projects.length}:</span>{' '} { project?.title }
                            </h4>

                            <div className='flex items-center space-x-2 justify-center'>
                                { project?.technologies.map((technology) => (
                                    <img
                                        className='relative h-10 w-10'
                                        key={technology._id}
                                        src={ urlFor(technology.image).url() } 
                                        alt=''
                                    />
                                ))}
                            </div>

                            <p className='text-lg  text-center md:text-left max-h-40 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                                { project?.summary }
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects