import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'
import { easing, warmGradientSoft } from '../../../styles/tokens'

export const GroupButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 999,
  border: `1px solid ${theme.palette.divider}`,
  padding: theme.spacing(0.5, 1.25),
  transition: `all 0.2s ${easing.smooth}`,
  // Gradient must span the border-box, else the 1px border leaves a faint seam.
  backgroundOrigin: 'border-box',
}))

export const GroupButtonContent = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 4,
})

export const CourseSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(0.5),
}))

export const CourseScoreContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
})

export const CourseLinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  margin: theme.spacing(0, 1),
}))

export const GroupHeader = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 2),
  borderRadius: 999,
  border: `1px solid ${theme.palette.divider}`,
  backgroundImage: warmGradientSoft,
}))
