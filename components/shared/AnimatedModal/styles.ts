import { Box, Modal } from '@mui/material'
import { styled } from '@mui/system'
import { CardContainer } from '../Card/styles'

export const CenteredModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

export const ModalBox = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 800,
  maxHeight: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
}))

export const ModalContentCard = styled(CardContainer)(({ theme }) => ({
  flexDirection: 'column',
  gap: theme.spacing(3),
  padding: theme.spacing(3),
}))
