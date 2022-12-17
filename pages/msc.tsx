import { NextPage } from 'next'
import CoursesPage from '../components/pages/CoursesPage'
import { mscCourses } from '../data/courses'

const mscPage: NextPage = () => (
  <CoursesPage
    degree="Master's"
    period="September 2020 - November 2022"
    courses={mscCourses}
  />
)

export default mscPage
