import { FC, useRef } from 'react'
import { Slide } from '@mui/material'
import { CharSpan } from './styles'

export interface AnimatedCharProps {
  char: string
  index: number
}

const AnimatedChar: FC<AnimatedCharProps> = ({ char, index }) => {
  const animatedCharRef = useRef<HTMLSpanElement>(null)

  const startAnimation = () => animatedCharRef.current?.classList.add('active')
  const stopAnimation = () =>
    animatedCharRef.current?.classList.remove('active')

  return (
    <Slide in direction="up" timeout={300 + index * 50}>
      <CharSpan
        onMouseEnter={startAnimation}
        onAnimationEnd={stopAnimation}
        ref={animatedCharRef}
      >
        {char}
      </CharSpan>
    </Slide>
  )
}

export default AnimatedChar
