import { styled } from '@mui/material/styles'
import { easing, glass, warm } from '../../../../styles/tokens'
import { CardContainer } from '../../../shared/Card/styles'

export const TimelineRoot = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
})

export const TimelineItem = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  gap: theme.spacing(2.5),
  paddingBottom: theme.spacing(4),
  '&:last-of-type': { paddingBottom: 0 },
  // Connector line, running through the marker column.
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 26,
    top: 26,
    bottom: 0,
    width: 2,
    transform: 'translateX(-50%)',
    background: `linear-gradient(to bottom, ${warm.amber}99, ${warm.orange}44)`,
  },
  '&:last-of-type::before': { display: 'none' },
}))

export const MarkerCol = styled('div')({
  position: 'relative',
  flexShrink: 0,
  width: 52,
  display: 'flex',
  justifyContent: 'center',
})

export const LogoBadge = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  width: 52,
  height: 52,
  borderRadius: 16,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  ...glass(theme),
  transition: `transform 0.3s ${easing.spring}`,
  '&:hover': { transform: 'scale(1.08)' },
}))

export const TimelineBody = styled('div')(({ theme }) => ({
  flex: 1,
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
  paddingTop: theme.spacing(0.5),
}))

export const TimelineHead = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(0.25),
}))

export const TimelineItemCard = styled(CardContainer)(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

export const TimelineItemSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}))

export const BulletList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2.5),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  '& li::marker': { color: theme.palette.primary.main },
}))

export const MediaSide = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginInline: 'auto',
}))

export const MediaThumb = styled('a')(({ theme }) => ({
  position: 'relative',
  width: 124,
  height: 124,
  borderRadius: '50%',
  overflow: 'hidden',
  flexShrink: 0,
  border: `2px solid ${theme.palette.divider}`,
  transition: `transform 0.3s ${easing.spring}, border-color 0.3s ${easing.smooth}`,
  '&:hover': {
    transform: 'scale(1.05)',
    borderColor: theme.palette.primary.main,
  },
}))
