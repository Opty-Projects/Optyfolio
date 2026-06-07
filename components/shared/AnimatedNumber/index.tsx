import { FC } from 'react'
import useCountUp from '../../../utils/useCountUp'
import useInView from '../../../utils/useInView'
import GradientText from '../GradientText'

export interface AnimatedNumberProps {
  value: number
  suffix?: string
}

/** Inline gradient number that counts up from 0 when scrolled into view. */
const AnimatedNumber: FC<AnimatedNumberProps> = ({ value, suffix = '' }) => {
  const [ref, inView] = useInView<HTMLSpanElement>({ threshold: 0.5 })
  const count = useCountUp(value, inView)

  return (
    <GradientText
      ref={ref}
      sx={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}
    >
      {Math.round(count)}
      {suffix}
    </GradientText>
  )
}

export default AnimatedNumber
