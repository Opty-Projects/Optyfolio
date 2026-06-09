import { keyframes } from '@emotion/react'
import { ElementType } from 'react'
import { Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { displayFontFamily } from '../../../styles/fonts'
import { easing, warm } from '../../../styles/tokens'
import { CardContainer } from '../../shared/Card/styles'

export const Container = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  minHeight: '100dvh',
  display: 'flex',
  flexDirection: 'column',
  // Owns the base text colour so it doesn't stick across SSR theme switches.
  color: theme.palette.text.primary,
}))

/* ---------------------------------------------------------------- Aurora --- */

const drift = (x: string, y: string) =>
  keyframes({
    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
    '33%': { transform: `translate(${x}, ${y}) scale(1.12)` },
    '66%': {
      transform: `translate(calc(${x} * -0.6), calc(${y} * 0.5)) scale(0.94)`,
    },
  })

export const AuroraLayer = styled('div')(({ theme }) => {
  const dark = theme.palette.mode === 'dark'
  return {
    position: 'fixed',
    inset: 0,
    zIndex: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    // Owns the visible page background so it switches cleanly with the theme.
    backgroundColor: theme.palette.background.default,
    backgroundImage: dark
      ? 'radial-gradient(1200px 700px at 80% -10%, rgba(249, 168, 37, 0.14), transparent 60%), radial-gradient(900px 600px at -10% 25%, rgba(249, 115, 22, 0.09), transparent 55%)'
      : 'radial-gradient(1200px 700px at 80% -10%, rgba(234, 88, 12, 0.10), transparent 60%), radial-gradient(900px 600px at -10% 25%, rgba(245, 158, 11, 0.08), transparent 55%)',
    // Faint technical dot-grid, faded towards the edges.
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      backgroundImage: `radial-gradient(circle at center, ${
        dark ? 'rgba(255,255,255,0.6)' : 'rgba(17,17,34,0.5)'
      } 1px, transparent 1px)`,
      backgroundSize: '34px 34px',
      opacity: 0.16,
      WebkitMaskImage:
        'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)',
      maskImage:
        'radial-gradient(ellipse 80% 70% at 50% 40%, black, transparent 75%)',
    },
  }
})

const Blob = styled('div')({
  position: 'absolute',
  borderRadius: '50%',
  filter: 'blur(90px)',
  willChange: 'transform',
  '@media (prefers-reduced-motion: reduce)': { animation: 'none !important' },
})

export const BlobAmber = styled(Blob)(({ theme }) => ({
  top: '-12%',
  left: '-8%',
  width: 520,
  height: 520,
  backgroundColor: warm.amber,
  opacity: theme.palette.mode === 'dark' ? 0.28 : 0.2,
  animation: `${drift('22vw', '14vh')} 26s ${easing.smooth} infinite`,
}))

export const BlobOrange = styled(Blob)(({ theme }) => ({
  top: '4%',
  right: '-10%',
  width: 460,
  height: 460,
  backgroundColor: warm.orange,
  opacity: theme.palette.mode === 'dark' ? 0.22 : 0.16,
  animation: `${drift('-18vw', '18vh')} 32s ${easing.smooth} infinite`,
}))

export const BlobCoral = styled(Blob)(({ theme }) => ({
  bottom: '-16%',
  left: '32%',
  width: 560,
  height: 560,
  backgroundColor: warm.coral,
  opacity: theme.palette.mode === 'dark' ? 0.22 : 0.14,
  animation: `${drift('-14vw', '-12vh')} 30s ${easing.smooth} infinite`,
}))

/* ------------------------------------------------------------------- Nav --- */

export const AppBarCard = styled(CardContainer)(({ theme }) => ({
  position: 'sticky',
  top: theme.spacing(2),
  zIndex: 10,
  alignSelf: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  padding: theme.spacing(0.5, 1),
  marginTop: theme.spacing(2),
  width: 'auto',
  maxWidth: 'calc(100% - 32px)',
  borderRadius: 999,
  '&:hover': { transform: 'none' },
}))

export const BrandLink = styled(Link)<{ component?: ElementType }>(
  ({ theme }) => ({
    fontFamily: displayFontFamily,
    fontWeight: 600,
    fontSize: '1.05rem',
    letterSpacing: '-0.02em',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    padding: theme.spacing(0.5, 1.5),
    borderRadius: 999,
    transition: `color 0.25s ${easing.smooth}`,
    '&:hover': { color: theme.palette.primary.main },
  }),
)

export const ContentPage = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: 1080,
  marginInline: 'auto',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(4),
  padding: theme.spacing(4, 2),
  [theme.breakpoints.up('sm')]: { padding: theme.spacing(5, 3) },
}))
