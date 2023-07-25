import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";
("use client");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
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
    </>
  );
}
