import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 400,
    fontSize: 'medium',
  },
  value: {
    fontWeight: 600,
    fontSize: 'large',
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
  toggleButtonContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    margin: theme.spacing(0, 1),
  },
  score: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
