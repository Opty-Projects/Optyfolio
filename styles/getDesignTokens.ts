import { PaletteMode, ThemeOptions } from '@mui/material'

const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: '#1976d2',
            },
            background: {
              paper: '#e3f2fd',
            },
          }
        : {
            primary: {
              main: '#f9a825',
            },
            background: {
              paper: '#212121',
            },
          }),
    },
    typography: {
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
      fontWeight: 400,
      fontSize: 14,
    },
  } as ThemeOptions)

export default getDesignTokens
