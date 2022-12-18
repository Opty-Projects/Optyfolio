import { keyframes } from '@emotion/react'
import { styled } from '@mui/system'

const fontSize = {
  sm: 35,
  md: 70,
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
  fontFamily: ['Solway', 'serif'].join(','),
  fontWeight: 800,
  cursor: 'default',
  fontSize: fontSize['md'],
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize['sm'],
  },
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
  '&.active': {
    display: 'block',
    animation: `${squish} 1s ease-in-out`,
    [theme.breakpoints.down('sm')]: {
      animation: `${squish} 1s ease-in-out`,
    },
  },
}))
