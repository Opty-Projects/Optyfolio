import { FC, PropsWithChildren } from 'react'
import { Direction } from '@mui/material'
import { TabPanelContainer } from './styles'

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
  return (
    <TabPanelContainer
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      hidden={value !== index}
      dir={dir}
    >
      {value === index && children}
    </TabPanelContainer>
  )
}

export default TabPanel
