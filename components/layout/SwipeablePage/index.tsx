import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import { Tabs, useTheme } from '@mui/material'
import { bscCourses, mscCourses } from '../../../data/courses'
import observeSmoothStepInElements from '../../../utils/smoothStepIn'
import About from '../../pages/About'
import CoursesPage from '../../pages/CoursesPage'
import TabPanel from '../../shared/TabPanel'
import Footer from '../Footer'
import { AppBarCard, AppBarTab, Container, SwipeablePageViews } from './styles'

export const pages: {
  hash: string
  name: string
  node: ReactNode
}[] = [
  { hash: '#about', name: 'About', node: <About /> },
  {
    hash: '#bsc',
    name: "Bachelor's",
    node: (
      <CoursesPage
        degree="Bachelor's"
        period="September 2017 - June 2020"
        courses={bscCourses}
      />
    ),
  },
  {
    hash: '#msc',
    name: "Master's",
    node: (
      <CoursesPage
        degree="Master's"
        period="September 2020 - November 2022"
        courses={mscCourses}
      />
    ),
  },
]

const SwipeablePage: FC = () => {
  const theme = useTheme()
  const [page, setPage] = useState(0)

  const changePage = useCallback((page: number) => {
    window.location.hash = pages[page].hash
    setPage(page)
  }, [])

  useEffect(() => {
    const page = pages.findIndex((page) => page.hash === window.location.hash)
    setPage(page < 0 ? 0 : page)
  }, [])

  useEffect(observeSmoothStepInElements, [page])

  return (
    <Container>
      <AppBarCard>
        <Tabs
          value={page}
          onChange={(_, page) => changePage(page)}
          textColor="primary"
          variant="scrollable"
        >
          {pages.map(({ hash, name }, index) => (
            <AppBarTab key={`tab-${hash}`} label={name} value={index} />
          ))}
        </Tabs>
      </AppBarCard>
      <SwipeablePageViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={page}
        onChangeIndex={changePage}
      >
        {pages.map(({ hash, node }, index) => (
          <TabPanel
            key={`tab-panel-${hash}`}
            index={index}
            value={page}
            dir={theme.direction}
          >
            {node}
          </TabPanel>
        ))}
      </SwipeablePageViews>
      <Footer />
    </Container>
  )
}

export default SwipeablePage
