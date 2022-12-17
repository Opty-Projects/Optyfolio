import { styled } from '@mui/system'
import { CardContainer } from '../../../shared/Card/styles'

export const TimelineItemCard = styled(CardContainer)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: theme.spacing(2),
}))

export const TimelineItemSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}))
