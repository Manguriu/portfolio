import Head from 'next/head'
import Header from './components/header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contacts from './components/Contacts'



export default function Home() {
  return (
    <div className='  h-screen snap-y snap-mandatory overflow-scroll z-0'>

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
      <section id="projects" className='snap-start'>
        <Projects />
      </section>
      <section id="contacts" className='snap-start'>
        <Contacts />
      </section>

    </div>
  )
}
