import { NextPage } from 'next'
import Head from 'next/head'
import CoursesPage from '../components/pages/CoursesPage'
import { mscCourses } from '../data/courses'

const MScPage: NextPage = () => (
  <>
    <Head>
      <title>Master’s — Ricardo Grade</title>
    </Head>
    <CoursesPage
      degree="Master's"
      period="Sep 2020 - Nov 2022"
      courses={mscCourses}
    />
  </>
)

export default MScPage
