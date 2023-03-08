import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './components/header'
import Hero from './components/hero'
import About from './components/About'


export default function Home() {
  return (
    <div className='bg-[rgb(70,62,71)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>

      <Head>
        <title>Brian protfolio</title>
      </Head>
      <Header />


      <section id="hero" className='snap-center'>
      <Hero />
      </section>

      <section id='about'>
        <About />
      </section>

    </div>
  )
}
