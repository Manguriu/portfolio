import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects = [
        { id: 1, name: 'Project 1' },
        { id: 2, name: 'Project 2' },
        { id: 3, name: 'Project 3' },
      ];
    const projectsCount = projects.length;
  return (
    <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className='h-screen relative flex  overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        
         <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
            {projects.map((project, i) =>(
                <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-40 h-screen'>
                    <motion.img
                        initial={{y: -300, opacity:0,}}
                        transition={{duration:1.2}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                    src="https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=612x612&w=0&k=20&c=xwCQ441cTHFBTZpb8ihvVwqqtTZjmees1C3xdJc_nfw=" />
                    <div><h4 className='text-4xl font-semibold text-center '><span className='underline decoration-[red]/50'>Case study { i + 1} of {projectsCount}</span></h4>
                    <p className='text-lg text-center md:text-left'>The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.</p>
                    </div>
                </div>
            ))
            }
            
        </div>
        {/* line accross the project */}
        <div className='w-full absolute top-[30%] bg-[#430f58]/20 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects
