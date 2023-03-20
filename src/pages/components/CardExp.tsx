import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function CardExp({}: Props) {
  return (
   <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-50 cursor-pointer overflow-hidden transition-opacity  duration-3000'>
    <motion.img 
    initial={{
      y: -100,
      opacity:0
    }}
    transition={{
      duration:1.5
    }}
    whileInView={{
      opacity:1,
      y:0,
    }}
    className='w-30 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-top'
    src='pic.png' alt=''/>

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'> Trainee </h4>
      <p className='font-bold text-2xl mt-1'> TSMHS </p>


      <div className='flex space-x-2 my-2'>
        <img  className="h-10 w-10 rounded-full" src='react-original-wordmark.svg' alt=''/>
        <img  className="h-10 w-10 rounded-full" src='typescript-original.svg' alt=''/>
        <img  className="h-10 w-10 rounded-full" src='php-original.svg'alt=''/>
      
      </div>


      <p className='uppercase py-5'> from... -to...</p>


      <ul className='list-disc space-y-4 ml-5 text-lg'>
        <li>some points</li>
        <li>some points</li>
        <li>some points</li>
        <li>some points</li>
      </ul>


    </div>

   </article>

  );
}

CardExp.displayName = 'CardExp';