import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";


type Props = {}

function header({}: Props) {
  return (
    <header className='sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
        <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale: 0.5,
        }}
        animate={{
          x:0,
          opacity: 1,
          scale:1,
        }}
        transition={{
          duration:1.4,
        }}
        className='flex flex-row items-center'>
            {/*social icons */}
            <SocialIcon url="https://www.linkedin.com/in/brian-manguriu-3b0b07207/"  fgColor='indigo' bgColor='transparent'/>
            <SocialIcon network="twitter" fgColor='blue' bgColor='transparent'/>
            <SocialIcon network="whatsapp" fgColor='green' bgColor='transparent' />
            <SocialIcon network="github" fgColor='black' bgColor='transparent' />
        </motion.div>
        <motion.div
          initial={{
            x:500,
            opacity:0,
            scale: 0.5,
          }}
          animate={{
            x:0,
          opacity: 1,
          scale:1,
          }}
          transition={{
            duration:1.3,
          }}
        className='flex flex-row items-center text-grey-300 cursor-pointer'>
            <SocialIcon className='cursor-pointer' network='email' fgColor='red' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-black-400'>contact me</p>
        </motion.div>
    </header>
  )
}

export default header