import { LoadingButton } from '@mui/lab'
import { Avatar } from '@mui/material'
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

export const SpecificallyGifAvatar = styled(Avatar)(({ theme }) => ({
  height: '100%',
  minWidth: '20%',
  [theme.breakpoints.down('sm')]: {
    minWidth: '30%',
  },
  aspectRatio: '3/4',
  borderRadius: theme.shape.borderRadius,
  '&:hover': {
    transition: 'all 0.2s ease-in-out',
    transform: 'scale(1.1)',
  },
}))
