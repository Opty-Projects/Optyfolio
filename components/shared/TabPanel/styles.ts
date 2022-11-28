import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
  },
}))
