import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  appBarContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  },
  tab: {
    textTransform: 'none',
    fontSize: 'large',
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
  swipeableView: {
    position: 'absolute',
    top: theme.spacing(6),
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.palette.background.default,
  },
}))
