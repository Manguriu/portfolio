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
            As an experienced software developer, I have a strong background in coding, testing, and maintaining software systems. Throughout my career, I have developed a versatile skill set that allows me to excel in multiple programming languages. Specifically, I specialize in React, Next.js, Laravel, and JavaScript, which I have mastered to create efficient and scalable applications.

With my expertise in React and Next.js, I can effortlessly build dynamic and interactive user interfaces. These frameworks provide a solid foundation for delivering exceptional user experiences while ensuring optimal performance. Additionally, my proficiency in Laravel, a powerful PHP framework, enables me to develop robust and secure back-end systems.

https://github.com/Manguriu
            </p>
            
           </div>
          <div className='w-full absolute top-[30%] bg-[#430f58]/20 left-0 h-[500px] -skew-y-12' />
        </div>
  )
}
