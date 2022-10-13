import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    experience: Experience
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className='flex flex-col max-h-[600px] md:max-h-[600px] rounded-lg items-center space-y-7 flex-shrink-0 w-[370px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
        { experience.companyImage ? 
            <motion.img 
            initial={{
                y:-100,
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
            className='w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={ experience.companyImage ? urlFor(experience?.companyImage).url() : experience.company}
            alt="" 
        /> :
            <div className="w-32 h-32 rounded-full border flex justify-center items-center text-[100px] border-[#F7AB0A]">
                <h1>{ experience.company[0] }</h1>
            </div>
        }

        <div className='px-0 md:px-10'>
            <h4 className='md:text-4xl text-xl font-light'>{ experience.jobTitle}</h4>
            <p className='font-bold md:text-l text-xl mt-1'>{ experience.company }</p>
            <div className='flex space-x-2 my-2'>
                {/* Tech used */}
                { experience.technologies.map((technology) => (
                    <img 
                        key={technology._id}
                        src={urlFor(technology?.image).url()}
                        alt="" 
                        className='h-10 w-10 rounded-full'
                    />
                ))}
            </div>
            <p className='uppercase py-5 text-gray-300'>
                { new Date(experience.dateStarted).toDateString()} -{' '}
                { experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className='list-disc list-inside space-y-4 ml-5 md:text-lg max-h-40 pr-5 overflow-y-scroll overflow-x-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
                { experience.points.map((point, index) => (
                    <li key={ index }>{ point }</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard