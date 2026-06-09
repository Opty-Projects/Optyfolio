import { NextPage } from 'next'
import Head from 'next/head'
import CoursesPage from '../components/pages/CoursesPage'
import { bscCourses } from '../data/courses'

const BScPage: NextPage = () => (
  <>
    <Head>
      <title>Bachelor’s — Ricardo Grade</title>
    </Head>
    <CoursesPage
      degree="Bachelor's"
      period="Sep 2017 - Jun 2020"
      courses={bscCourses}
    />
  </>
)

export default BScPage
