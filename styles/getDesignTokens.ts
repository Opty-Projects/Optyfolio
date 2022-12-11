import { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: {
      mode,
      ...(mode === 'light' && {
        primary: {
          main: '#1565c0',
          contrastText: '#000000',
        },
        secondary: {
          main: '#c62828',
        },
        background: {
          paper: '#e3f2fd',
        },
      }),
      ...(mode === 'dark' && {
        primary: {
          main: '#f9a825',
          contrastText: '#ffffff',
        },
        secondary: {
          main: '#f44336',
        },
        background: {
          paper: '#212121',
        },
      }),
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
  } as ThemeOptions)

export default getDesignTokens
