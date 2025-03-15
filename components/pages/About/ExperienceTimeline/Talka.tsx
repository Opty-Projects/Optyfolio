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
          I work, side-by-side with ex-Google AI researchers, on the full-stack
          development of AI-driven apps designed to provide sales reps and their
          managers with insights extracted from their sales meetings.
        </Typography>
        <Typography>
          <u>As a pivotal engineer in Talka:</u>
          <li>
            I single-handedly designed and built the Frontend of our React apps
            and am now responsible for maintaining and extending it with new
            features.
          </li>
          <li>
            I created, extended and am responsible for several core Python
            microservices supporting our apps.
          </li>
          <li>
            I built a Zoom bot to record our customers&apos; sales meetings and
            an app within the Zoom client to display real-time insights.
          </li>
          <li>
            I created several automated tests and metrics to monitor the quality
            of our system and ensure its requirements are met.
          </li>
          <li>
            I fine-tuned 2 Bert and 2 Llama models (e.g., sales meeting
            participant roles classifier; deal success predictor).
          </li>
          <li>
            I am responsible for containerizing, configuring, deploying and
            maintaining all services I take to production in GCP.
          </li>
          <li>I mentor new developers joining the team.</li>
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Talka
