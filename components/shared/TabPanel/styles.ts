import { styled } from '@mui/system'

export const TabPanelContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  gap: theme.spacing(3),
  padding: theme.spacing(3, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3),
  },
}))
