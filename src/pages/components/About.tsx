import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>
               
          <motion.img

            initial={{
              x:-200,
              opacity:-1,
            }} 
            transition={{
              duration:1.5,
            }}
            whileInView={{
              x:0,
              opacity:1,
            }}
            
            src='hello.png' alt='' height={64} width={95}
            className="-mb-10 md:mb-0 flex-shrink-0  rounded-full md:rounded-lg object-cover xl:w-[200px] xl:h-[250px]"
           />
           <div className='space-y-0 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'> About{" "} 
            <span className='underline'> Manguriu</span></h4>{" "}
            <p className='text-base'>
            A proficient software developer with substantial experience in coding, testing, and maintaining software systems. Possessing a versatile and promising skill set, as well as proficiency in a variety of programming languages. Exhibiting a high level of expertise in modern development tools and platforms. Capable of managing independent projects with ease, while also being a collaborative team player.
            </p>
            
           </div>
          <div className='w-full absolute top-[30%] bg-[#430f58]/20 left-0 h-[500px] -skew-y-12' />
        </div>
  )
}
