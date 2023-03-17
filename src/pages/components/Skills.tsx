import React from 'react'
import {motion} from "framer-motion"
import Skill from "./Skill"


type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:0
    }}
    whileInView={{
        opacity:1
    }}
    transition={{
        duration:2
    }}
    
    className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[200px] xl:px-10 min-h-screen justify-center xl-space-y-0 mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Skills</h3>
    <h3 className='absolute top-36 uppercase tracking-[3px] text-sm'> some skills</h3>


    <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
    </div>


    </motion.div>
  );
}