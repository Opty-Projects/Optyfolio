import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useContext, useEffect } from 'react'
import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton, Tooltip, useTheme } from '@mui/material'
import { PaletteModeContext } from '../../../pages/_app'
import observeSmoothStepInElements from '../../../utils/smoothStepIn'
import Footer from '../Footer'
import {
  AppBarCard,
  AuroraLayer,
  BlobAmber,
  BlobCoral,
  BlobOrange,
  BrandLink,
  Container,
  ContentPage,
} from './styles'

const Page: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const theme = useTheme()
  const { togglePaletteMode } = useContext(PaletteModeContext)
  const isDark = theme.palette.mode === 'dark'

  useEffect(observeSmoothStepInElements, [
    router.pathname,
    router.query,
    theme.palette.mode,
  ])

  return (
    <>
      <AuroraLayer aria-hidden>
        <BlobAmber />
        <BlobOrange />
        <BlobCoral />
      </AuroraLayer>
      <Container>
        <AppBarCard>
          <BrandLink component={NextLink} href="/">
            Ricardo Grade
          </BrandLink>
          <Tooltip title={isDark ? 'Light mode' : 'Dark mode'}>
            <IconButton
              onClick={togglePaletteMode}
              sx={{ color: 'primary.main' }}
              aria-label={
                isDark ? 'Switch to light mode' : 'Switch to dark mode'
              }
            >
              {isDark ? <LightModeRounded /> : <DarkModeRounded />}
            </IconButton>
          </Tooltip>
        </AppBarCard>
        <ContentPage>{children}</ContentPage>
        <Footer />
      </Container>
    </>
  )
}

export default Page
