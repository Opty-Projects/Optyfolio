import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.background.paper,
    WebkitBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.contrastText}22`,
    MozBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.contrastText}22`,
    boxShadow: `0px 4px 8px -2px ${theme.palette.primary.contrastText}22`,
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    borderRadius: 4,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      WebkitBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
      MozBoxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
      boxShadow: `0px 4px 8px -2px ${theme.palette.primary.main}44`,
      transition: 'all 0.3s ease-in-out',
    },
  },
}))
