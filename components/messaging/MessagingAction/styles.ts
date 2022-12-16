import { Fab } from '@mui/material'
import { styled } from '@mui/system'

export const MessagingFab = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
}))
