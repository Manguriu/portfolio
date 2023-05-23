import React from 'react'
import {PhoneIcon, MapIcon, EnvelopeIcon} from '@heroicons/react/24/solid'


type Props = {}

function Contacts({}: Props) {
  return (
    <div className='h-screen  relative flex  overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Contact Me</h3>
        <div className=' flex flex-col space-y-5'>
            <h4 className='text-2xl text-center font-semibold '>
                 i Got You:
            </h4>
            <div className='space-y-2'>
                <div className='flex items-center space-x-5 justify-center'>
                <PhoneIcon className='text-[#430f58] h-6 w-6 animate-pulse'/>
                <p className='text-2xl'>0743807662</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <MapIcon className='text-[#430f58] h-6 w-6 animate-pulse'/>
                <p className='text-2xl'>Kenya,Nairobi</p>
                </div>
                <div className='flex items-center space-x-5 justify-center'>
                <EnvelopeIcon className='text-[#430f58] h-6 w-6 animate-pulse'/>
                <p className='text-2xl'>Brianmiruri983@gmail.com</p>
                </div>
            </div>
            <form className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-2'>
                    <input placeholder='Name' type="text" className='contactinfo' />
                    <input placeholder='Email' type="email" className='contactinfo' />
                </div>
                <input placeholder="Subject" className='contactinfo'  />

                <textarea placeholder="Message..." className='contactinfo'   />
                <button type="submit" className='bg-[#430f58] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contacts