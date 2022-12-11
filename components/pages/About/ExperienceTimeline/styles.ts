import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  body: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  bodySection: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  title: {
    fontWeight: 400,
    fontSize: 'large',
    color: theme.palette.text.primary,
  },
  mediumLabel: {
    fontWeight: 400,
    fontSize: 'medium',
    color: theme.palette.text.secondary,
  },
  smallLabel: {
    fontWeight: 400,
    fontSize: 'small',
    color: theme.palette.text.secondary,
  },
  description: {
    fontWeight: 400,
    fontSize: 'medium',
    color: theme.palette.text.primary,
  },
  avatar: {
    width: 200,
    height: 200,
    margin: 'auto',
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
}))
