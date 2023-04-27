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
          As the primary Frontend Engineer at Talka, I have the exciting
          responsibility of driving the development of the frontend, from
          inception to production, of our products, spanning our flagship MVP
          app and two AI-driven apps that harness the power of machine learning
          to furnish clients with valuable insights extracted from their
          recorded conversations.
        </Typography>
        <Typography>
          Throughout the frontend development process, I prioritize critical
          thinking to create meaningful features that are tailored to our
          clients&apos; needs. To ensure that our frontend features are
          insightful &amp; actionable from our clients&apos; perspective, I
          collaborate closely with the ML team, interpreting their AI model
          outputs.
        </Typography>
        <Typography>
          Furthermore, my contribution extends to developing and maintaining
          backend endpoints that are essential for the proper functioning of our
          products. In addition to this, I spearheaded the integration of video
          conferencing platforms, such as Zoom, into our product, leading to the
          automatic uploading of meetings to our system, streamlining the user
          experience. Moreover, I have trained a pair of text-based AI models.
          Additionally, I designed a system that evaluates the quality of our
          data annotations and assesses the performance of our raters.
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Talka
