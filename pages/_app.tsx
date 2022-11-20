import { AppProps } from 'next/app'
import Head from 'next/head'
import { useMemo } from 'react'
import { CssBaseline, useMediaQuery } from '@mui/material'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles'
import getDesignTokens from '../styles/getDesignTokens'

function MyApp({ Component, pageProps }: AppProps) {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode])

  return (
    <>
      <Head>
        <title>Optyfolio</title>
        <meta name="description" content="Ricardo Grade's portfolio" />
        <link rel="icon" href="/Portfolio.png" />
      </Head>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default MyApp
