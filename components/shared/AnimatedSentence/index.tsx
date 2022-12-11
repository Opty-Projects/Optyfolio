import { FC } from 'react'
import AnimatedChar from '../../shared/AnimatedChar'
import { useStyles } from './styles'

export interface AnimatedSentenceProps {
  sentence: string
}

const AnimatedSentence: FC<AnimatedSentenceProps> = ({ sentence }) => {
  const classes = useStyles()

  return (
    <div className={classes.sentence}>
      {sentence.split(' ').map((word, index) => (
        <div key={`word-${index}`} className={classes.word}>
          {word.split('').map((char, index) => (
            <AnimatedChar key={`char-${index}`} char={char} index={index} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default AnimatedSentence
