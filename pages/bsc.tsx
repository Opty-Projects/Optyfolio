import { NextPage } from 'next'
import CoursesPage from '../components/pages/CoursesPage'
import { bscCourses } from '../data/courses'

const bscPage: NextPage = () => (
  <CoursesPage
    degree="Bachelor's"
    period="September 2017 - June 2020"
    courses={bscCourses}
  />
)

export default bscPage
