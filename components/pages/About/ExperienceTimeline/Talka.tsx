import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import { TimelineItemCard, TimelineItemSection } from './styles'

const Talka: FC = () => {
  return (
    <TimelineItemCard>
      <TimelineItemSection>
        <Typography>
          <Link href="https://www.talka.ai/" target="_blank" underline="hover">
            Talka.ai
          </Link>{' '}
          is a Conversational AI startup headquartered in Silicon Valley, where
          I work on the full-stack (Frontend &amp; Backend) development of
          end-user apps, side-by-side with former Google, Facebook and DeepMind
          AI researchers.
        </Typography>
        <Typography>
          I developed the entire Frontend, from scratch to production, of an app
          aimed at individual users that provides insights from their recorded
          conversations to improve their communication skills.
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Talka
