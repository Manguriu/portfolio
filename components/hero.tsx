import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import PopupCircles from './PopupCircles';

type Props = {}

function hero({}: Props) {
    const [text, helper] = useTypewriter({
        words:[
            "Manguriu is the Name",
            "<i like programming />",
            "coffe is my thing",
        ],
        loop:true,
        delaySpeed:1000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <PopupCircles />
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='red'></Cursor>
        </h1>
    </div>
  )
}

export default hero