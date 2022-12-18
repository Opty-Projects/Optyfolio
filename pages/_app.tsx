// Official example:
// https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
import { AppProps } from 'next/app'
import Head from 'next/head'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Page from '../components/layout/Page'
import MessagingAction from '../components/messaging/MessagingAction'
import getDesignTokens from '../styles/getDesignTokens'
import createEmotionCache from '../utils/createEmotionCache'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const PaletteModeContext = createContext<{
  togglePaletteMode: () => void
}>({ togglePaletteMode: () => null })

const clientSideEmotionCache = createEmotionCache()
const localStorage = typeof window !== 'undefined' ? window.localStorage : null
const description = `Ricardo is a Software Engineer passionate about building scalable and reliable applications that offer a good user experience.
He highly values the quality and cleanliness of the code he develops.
In his spare time, he likes to watch series, play video games, have dinner and carry out various activities with friends, and of course, learn new frameworks and technologies that allow him to improve his skills as a developer.`
const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const [paletteMode, setPaletteMode] = useState(
    (localStorage?.getItem('paletteMode') || 'dark') as PaletteMode
  )
  const togglePaletteMode = useCallback(
    () =>
      setPaletteMode((prev) => {
        const paletteMode = prev === 'dark' ? 'light' : 'dark'
        localStorage?.setItem('paletteMode', paletteMode)
        return paletteMode
      }),
    []
  )
  const theme = useMemo(
    () => createTheme(getDesignTokens(paletteMode)),
    [paletteMode]
  )

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null // Prevents the page from flashing

  return (
    <>
      <Head>
        <title>Optyfolio</title>
        <link rel="icon" href="/portfolio.png" />
        <meta name="title" property="og:title" content="Optyfolio" />
        <meta name="type" property="og:type" content="Portfolio" />
        <meta
          name="url"
          property="og:url"
          content="https://ricardograde.dev/"
        />
        <meta
          name="image"
          property="og:image"
          content="https://ricardograde.dev/portfolio.png"
        />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta name="author" property="og:author" content="Ricardo Grade" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PaletteModeContext.Provider value={{ togglePaletteMode }}>
            <Page>
              <Component {...pageProps} />
            </Page>
            <MessagingAction />
          </PaletteModeContext.Provider>
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

export default MyApp
