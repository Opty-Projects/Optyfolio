import { keyframes } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { easing, glass, glassHover } from '../../../styles/tokens'

const smoothStepIn = keyframes({
  '0%': { opacity: 0, transform: 'translateY(24px) scale(0.985)' },
  '100%': { opacity: 1, transform: 'translateY(0) scale(1)' },
})

export const CardContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadius,
  ...glass(theme),
  transition: `transform 0.4s ${easing.spring}, box-shadow 0.4s ${easing.smooth}, border-color 0.4s ${easing.smooth}`,
  '&:hover': glassHover(theme),
  // Scroll-reveal — hidden until the IntersectionObserver adds `.active`.
  '&.smoothStepIn': { opacity: 0 },
  '&.smoothStepIn.active': {
    opacity: 1,
    animation: `${smoothStepIn} 0.7s ${easing.spring} both`,
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
    '&.smoothStepIn, &.smoothStepIn.active': { opacity: 1, animation: 'none' },
    '&:hover': { transform: 'none' },
  },
}))
