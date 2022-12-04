import { Course } from '../data/courses'

export const getCoursesWeightedAvg = (courseList: Course[]) => {
  const [sum, credits] = courseList.reduce(
    (acc, { score, credits }) => {
      acc[0] += score * credits
      acc[1] += credits
      return acc
    },
    [0, 0]
  )
  return sum / credits
}
