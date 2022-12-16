import { groupBy, isEmpty } from 'lodash'
import { FC, useMemo, useState } from 'react'
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
  ToggleButton,
  ToggleButtonGroup,
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
  ToggleButtonContent,
} from './styles'

export interface CoursesPageProps {
  degree: string
  period: string
  courses: Course[]
}

const CoursesPage: FC<CoursesPageProps> = ({ degree, period, courses }) => {
  const theme = useTheme()
  const [grouping, setGrouping] = useState<'period' | 'branch' | 'score'>(
    'period'
  )
  const [sorting, setSorting] = useState<'asc' | 'desc'>('desc')
  const sortTooltip = `Sort ${sorting === 'asc' ? 'desc' : 'asc'}ending`
  const sortArrow = sorting === 'desc' ? <ArrowDownward /> : <ArrowUpward />

  const coursesWeightedAvg = useMemo(
    () => getCoursesWeightedAvg(courses),
    [courses]
  )
  const groupedCourses = useMemo(
    () =>
      Object.entries(groupBy(courses, grouping)).sort(([a], [b]) =>
        sorting === 'asc' ? a.localeCompare(b) : b.localeCompare(a)
      ),
    [courses, grouping, sorting]
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
        <ToggleButtonGroup
          value={grouping}
          onChange={(_, grouping) => {
            if (grouping) setGrouping(grouping)
            else setSorting((sorting) => (sorting === 'asc' ? 'desc' : 'asc'))
          }}
          exclusive
          color="primary"
        >
          <ToggleButton value="period">
            <Tooltip
              title={grouping === 'period' ? sortTooltip : 'Group by period'}
            >
              <ToggleButtonContent>
                <CalendarToday />
                {grouping === 'period' && sortArrow}
              </ToggleButtonContent>
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="branch">
            <Tooltip
              title={grouping === 'branch' ? sortTooltip : 'Group by branch'}
            >
              <ToggleButtonContent>
                <Category />
                {grouping === 'branch' && sortArrow}
              </ToggleButtonContent>
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="score">
            <Tooltip
              title={grouping === 'score' ? sortTooltip : 'Group by score'}
            >
              <ToggleButtonContent>
                <MilitaryTech />
                {grouping === 'score' && sortArrow}
              </ToggleButtonContent>
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </CourseSection>
      {groupedCourses?.map(([group, courses]) => (
        <Grid key={`${grouping}-${group}`} container spacing={2}>
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
                  {!isEmpty(links) && (
                    <CourseLinksContainer>
                      {links!.map(({ href, Icon, color, tooltip }) => (
                        <Tooltip
                          key={`${grouping}-${group}-${name}-${href}`}
                          title={tooltip}
                        >
                          <IconButton href={href} target="_blank">
                            <Icon color={color || theme.palette.text.primary} />
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
