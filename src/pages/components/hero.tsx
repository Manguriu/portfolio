import Link from 'next/link';
import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import PopupCircles from './PopupCircles';


type Props = {}

function hero({}: Props) {
    const [text, helper] = useTypewriter({
        words:[
            "Manguriu Is The Name",
            "I Like Programming <Npm install code loving!>",
            "Coffe is my thing < git init love it />",
        ],
        loop:true,
        delaySpeed:1000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <PopupCircles />
        <img className="relative rounded-full mx-auto object-cover" src='pic.png' />


    <div className='z-20'>
          <h2 className='text-sm uppercase text-red-300 pb-2 tracking-[15px]'>Software developer</h2>
        <h1>
        <span className='text-red-300 text-2xl lg:text-4xl font-semibold px-5 '>{text}</span>
        <Cursor cursorColor='red'></Cursor>
        </h1>
        <div className='text-red-300 pt-7'>
          <Link href="#about">
          <button className='px-6 py-2 border border-[rgb(70,62,71)] rounded-full uppercase text-xm tracking-widest transition-all hover:border-[white] hover:text-[white]'>About</button>
          </Link>
          <Link href="#experience">
          <button className='px-6 py-2 border border-[rgb(70,62,71)] rounded-full uppercase text-xm tracking-widest transition-all hover:border-[blue] hover:text-[blue]'>Experiecnce</button>
          </Link>
          <Link href="#skills">          
          <button className='px-6 py-2 border border-[rgb(70,62,71)] rounded-full uppercase text-xm tracking-widest transition-all hover:border-[red] hover:text-[red]'>Skills</button>
          </Link>
          <Link href="#projects">
          <button className='px-6 py-2 border border-[rgb(70,62,71)] rounded-full uppercase text-xm tracking-widest transition-all hover:border-[#f700ff] hover:text-[#f700ff]'>Projects</button>
          </Link>
        </div>
        </div>
    </div>
  )
}

export default hero