import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../../components/header'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Brian protfolio</title>
      </Head>

      <Header />
    </div>
  )
}
