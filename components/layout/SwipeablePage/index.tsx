import React, { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import SwipeableViews from 'react-swipeable-views'
import { Tab, Tabs } from '@mui/material'
import { useTheme } from '@mui/styles'
import { bscCourses, mscCourses } from '../../../data'
import About from '../../pages/About'
import CoursesPage from '../../pages/CoursesPage'
import TabPanel from '../../shared/TabPanel'
import { useStyles } from './styles'

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
  const classes = useStyles()
  const [page, setPage] = useState(0)

  const changePage = useCallback((page: number) => {
    window.location.hash = pages[page].hash
    setPage(page)
  }, [])

  useEffect(() => {
    const page = pages.findIndex((page) => page.hash === window.location.hash)
    setPage(page < 0 ? 0 : page)
  }, [])

  return (
    <>
      <div className={classes.appBarContainer}>
        <Tabs
          value={page}
          onChange={(_, page) => changePage(page)}
          textColor="primary"
          variant="scrollable"
        >
          {pages.map(({ name }, index) => (
            <Tab
              key={`tab-${index}`}
              className={classes.tab}
              label={name}
              value={index}
            />
          ))}
        </Tabs>
      </div>
      <SwipeableViews
        className={classes.swipeableView}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={page}
        onChangeIndex={changePage}
      >
        {pages.map(({ node }, index) => (
          <TabPanel
            key={`tab-component-${index}`}
            index={index}
            value={page}
            dir={theme.direction}
          >
            {node}
          </TabPanel>
        ))}
      </SwipeableViews>
    </>
  )
}

export default SwipeablePage
