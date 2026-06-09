import { ElementType } from 'react'
import { IconButton, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import { easing } from '../../../styles/tokens'
import { CardContainer } from '../../shared/Card/styles'

export const FooterContainer = styled(CardContainer)(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'center',
  gap: theme.spacing(2),
  width: 'calc(100% - 32px)',
  maxWidth: 1080,
  marginInline: 'auto',
  marginBottom: theme.spacing(3),
  '&:hover': { transform: 'none' },
  [theme.breakpoints.up('sm')]: { width: 'calc(100% - 48px)' },
}))

export const FooterNav = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1.5),
}))

export const FooterNavLink = styled(Link)<{ component?: ElementType }>(
  ({ theme }) => ({
    fontSize: '0.875rem',
    fontWeight: 600,
    color: theme.palette.text.secondary,
    textDecoration: 'none',
    transition: `color 0.2s ${easing.smooth}`,
    '&:hover': { color: theme.palette.primary.main },
  }),
)

export const FooterSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
}))

export const FooterLinksGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  padding: theme.spacing(0, 1),
}))

export const FooterLinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}))

/** Muted icon button that lifts and warms to the accent colour on hover. */
export const SocialIconButton = styled(IconButton)<{
  href?: string
  target?: string
  rel?: string
}>(({ theme }) => ({
  color: theme.palette.text.secondary,
  transition: `color 0.2s ${easing.smooth}, transform 0.2s ${easing.smooth}`,
  '&:hover': {
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
}))
