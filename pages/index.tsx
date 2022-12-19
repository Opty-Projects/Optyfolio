import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import About from '../components/pages/About'

const AboutPage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/bsc')
    router.prefetch('/msc')
  }, [])

  return (
    <>
      <Head>
        <title>About - Optyfolio</title>
      </Head>
      <About />
    </>
  )
}

export default AboutPage
