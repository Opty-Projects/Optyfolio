import { keyframes } from '@emotion/react'
import { IconButton, LinearProgress } from '@mui/material'
import { styled } from '@mui/material/styles'
import { easing, warmGradient } from '../../../styles/tokens'
import GradientText from '../../shared/GradientText'
import { CardContainer } from '../../shared/Card/styles'

export const AboutContainer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(4),
}))

/* ------------------------------------------------------------------ Hero --- */

export const RoleTagline = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(-1),
}))

export const AboutHeader = styled(CardContainer)(({ theme }) => ({
  maxWidth: 860,
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: theme.spacing(3),
  padding: theme.spacing(4, 3),
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
}))

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-10px)' },
})

export const AvatarRing = styled('div')(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: 168,
  height: 168,
  borderRadius: '50%',
  padding: 5,
  backgroundImage: warmGradient,
  animation: `${float} 6s ${easing.smooth} infinite`,
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: -10,
    borderRadius: 'inherit',
    backgroundImage: warmGradient,
    filter: 'blur(26px)',
    opacity: 0.45,
    zIndex: -1,
  },
  [theme.breakpoints.down('sm')]: { width: 144, height: 144 },
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
}))

export const AvatarInner = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  borderRadius: '50%',
  overflow: 'hidden',
  border: `4px solid ${theme.palette.background.paper}`,
}))

export const BioColumn = styled('div')(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  [theme.breakpoints.down('sm')]: { alignItems: 'center' },
}))

/** Inline gradient highlight for words like "0→1" and "Clauding". */
export const Highlight = styled(GradientText)({
  fontWeight: 700,
})

export const SocialRow = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginTop: theme.spacing(1),
  [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
}))

/** Outlined icon button (LinkedIn, GitHub) that warms to the accent on hover. */
export const SocialIconButton = styled(IconButton)<{
  href?: string
  target?: string
  rel?: string
}>(({ theme }) => ({
  color: theme.palette.text.primary,
  border: `1px solid ${theme.palette.divider}`,
  transition: `color 0.2s ${easing.smooth}, border-color 0.2s ${easing.smooth}`,
  '&:hover': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}))

/* ---------------------------------------------------------------- Skills --- */

export const AboutSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1),
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
  gap: theme.spacing(0.75),
}))

export const SkillProgress = styled(LinearProgress)(({ theme }) => ({
  width: '100%',
  height: 6,
  borderRadius: 999,
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255,255,255,0.08)'
      : 'rgba(17,17,34,0.07)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 999,
    backgroundImage: warmGradient,
    transition: `transform 1.1s ${easing.spring}`,
  },
}))
