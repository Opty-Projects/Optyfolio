import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/system'

export const Form = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}))

export const FormSection = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  gap: theme.spacing(1),
}))

export const ActionButton = styled(LoadingButton)(({ theme }) => ({
  textTransform: 'none',
  fontWeight: 400,
  fontSize: 'medium',
}))
