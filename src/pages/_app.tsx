import Navbar from '@/components/Navbar/Navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <RecoilRoot>
      <Head>
        <title>
          Leetcode
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>
     <Component {...pageProps} />
    

    </RecoilRoot>
  )
}
