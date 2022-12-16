import { keyframes } from '@emotion/react'
import { styled } from '@mui/system'

const fontSize = {
  sm: 35,
  md: 70,
}

const getCharAnimation = (breakpoint: keyof typeof fontSize) =>
  keyframes({
    '50%': {
      fontSize: fontSize[breakpoint] * 2,
    },
  })

export const OuterCharSpan = styled('span')(({ theme }) => ({
  position: 'relative',
  cursor: 'default',
  fontFamily: ['Solway', 'serif'].join(','),
  fontWeight: 800,
  fontSize: fontSize['md'],
  [theme.breakpoints.down('sm')]: {
    fontSize: fontSize['sm'],
  },
}))

export const CharSpan = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  '&:hover': {
    color: theme.palette.primary.main,
  },
}))

export const AnimatedCharSpan = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  display: 'none',
  color: `${theme.palette.primary.main}60`,
  zIndex: -1,
  '&.active': {
    display: 'block',
    animation: `${getCharAnimation('md')} 1s ease`,
    [theme.breakpoints.down('sm')]: {
      animation: `${getCharAnimation('sm')} 1s ease`,
    },
  },
}))
