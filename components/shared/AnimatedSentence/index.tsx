import { FC } from 'react'
import AnimatedChar from '../../shared/AnimatedChar'
import { Sentence, Word } from './styles'

export interface AnimatedSentenceProps {
  sentence: string
}

const AnimatedSentence: FC<AnimatedSentenceProps> = ({ sentence }) => {
  return (
    <Sentence className="notranslate">
      {sentence.split(' ').map((word, wordIndex) => (
        <Word key={`word-${wordIndex}`}>
          {word.split('').map((char, charIndex) => (
            <AnimatedChar
              key={`char-${wordIndex}-${charIndex}`}
              char={char}
              index={charIndex}
            />
          ))}
        </Word>
      ))}
    </Sentence>
  )
}

export default AnimatedSentence
