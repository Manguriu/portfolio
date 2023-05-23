import React from 'react';
import { motion } from "framer-motion";

type Props = {};

export default function CardExp({}: Props) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-4 flex-shrink-0 w-[500px] md:w-[400px] h-[450px] md:h-[450px] snap-center bg-[#292929] p-2 hover:opacity-100 opacity-50 cursor-pointer overflow-hidden transition-opacity duration-3000'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{
          duration: 1.5
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className='w-6 h-6 rounded-full object-cover object-top'
        src='pic.png'
        alt=''
      />

      <div className='px-0'>
        <h4 className='text-xs font-light'>Trainee</h4>
        <p className='font-bold text-xs mt-1'>TSMHS</p>

        <div className='flex space-x-1 my-1'>
          <img className="h-3 w-3 rounded-full" src='react-original-wordmark.svg' alt='' />
          <img className="h-3 w-3 rounded-full" src='typescript-original.svg' alt='' />
          <img className="h-3 w-3 rounded-full" src='php-original.svg' alt='' />
        </div>

        <p className='uppercase py-2 text-xs'>from... - to...</p>

        <ul className='list-disc space-y-2 ml-1 text-xxs'>
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
