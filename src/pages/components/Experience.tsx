import React from 'react'
import {motion} from "framer-motion"
import CardExp from "./CardExp"

type Props = {}

export default function Experience({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity:1,
    }}
    transition={{
        duration:1.5
    }}


    className='flex flex-col relative  text-lft  md:flex-row max-w-full px-10 h-screen text-center overflow-hidden justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Experience</h3> 

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory'>
            <CardExp />
            <CardExp />
            <CardExp />
            <CardExp />
        </div>

    </motion.div>
  )
}