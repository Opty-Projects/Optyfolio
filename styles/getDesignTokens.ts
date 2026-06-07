import type { PaletteMode, ThemeOptions } from '@mui/material'
import { bodyFontFamily, displayFontFamily } from './fonts'
import { warm } from './tokens'

const getDesignTokens = (mode: PaletteMode): ThemeOptions => {
  const dark = mode === 'dark'

  return {
    palette: {
      mode,
      primary: { main: dark ? warm.amber : '#c2410c' },
      secondary: { main: dark ? '#fb923c' : '#ea580c' },
      ...(dark
        ? {
            background: { default: '#0b0a08', paper: '#16130e' },
            text: {
              primary: 'rgba(244, 240, 233, 0.95)',
              secondary: 'rgba(244, 240, 233, 0.58)',
            },
            divider: 'rgba(255, 255, 255, 0.09)',
          }
        : {
            background: { default: '#faf7f2', paper: '#fffefc' },
            text: { primary: '#1b1610', secondary: '#5f574b' },
            divider: 'rgba(34, 17, 0, 0.08)',
          }),
    },
    shape: { borderRadius: 16 },
    typography: {
      fontFamily: bodyFontFamily,
      fontSize: 14,
      h1: {
        fontFamily: displayFontFamily,
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontFamily: displayFontFamily,
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h3: {
        fontFamily: displayFontFamily,
        fontWeight: 600,
        letterSpacing: '-0.015em',
      },
      h4: {
        fontFamily: displayFontFamily,
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      h5: { fontFamily: displayFontFamily, fontWeight: 600 },
      h6: { fontFamily: displayFontFamily, fontWeight: 600 },
      button: { textTransform: 'none', fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          // Body colour is only seen on overscroll — <AuroraLayer> paints the page bg.
          'html, body, #__next': { height: '100%' },
          body: { backgroundColor: dark ? '#0b0a08' : '#faf7f2' },
          '::selection': { backgroundColor: warm.amber, color: '#1a1206' },
          // Mode-independent so it isn't affected by SSR global-style ordering.
          '*::-webkit-scrollbar': { width: 10, height: 10 },
          '*::-webkit-scrollbar-track': { background: 'transparent' },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(128, 128, 128, 0.35)',
            borderRadius: 8,
            border: '2px solid transparent',
            backgroundClip: 'padding-box',
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(249, 115, 22, 0.6)',
          },
        },
      },
      MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
      MuiLink: {
        defaultProps: { underline: 'hover', color: 'primary' },
        styleOverrides: {
          root: { fontWeight: 600, textUnderlineOffset: '3px' },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: { root: { borderRadius: 999, paddingInline: 20 } },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            backgroundColor: 'rgba(24,24,33,0.92)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.08)',
            fontSize: 12,
            fontWeight: 500,
            padding: '6px 10px',
          },
        },
      },
    },
  }
}

export default getDesignTokens
