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
        <meta name="description" content="Ricardo Grade's portfolio" />
        <link rel="icon" href="/portfolio.png" />
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
