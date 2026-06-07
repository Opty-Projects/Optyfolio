import { keyframes } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { displayFontFamily } from '../../../styles/fonts'
import { easing } from '../../../styles/tokens'

const fontSize = {
  sm: 35,
  md: 68,
}

const squish = keyframes({
  '0%': {
    transform: 'scale(1,1)',
  },
  '25%': {
    transform: 'scale(1,0.5)',
  },
  '50%': {
    transform: 'scale(1,1.5)',
  },
  '75%': {
    transform: 'scale(1,0.75)',
  },
  '100%': {
    transform: 'scale(1,1)',
  },
})

export const CharSpan = styled('span')(({ theme }) => ({
  fontFamily: displayFontFamily,
  fontWeight: 700,
  letterSpacing: '-0.03em',
  cursor: 'default',
  fontSize: fontSize.md,
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize.sm,
  },
  color: theme.palette.text.primary,
  transition: `color 0.2s ${easing.smooth}`,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.active': {
    display: 'block',
    animation: `${squish} 1s ease-in-out`,
  },
}))
