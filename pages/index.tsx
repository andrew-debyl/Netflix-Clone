import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import type {NextPage} from 'next'
import Header from '../components/Header'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPage = () =>  {
  return (
    <>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Header></Header>
        <main>
          <section>
            
          </section>
        </main>
      </main>
    </>
  )
}

export default Home