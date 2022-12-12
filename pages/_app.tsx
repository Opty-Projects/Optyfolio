import { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { CssBaseline } from '@mui/material'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import MessagingAction from '../components/messaging/MessagingAction'
import getDesignTokens from '../styles/getDesignTokens'

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useMemo(() => createTheme(getDesignTokens('dark')), [])

  return (
    <>
      <Head>
        <title>Optyfolio</title>
        <meta name="description" content="Ricardo Grade's portfolio" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
          <MessagingAction />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
