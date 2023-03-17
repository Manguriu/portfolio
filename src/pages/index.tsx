import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'



export default function Home() {
  return (
    <div className='bg-[rgb(70,62,71)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>

      <Head>
        <title>Brian protfolio</title>
      </Head>
      <Header />


      <section id="hero" className='snap-start'>
      <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id="experience"  className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-start'>
        <Skills />
      </section>

    </div>
  )
}
