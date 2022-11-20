import { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: {
      mode,
      ...(mode === 'light' && {
        primary: {
          main: '#1976d2',
          contrastText: '#fff',
        },
        secondary: {
          main: '#c62828',
          contrastText: '#000',
        },
        background: {
          paper: '#eceff1',
        },
      }),
      ...(mode === 'dark' && {
        primary: {
          main: '#64b5f6',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f44336',
          contrastText: '#000',
        },
        background: {
          paper: '#1b1b1b',
        },
      }),
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
  } as ThemeOptions)

export default getDesignTokens
