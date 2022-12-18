import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useContext, useEffect } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { IconButton, Tabs, Tooltip, useTheme } from '@mui/material'
import { orange, yellow } from '@mui/material/colors'
import { PaletteModeContext } from '../../../pages/_app'
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
  const theme = useTheme()
  const { togglePaletteMode } = useContext(PaletteModeContext)
  useEffect(observeSmoothStepInElements, [
    router.pathname,
    router.query,
    theme.palette.mode,
  ])

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
        <Tooltip
          title={theme.palette.mode === 'dark' ? 'Light mode' : 'Dark mode'}
        >
          <IconButton onClick={togglePaletteMode}>
            {theme.palette.mode === 'dark' ? (
              <LightMode sx={{ color: yellow[700] }} />
            ) : (
              <DarkMode sx={{ color: orange[600] }} />
            )}
          </IconButton>
        </Tooltip>
      </AppBarCard>
      <ContentPage>{children}</ContentPage>
      <Footer />
    </Container>
  )
}

export default Page
