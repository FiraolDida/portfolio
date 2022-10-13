import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [ text, count] = useTypewriter({
        words: [ 
            `Hi, The Name's ${pageInfo?.name}`, 
            "Guy-who-loves-Eat.tsx", 
            "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <div className='relative rounded-full h-32 w-32 mx-auto object-cover'>
            <Image className='rounded-full' src={urlFor(pageInfo?.heroImage).url()} layout='fill' alt='' objectFit='contain'/>
        </div>
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{ pageInfo?.role}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{ text }</span>
                <Cursor cursorColor='#F7AB0A' />
            </h1>

            <div className='pt-5'>
                <Link href='#about'>
                    <button className='heroButton'>About</button>
                </Link>
                
                <Link href='#experience'>
                    <button className='heroButton'>Experience</button>
                </Link>
                
                <Link href='#skills'>
                    <button className='heroButton'>Skills</button>
                </Link>
                
                <Link href='#projects'>
                    <button className='heroButton'>Projects</button>
                </Link>
                
            </div>
        </div>
    </div>
  )
}

export default Hero