import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect } from 'react'
import { Tabs } from '@mui/material'
import observeSmoothStepInElements from '../../../utils/smoothStepIn'
import Footer from '../Footer'
import { AppBarCard, AppBarTab, Container, ContentPage } from './styles'

export const pages: Record<string, string> = {
  '/': 'About',
  '/bsc': "Bachelor's",
  '/msc': "Master's",
}

const Page: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  useEffect(observeSmoothStepInElements, [router.pathname, router.query])

  return (
    <Container>
      <AppBarCard>
        <Tabs
          value={router.pathname}
          onChange={(_, pathname) => router.push(pathname)}
          textColor="primary"
          variant="scrollable"
        >
          {Object.entries(pages).map(([pathname, name]) => (
            <AppBarTab key={`tab-${pathname}`} label={name} value={pathname} />
          ))}
        </Tabs>
      </AppBarCard>
      <ContentPage>{children}</ContentPage>
      <Footer />
    </Container>
  )
}

export default Page
