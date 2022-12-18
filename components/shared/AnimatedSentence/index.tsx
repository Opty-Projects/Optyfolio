import { FC } from 'react'
import AnimatedChar from '../../shared/AnimatedChar'
import { Sentence, Word } from './styles'

export interface AnimatedSentenceProps {
  sentence: string
}

const AnimatedSentence: FC<AnimatedSentenceProps> = ({ sentence }) => {
  return (
    <Sentence className="notranslate">
      {sentence.split(' ').map((word, index) => (
        <Word key={`word-${index}`}>
          {word.split('').map((char, index) => (
            <AnimatedChar key={`char-${index}`} char={char} index={index} />
          ))}
        </Word>
      ))}
    </Sentence>
  )
}

export default AnimatedSentence
