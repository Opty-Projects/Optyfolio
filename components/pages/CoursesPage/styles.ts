import { IconButton } from '@mui/material'
import { styled } from '@mui/system'

export const GroupButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 0,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: theme.palette.divider,
}))

export const GroupButtonContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const CourseSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(1 / 2),
}))

export const CourseScoreContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const CourseLinksContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  margin: theme.spacing(0, 1),
}))
