import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    width: '100%',
    maxWidth: 800,
    maxHeight: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
  },
  modalContent: {
    flexDirection: 'column',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
  },
}))
