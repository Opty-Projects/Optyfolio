import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  sentence: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: theme.spacing(2),
  },
  word: {
    display: 'flex',
    flexDirection: 'row',
  },
}))
