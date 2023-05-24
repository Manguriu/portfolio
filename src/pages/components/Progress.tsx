import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter'


type Props = {}

export default function Progress({}: Props) {
    const [text, helper] = useTypewriter({
        words:[
            "Site In progress <Coming Soon!!!/> ",
           
        ],
        loop:true,
        delaySpeed:1000,
    });
  return (
    <div>
         <h1>
        <span className='text-red-300 text-2xl lg:text-4xl font-semibold px-5 '>{text}</span>
        <Cursor cursorColor='red'></Cursor>
        </h1>
    </div>
  )
}
