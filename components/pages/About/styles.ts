import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(3),
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1 / 2),
  },
  title: {
    fontWeight: 400,
    fontSize: 'xx-large',
  },
  icon: {
    fontWeight: 400,
    fontSize: 'x-large',
    color: theme.palette.primary.main,
  },
  avatar: {
    width: 200,
    height: 200,
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  tagCloud: {
    maxWidth: 610,
    textAlign: 'center',
    cursor: 'default',
  },
  tag: {
    color: theme.palette.text.primary,
    display: 'inline-block',
    margin: 4,
    '&:hover': {
      transition: 'all 0.2s ease-in-out',
      transform: 'scale(1.1)',
    },
  },
  card: {
    width: 'fit-content',
    flexDirection: 'column',
  },
}))
