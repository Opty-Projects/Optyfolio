import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  avatar: {
    width: 200,
    height: 200,
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
  },
  title: {
    fontWeight: 400,
    fontSize: 'large',
    color: theme.palette.text.primary,
  },
  icon: {
    fontWeight: 400,
    fontSize: 'large',
  },
  value: {
    fontWeight: 400,
    fontSize: 'medium',
    color: theme.palette.text.secondary,
  },
  skillCard: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: theme.spacing(2),
  },
  skill: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  progress: {
    width: '100%',
    borderRadius: theme.shape.borderRadius,
  },
}))
