import { FC, PropsWithChildren } from 'react'
import { useStyles } from './styles'

const Card: FC<PropsWithChildren<{}>> = ({ children }) => {
  const classes = useStyles()
  return <div className={classes.container}>{children}</div>
}

export default Card
