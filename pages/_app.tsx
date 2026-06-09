import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  createContext,
  useCallback,
  useMemo,
  useSyncExternalStore,
} from 'react'
import { CssBaseline, PaletteMode } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Analytics } from '@vercel/analytics/react'
import Page from '../components/layout/Page'
import getDesignTokens from '../styles/getDesignTokens'

export const PaletteModeContext = createContext<{
  togglePaletteMode: () => void
}>({ togglePaletteMode: () => null })

const description =
  'Ricardo Grade — a Product Engineer shaping and bringing ideas to life. ' +
  'Founding-engineer experience taking products and features 0→1 and owning them end-to-end.'

// localStorage-backed palette mode via useSyncExternalStore — SSR-safe, syncs across tabs.
const STORAGE_KEY = 'paletteMode'
const isMode = (value: string | null): value is PaletteMode =>
  value === 'light' || value === 'dark'

const getSnapshot = (): PaletteMode => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return isMode(stored) ? stored : 'dark'
  } catch {
    return 'dark'
  }
}
const getServerSnapshot = (): PaletteMode => 'dark'

const listeners = new Set<() => void>()
const subscribe = (onStoreChange: () => void) => {
  listeners.add(onStoreChange)
  window.addEventListener('storage', onStoreChange)
  return () => {
    listeners.delete(onStoreChange)
    window.removeEventListener('storage', onStoreChange)
  }
}
const setStoredMode = (mode: PaletteMode) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, mode)
  } catch {
    // Ignore — storage may be unavailable (private mode, etc.).
  }
  listeners.forEach((listener) => listener())
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const paletteMode = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  )
  const togglePaletteMode = useCallback(
    () => setStoredMode(paletteMode === 'dark' ? 'light' : 'dark'),
    [paletteMode],
  )
  const theme = useMemo(
    () => createTheme(getDesignTokens(paletteMode)),
    [paletteMode],
  )

  return (
    <>
      <Head>
        <title>Ricardo Grade — Product Engineer</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content={description} />
        <meta name="author" content="Ricardo Grade" />
        <meta property="og:title" content="Ricardo Grade — Product Engineer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Optyfolio" />
        <meta
          property="og:url"
          content="https://optyfolio-rgrade.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://optyfolio-rgrade.vercel.app/avatar.jpg"
        />
        <meta property="og:description" content={description} />
        <meta
          name="theme-color"
          content={paletteMode === 'dark' ? '#0b0a08' : '#faf7f2'}
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PaletteModeContext.Provider value={{ togglePaletteMode }}>
          <Page>
            <Component {...pageProps} />
          </Page>
        </PaletteModeContext.Provider>
      </ThemeProvider>
      <Analytics />
    </>
  )
}

export default MyApp
