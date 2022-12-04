import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  outerChar: {
    position: 'relative',
    cursor: 'default',
    fontFamily: ['Solway', 'serif'].join(','),
    fontWeight: 800,
    fontSize: 70,
    [theme.breakpoints.down('sm')]: {
      fontSize: 35,
    },
  },
  char: {
    color: theme.palette.text.primary,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  animatedChar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    display: 'none',
    color: `${theme.palette.primary.main}60`,
    zIndex: -1,
  },
  animatedCharActive: {
    display: 'block',
    animation: '$pulsingChar 1s ease',
    [theme.breakpoints.down('sm')]: {
      animation: '$smPulsingChar 1s ease',
    },
  },
  '@keyframes pulsingChar': {
    '50%': {
      fontSize: 140,
      transform: 'translateX(-25%)',
    },
  },
  '@keyframes smPulsingChar': {
    '50%': {
      fontSize: 70,
      transform: 'translateX(-25%)',
    },
  },
}))
