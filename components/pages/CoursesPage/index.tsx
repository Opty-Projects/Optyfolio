import { groupBy } from 'lodash'
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
import { useStyles } from './styles'

export interface CoursesPageProps {
  degree: string
  period: string
  courses: Course[]
}

const CoursesPage: FC<CoursesPageProps> = ({ degree, period, courses }) => {
  const classes = useStyles()
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
            <Typography className={classes.title}>
              Bologna {degree} Degree in Computer Science &amp; Engineering @{' '}
              <Link
                href="https://tecnico.ulisboa.pt/"
                target="_blank"
                underline="hover"
              >
                Instituto Superior Técnico
              </Link>
            </Typography>
            <Typography className={classes.smallLabel}>{period}</Typography>
          </Grid>
          <Grid className={classes.score} item xs={12} md={4}>
            <Typography className={classes.value}>
              {coursesWeightedAvg.toFixed(1)}
            </Typography>
            <Typography className={classes.smallLabel}>GPA</Typography>
          </Grid>
        </Grid>
      </Card>
      <div className={classes.section}>
        <Typography className={classes.mediumLabel}>Group by:</Typography>
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
              <div className={classes.toggleButtonContent}>
                <CalendarToday />
                {grouping === 'period' && sortArrow}
              </div>
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="branch">
            <Tooltip
              title={grouping === 'branch' ? sortTooltip : 'Group by branch'}
            >
              <div className={classes.toggleButtonContent}>
                <Category />
                {grouping === 'branch' && sortArrow}
              </div>
            </Tooltip>
          </ToggleButton>
          <ToggleButton value="score">
            <Tooltip
              title={grouping === 'score' ? sortTooltip : 'Group by score'}
            >
              <div className={classes.toggleButtonContent}>
                <MilitaryTech />
                {grouping === 'score' && sortArrow}
              </div>
            </Tooltip>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      {groupedCourses?.map(([group, courses]) => (
        <Grid key={`${grouping}-${group}`} container spacing={2}>
          <Grid className={classes.section} item xs={12}>
            <Typography className={classes.mediumLabel}>
              {capitalize(grouping)}:
            </Typography>
            <Typography className={classes.title}>{group}</Typography>
          </Grid>
          {courses.map(({ name, href, score, period, links, branch }) => (
            <Grid key={`${grouping}-${group}-${name}`} item xs={12} md={6}>
              <Card>
                <div>
                  <Link
                    className={classes.title}
                    href={href}
                    target="_blank"
                    underline="hover"
                  >
                    {name}
                  </Link>
                  {grouping !== 'period' && (
                    <div className={classes.section}>
                      <CalendarToday className={classes.mediumLabel} />
                      <Typography className={classes.smallLabel}>
                        {period}
                      </Typography>
                    </div>
                  )}
                  {grouping !== 'branch' && (
                    <div className={classes.section}>
                      <Category className={classes.mediumLabel} />
                      <Typography className={classes.smallLabel}>
                        {branch}
                      </Typography>
                    </div>
                  )}
                </div>
                <div className={classes.section}>
                  {links?.length ? (
                    <div className={classes.links}>
                      {links.map(({ href, Icon, color, tooltip }) => (
                        <Tooltip
                          key={`${grouping}-${group}-${name}-${href}`}
                          title={tooltip}
                        >
                          <IconButton href={href} target="_blank">
                            <Icon color={color || theme.palette.text.primary} />
                          </IconButton>
                        </Tooltip>
                      ))}
                    </div>
                  ) : null}
                  <div className={classes.score}>
                    <Typography className={classes.value}>{score}</Typography>
                    <div className={classes.section}>
                      <MilitaryTech className={classes.mediumLabel} />
                      <Typography className={classes.smallLabel}>
                        Score
                      </Typography>
                    </div>
                  </div>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </>
  )
}

export default CoursesPage
