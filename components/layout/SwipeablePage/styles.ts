import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
  },
  appBarContainer: {
    position: 'sticky',
    top: 0,
    zIndex: 1,
    justifyContent: 'center',
    padding: 0,
  },
  tab: {
    textTransform: 'none',
    fontSize: 'large',
    fontWeight: 400,
    color: theme.palette.text.secondary,
  },
  swipeableView: {
    width: '100%',
    height: '100%',
  },
}))
