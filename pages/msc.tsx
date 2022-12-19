import { NextPage } from 'next'
import Head from 'next/head'
import CoursesPage from '../components/pages/CoursesPage'
import { mscCourses } from '../data/courses'

const MScPage: NextPage = () => (
  <>
    <Head>
      <title>MSc - Optyfolio</title>
    </Head>
    <CoursesPage
      degree="Master's"
      period="September 2020 - November 2022"
      courses={mscCourses}
    />
  </>
)

export default MScPage
