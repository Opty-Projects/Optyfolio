import { keyframes } from '@emotion/react'
import { styled } from '@mui/system'

const smoothStepIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateY(50%)',
  },
  '100%': {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const CardContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.paper,
  WebkitBoxShadow: `0px 4px 8px -2px ${theme.palette.divider}`,
  MozBoxShadow: `0px 4px 8px -2px ${theme.palette.divider}`,
  boxShadow: `0px 4px 8px -2px ${theme.palette.divider}`,
  padding: theme.spacing(2),
  gap: theme.spacing(1),
  borderRadius: 4,
  border: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    WebkitBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
    MozBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
    boxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
    transition: 'all 0.3s ease-in-out',
  },
  '&.smoothStepIn': {
    opacity: 0,
  },
  '&.smoothStepIn.active': {
    opacity: 1,
    animation: `${smoothStepIn} 1s ease`,
  },
}))
