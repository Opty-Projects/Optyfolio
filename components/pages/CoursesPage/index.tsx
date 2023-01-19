import { groupBy, isEmpty } from 'lodash'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useMemo } from 'react'
import {
  ArrowDownward,
  ArrowUpward,
  CalendarToday,
  Category,
  MilitaryTech,
} from '@mui/icons-material'
import {
  capitalize,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { Course } from '../../../data/courses'
import { getCoursesWeightedAvg } from '../../../utils/courses'
import Card from '../../shared/Card'
import {
  CourseLinksContainer,
  CourseScoreContainer,
  CourseSection,
  GroupButton,
  GroupButtonContent,
} from './styles'

export interface CoursesPageProps {
  degree: string
  period: string
  courses: Course[]
}

const groupings = ['period', 'branch', 'score']
const toggleSort = (sort: 'asc' | 'desc') => (sort === 'asc' ? 'desc' : 'asc')

interface RouterQuery {
  grouping?: typeof groupings[number]
  sort?: 'asc' | 'desc'
}

const groupingIcons = {
  period: <CalendarToday />,
  branch: <Category />,
  score: <MilitaryTech />,
}

const CoursesPage: FC<CoursesPageProps> = ({ degree, period, courses }) => {
  const theme = useTheme()
  const router = useRouter()
  const { grouping = 'period', sort = 'desc' } = router.query as RouterQuery
  const sortTooltip = `Sort ${toggleSort(sort)}ending`
  const sortArrow = sort === 'desc' ? <ArrowDownward /> : <ArrowUpward />

  const coursesWeightedAvg = useMemo(
    () => getCoursesWeightedAvg(courses),
    [courses]
  )
  const groupedCourses = useMemo(
    () =>
      Object.entries(groupBy(courses, grouping)).sort(([a], [b]) =>
        sort === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
      ),
    [courses, grouping, sort]
  )

  return (
    <>
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography>
              Bologna {degree} Degree in Computer Science &amp; Engineering @{' '}
              <Link
                href="https://tecnico.ulisboa.pt/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Instituto Superior Técnico
              </Link>
            </Typography>
            <Typography fontSize="small" color="textSecondary">
              {period}
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <CourseScoreContainer>
              <Typography fontSize="large" fontWeight={600}>
                {coursesWeightedAvg.toFixed(1)}
              </Typography>
              <Typography fontSize="small" color="textSecondary">
                GPA
              </Typography>
            </CourseScoreContainer>
          </Grid>
        </Grid>
      </Card>
      <CourseSection>
        <Typography color="textSecondary">Group by:</Typography>
        <GroupButtonContent>
          {groupings.map((group) => (
            <Tooltip
              key={`group-${group}`}
              title={grouping === group ? sortTooltip : `Group by ${group}`}
            >
              <GroupButton
                value={group}
                color={grouping === group ? 'primary' : 'default'}
                onClick={() =>
                  router.replace({
                    query: {
                      grouping: group,
                      sort: grouping === group ? toggleSort(sort) : sort,
                    },
                  })
                }
                sx={{
                  borderColor: grouping === group ? 'primary.main' : 'divider',
                }}
              >
                <GroupButtonContent>
                  {groupingIcons[group as keyof typeof groupingIcons]}
                  {grouping === group && sortArrow}
                </GroupButtonContent>
              </GroupButton>
            </Tooltip>
          ))}
        </GroupButtonContent>
      </CourseSection>
      {groupedCourses?.map(([group, courses]) => (
        <Grid key={`courses-${grouping}-${group}`} container spacing={2}>
          <Grid item xs={12}>
            <CourseSection>
              <Typography color="textSecondary">
                {capitalize(grouping)}:
              </Typography>
              <Typography>{group}</Typography>
            </CourseSection>
          </Grid>
          {courses.map(({ name, href, score, period, links, branch }) => (
            <Grid key={`${grouping}-${group}-${name}`} item xs={12} md={6}>
              <Card>
                <div>
                  <Link href={href} target="_blank" underline="hover">
                    {name}
                  </Link>
                  {grouping !== 'period' && (
                    <CourseSection>
                      <CalendarToday
                        sx={{ fontSize: 'medium', color: 'text.secondary' }}
                      />
                      <Typography fontSize="small" color="textSecondary">
                        {period}
                      </Typography>
                    </CourseSection>
                  )}
                  {grouping !== 'branch' && (
                    <CourseSection>
                      <Category
                        sx={{ fontSize: 'medium', color: 'text.secondary' }}
                      />
                      <Typography fontSize="small" color="textSecondary">
                        {branch}
                      </Typography>
                    </CourseSection>
                  )}
                </div>
                <CourseSection>
                  {links && !isEmpty(links) && (
                    <CourseLinksContainer>
                      {links.map(({ href, Icon, color, tooltip }) => (
                        <Tooltip
                          key={`${grouping}-${group}-${name}-${href}`}
                          title={tooltip}
                        >
                          <IconButton
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {typeof Icon === 'string' ? (
                              <Image
                                src={Icon}
                                alt="icon"
                                width={32}
                                height={32}
                                style={{ objectFit: 'contain' }}
                              />
                            ) : (
                              <Icon
                                color={color || theme.palette.text.primary}
                              />
                            )}
                          </IconButton>
                        </Tooltip>
                      ))}
                    </CourseLinksContainer>
                  )}
                  <CourseScoreContainer>
                    <Typography fontSize="large" fontWeight={600}>
                      {score}
                    </Typography>
                    <CourseSection>
                      <MilitaryTech
                        sx={{ fontSize: 'medium', color: 'text.secondary' }}
                      />
                      <Typography fontSize="small" color="textSecondary">
                        Score
                      </Typography>
                    </CourseSection>
                  </CourseScoreContainer>
                </CourseSection>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  )
}

export default CoursesPage
