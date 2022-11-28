import { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: {
      mode,
      ...(mode === 'light' && {
        primary: {
          main: '#1565c0',
          contrastText: '#fff',
        },
        secondary: {
          main: '#c62828',
          contrastText: '#000',
        },
        background: {
          paper: '#e3f2fd',
        },
      }),
      ...(mode === 'dark' && {
        primary: {
          main: '#2196f3',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f44336',
          contrastText: '#000',
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
