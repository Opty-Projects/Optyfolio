import SwipeableViews from 'react-swipeable-views'
import { Tab } from '@mui/material'
import { styled } from '@mui/system'
import { CardContainer } from '../../shared/Card/styles'

export const Container = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.background.default,
  '*::selection': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

export const AppBarCard = styled(CardContainer)(({ theme }) => ({
  position: 'sticky',
  top: 0,
  zIndex: 1,
  justifyContent: 'center',
  padding: 0,
}))

export const AppBarTab = styled(Tab)(({ theme }) => ({
  textTransform: 'none',
  fontSize: 'large',
  fontWeight: 400,
  color: theme.palette.text.secondary,
}))

export const SwipeablePageViews = styled(SwipeableViews)(({ theme }) => ({
  width: '100%',
  height: '100%',
}))
