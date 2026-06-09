import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useEffect, useMemo, useState } from 'react'
import {
  ArrowDownward,
  ArrowUpward,
  CalendarToday,
  Category,
  MilitaryTech,
  SearchRounded,
} from '@mui/icons-material'
import {
  Box,
  capitalize,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { Course } from '../../../data/courses'
import { warmGradientStrong } from '../../../styles/tokens'
import { getCoursesWeightedAvg } from '../../../utils/courses'
import { groupBy } from '../../../utils/groupBy'
import observeSmoothStepInElements from '../../../utils/smoothStepIn'
import Card from '../../shared/Card'
import GradientText from '../../shared/GradientText'
import {
  CourseLinksContainer,
  CourseScoreContainer,
  CourseSection,
  GroupButton,
  GroupButtonContent,
  GroupHeader,
} from './styles'

export interface CoursesPageProps {
  degree: string
  period: string
  courses: Course[]
}

const groupings = ['period', 'branch', 'score'] as const
type Grouping = (typeof groupings)[number]
const toggleSort = (sort: 'asc' | 'desc') => (sort === 'asc' ? 'desc' : 'asc')

interface RouterQuery {
  grouping?: Grouping
  sort?: 'asc' | 'desc'
}

const groupingIcons = {
  period: <CalendarToday fontSize="small" />,
  branch: <Category fontSize="small" />,
  score: <MilitaryTech fontSize="small" />,
}

const CoursesPage: FC<CoursesPageProps> = ({ degree, period, courses }) => {
  const theme = useTheme()
  const router = useRouter()
  const { grouping: rawGrouping, sort: rawSort } = router.query as RouterQuery
  // Validate URL params so a crafted ?grouping=foo can't break grouping.
  const grouping: Grouping = groupings.includes(rawGrouping as Grouping)
    ? (rawGrouping as Grouping)
    : 'period'
  const sort: 'asc' | 'desc' = rawSort === 'asc' ? 'asc' : 'desc'
  const sortTooltip = `Sort ${toggleSort(sort)}ending`
  const sortArrow =
    sort === 'desc' ? (
      <ArrowDownward fontSize="small" />
    ) : (
      <ArrowUpward fontSize="small" />
    )

  const [search, setSearch] = useState('')

  const coursesWeightedAvg = useMemo(
    () => getCoursesWeightedAvg(courses),
    [courses],
  )
  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase()
    if (!query) return courses
    return courses.filter(
      ({ name, branch }) =>
        name.toLowerCase().includes(query) ||
        branch.toLowerCase().includes(query),
    )
  }, [courses, search])
  const groupedCourses = useMemo(
    () =>
      Object.entries(groupBy(filteredCourses, grouping)).sort(([a], [b]) =>
        sort === 'asc' ? a.localeCompare(b) : b.localeCompare(a),
      ),
    [filteredCourses, grouping, sort],
  )

  // Re-observe on list change so cards re-added when clearing search aren't stuck hidden.
  useEffect(observeSmoothStepInElements, [groupedCourses])

  return (
    <>
      <Card>
        <Grid
          container
          spacing={2}
          sx={{ width: '100%', alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h6">
              Bologna {degree} Degree in Computer Science & Engineering
            </Typography>
            <Typography color="textSecondary">
              <Link
                href="https://tecnico.ulisboa.pt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instituto Superior Técnico
              </Link>{' '}
              · {period}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <CourseScoreContainer>
              <GradientText
                sx={{ fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}
              >
                {coursesWeightedAvg.toFixed(1)}
              </GradientText>
              <Typography variant="body2" color="textSecondary">
                GPA · out of 20
              </Typography>
            </CourseScoreContainer>
          </Grid>
        </Grid>
      </Card>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          width: '100%',
        }}
      >
        <TextField
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search courses…"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchRounded fontSize="small" />
                </InputAdornment>
              ),
            },
          }}
          sx={{
            flex: 1,
            minWidth: 200,
            maxWidth: 360,
            '& .MuiOutlinedInput-root': { borderRadius: 999 },
          }}
        />
        <CourseSection>
          <Typography color="textSecondary">Group by</Typography>
          <GroupButtonContent>
            {groupings.map((group) => {
              const active = grouping === group
              return (
                <Tooltip
                  key={`group-${group}`}
                  title={active ? sortTooltip : `Group by ${group}`}
                >
                  <GroupButton
                    value={group}
                    aria-label={active ? sortTooltip : `Group by ${group}`}
                    onClick={() =>
                      router.replace({
                        query: {
                          grouping: group,
                          sort: active ? toggleSort(sort) : sort,
                        },
                      })
                    }
                    sx={{
                      color: active ? '#fff' : 'text.secondary',
                      borderColor: active ? 'transparent' : 'divider',
                      backgroundImage: active ? warmGradientStrong : 'none',
                      '&:hover': {
                        backgroundImage: active ? warmGradientStrong : 'none',
                        borderColor: active ? 'transparent' : 'primary.main',
                      },
                    }}
                  >
                    <GroupButtonContent>
                      {groupingIcons[group]}
                      {active && sortArrow}
                    </GroupButtonContent>
                  </GroupButton>
                </Tooltip>
              )
            })}
          </GroupButtonContent>
        </CourseSection>
      </Box>

      {groupedCourses.length === 0 && (
        <Typography color="textSecondary" sx={{ textAlign: 'center', py: 4 }}>
          No courses match “{search}”.
        </Typography>
      )}

      {groupedCourses.map(([group, groupCourses]) => (
        <Grid
          key={`courses-${grouping}-${group}`}
          container
          spacing={2}
          sx={{ width: '100%' }}
        >
          <Grid size={12}>
            <GroupHeader>
              {groupingIcons[grouping]}
              <Typography variant="body2" color="textSecondary">
                {capitalize(grouping)}
              </Typography>
              <Typography sx={{ fontWeight: 600 }}>{group}</Typography>
            </GroupHeader>
          </Grid>
          {groupCourses.map(({ name, href, score, period, links, branch }) => (
            <Grid key={`${grouping}-${group}-${name}`} size={{ xs: 12, md: 6 }}>
              <Card>
                <div>
                  <Link href={href} target="_blank" rel="noopener noreferrer">
                    {name}
                  </Link>
                  {grouping !== 'period' && (
                    <CourseSection>
                      <CalendarToday
                        sx={{ fontSize: 'medium', color: 'text.secondary' }}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {period}
                      </Typography>
                    </CourseSection>
                  )}
                  {grouping !== 'branch' && (
                    <CourseSection>
                      <Category
                        sx={{ fontSize: 'medium', color: 'text.secondary' }}
                      />
                      <Typography variant="body2" color="textSecondary">
                        {branch}
                      </Typography>
                    </CourseSection>
                  )}
                </div>
                <CourseSection>
                  {links && links.length > 0 && (
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
                            size="small"
                          >
                            {typeof Icon === 'string' ? (
                              <Image
                                src={Icon}
                                alt={tooltip}
                                width={28}
                                height={28}
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
                    <GradientText
                      sx={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        lineHeight: 1,
                      }}
                    >
                      {score}
                    </GradientText>
                    <Typography variant="body2" color="textSecondary">
                      Score
                    </Typography>
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
