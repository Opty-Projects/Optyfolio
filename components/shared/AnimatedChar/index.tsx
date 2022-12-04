import { FC, useRef } from 'react'
import { Slide } from '@mui/material'
import { useStyles } from './styles'

export interface AnimatedCharProps {
  char: string
  index: number
}

const AnimatedChar: FC<AnimatedCharProps> = ({ char, index }) => {
  const classes = useStyles()
  const animatedCharRef = useRef<HTMLSpanElement>(null)

  const startAnimation = () =>
    animatedCharRef.current?.classList.add(classes.animatedCharActive)
  const stopAnimation = () =>
    animatedCharRef.current?.classList.remove(classes.animatedCharActive)

  return (
    <Slide in direction="up" timeout={300 + index * 50}>
      <span
        className={classes.outerChar}
        onMouseEnter={startAnimation}
        onMouseLeave={stopAnimation}
      >
        <span className={classes.char}>{char}</span>
        <span
          ref={animatedCharRef}
          className={classes.animatedChar}
          onAnimationEnd={stopAnimation}
        >
          {char}
        </span>
      </span>
    </Slide>
  )
}

export default AnimatedChar
