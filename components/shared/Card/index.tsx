import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { useStyles } from './styles'

export interface CardProps {
  className?: string
}

const Card: FC<PropsWithChildren<CardProps>> = ({ className, children }) => {
  const classes = useStyles()
  return <div className={clsx(classes.container, className)}>{children}</div>
}

export default Card
