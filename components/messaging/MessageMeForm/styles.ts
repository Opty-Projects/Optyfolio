import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
  title: {
    fontWeight: 500,
    fontSize: 'x-large',
  },
  section: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
    gap: theme.spacing(1),
  },
  button: {
    textTransform: 'none',
    fontWeight: 400,
    fontSize: 'medium',
  },
  gif: {
    position: 'relative',
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
  },
}))
