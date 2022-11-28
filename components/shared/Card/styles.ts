import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    borderRadius: 4,
    border: `1px solid ${theme.palette.background.paper}`,
    '&:hover': {
      boxShadow: 'none',
      border: `1px solid ${theme.palette.primary.main}`,
      transition: 'all 0.3s ease-in-out',
    },
  },
}))
