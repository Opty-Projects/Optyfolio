import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import About from '../components/pages/About'

const AboutPage: NextPage = () => {
  const router = useRouter()
  useEffect(() => {
    router.prefetch('/bsc')
    router.prefetch('/msc')
  }, [])
  return <About />
}

export default AboutPage
