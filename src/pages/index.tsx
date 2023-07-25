import Head from "next/head";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Script from "next/script";

("use client");

export default function Home() {
  return (
    <div className="  h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Brian protfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contacts" className="snap-start">
        <Contacts />
      </section>
      <Footer />

      <Script id="tawk-to-script">{`
    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/64a1835f94cf5d49dc610f69/1h4beibho';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })()`}</Script>
    </div>
  );
}
