import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import { TimelineItemCard, TimelineItemSection } from './styles'

const Talka: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection>
        <Typography>
          <Link
            href="https://www.talka.ai/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            Talka.ai
          </Link>{' '}
          is a Conversational AI startup headquartered in Silicon Valley, where
          I work on the full-stack development of end-user apps, side-by-side
          with former Google, Facebook and DeepMind AI researchers.
        </Typography>
        <Typography>
          As a pivotal Full-stack Engineer at Talka, I have the exciting
          responsibility of driving the development from inception to
          production, of our AI-driven apps that harness the power of machine
          learning to furnish sales reps and their managers with valuable
          insights extracted from their sales meetings.
        </Typography>
        <Typography>
          Throughout the development process, I prioritize critical thinking to
          create meaningful features that are tailored to our clients&apos;
          needs. To ensure that our features are insightful &amp; actionable
          from our clients&apos; perspective, I collaborate closely with the ML
          team, interpreting our AI model outputs.
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Talka
