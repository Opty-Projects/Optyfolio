import { NextPage } from 'next'
import Head from 'next/head'
import CoursesPage from '../components/pages/CoursesPage'
import { bscCourses } from '../data/courses'

const BScPage: NextPage = () => (
  <>
    <Head>
      <title>BSc - Optyfolio</title>
    </Head>
    <CoursesPage
      degree="Bachelor's"
      period="September 2017 - June 2020"
      courses={bscCourses}
    />
  </>
)

export default BScPage
