import { FC, PropsWithChildren } from 'react'
import { Direction } from '@mui/material'
import { useStyles } from './styles'

export interface TabPanelProps {
  value: number
  index: number
  dir?: Direction
}

const TabPanel: FC<PropsWithChildren<TabPanelProps>> = ({
  value,
  index,
  dir,
  children,
}) => {
  const classes = useStyles()

  return (
    <div
      className={classes.container}
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      hidden={value !== index}
      dir={dir}
    >
      {value === index && children}
    </div>
  )
}

export default TabPanel
