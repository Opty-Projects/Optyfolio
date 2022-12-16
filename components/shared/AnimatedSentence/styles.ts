import { styled } from '@mui/system'

export const Sentence = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: theme.spacing(2),
}))

export const Word = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
}))
