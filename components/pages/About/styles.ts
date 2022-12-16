import { Avatar, LinearProgress } from '@mui/material'
import { styled } from '@mui/system'
import { CardContainer } from '../../shared/Card/styles'

export const AboutContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
}))

export const AboutSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

export const AboutHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
}))

export const AboutAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  margin: 'auto',
  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1.1)',
  },
}))

export const SkillGroupCard = styled(CardContainer)(({ theme }) => ({
  height: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: theme.spacing(2),
}))

export const SkillContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}))

export const SkillProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  borderRadius: theme.shape.borderRadius,
}))
