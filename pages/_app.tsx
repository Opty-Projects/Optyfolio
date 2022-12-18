// Official example:
// https://github.com/mui/material-ui/blob/master/examples/nextjs-with-typescript/pages/_app.tsx
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Page from '../components/layout/Page'
import MessagingAction from '../components/messaging/MessagingAction'
import getDesignTokens from '../styles/getDesignTokens'
import createEmotionCache from '../utils/createEmotionCache'

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const description = `Ricardo is a Software Engineer passionate about building scalable and reliable applications that offer a good user experience.
He highly values the quality and cleanliness of the code he develops.
In his spare time, he likes to watch series, play video games, have dinner and carry out various activities with friends, and of course, learn new frameworks and technologies that allow him to improve his skills as a developer.`
const clientSideEmotionCache = createEmotionCache()
const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  const theme = useMemo(() => createTheme(getDesignTokens('dark')), [])

  return (
    <CacheProvider value={emotionCache}>
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Page>
          <Component {...pageProps} />
        </Page>
        <MessagingAction />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
