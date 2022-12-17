import { FC, PropsWithChildren } from 'react'
import { CardContainer } from './styles'

const Card: FC<PropsWithChildren> = ({ children }) => {
  return <CardContainer className="smoothStepIn">{children}</CardContainer>
}

export default Card
