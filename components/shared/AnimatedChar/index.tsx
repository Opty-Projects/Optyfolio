import { FC, useRef } from 'react'
import { Slide } from '@mui/material'
import { AnimatedCharSpan, CharSpan, OuterCharSpan } from './styles'

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
      <OuterCharSpan onMouseEnter={startAnimation} onMouseLeave={stopAnimation}>
        <CharSpan>{char}</CharSpan>
        <AnimatedCharSpan ref={animatedCharRef} onAnimationEnd={stopAnimation}>
          {char}
        </AnimatedCharSpan>
      </OuterCharSpan>
    </Slide>
  )
}

export default AnimatedChar
