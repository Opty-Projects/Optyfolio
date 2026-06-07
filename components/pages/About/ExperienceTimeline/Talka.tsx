import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import AnimatedNumber from '../../../shared/AnimatedNumber'
import { BulletList, TimelineItemCard, TimelineItemSection } from './styles'

const Talka: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection>
        <Typography>
          <Link
            href="https://www.talka.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Talka.ai
          </Link>{' '}
          — SF conversational-AI startup turning sales calls into insights teams
          act on.
        </Typography>
        <Typography>
          During my time: <AnimatedNumber value={60} suffix="k+" /> hours
          analyzed across <AnimatedNumber value={30} suffix="+" /> behavioral
          signals, for <AnimatedNumber value={600} suffix="+" /> reps and
          managers across <AnimatedNumber value={20} suffix="+" /> companies.
        </Typography>
        <Typography>
          As a <strong>founding engineer</strong> — 1st full-stack hire on a
          Google/Meta/DeepMind ML team — I built and owned much of the product
          end-to-end:
        </Typography>
        <BulletList>
          <Typography component="li">
            <strong>Voice AI agents</strong> reps talk to — including a coaching
            simulator that role-plays a prospect, fires back real objections,
            and scores the rep.
          </Typography>
          <Typography component="li">
            <strong>Reports that build themselves</strong> — an agent interprets
            a user’s question, pulls and reasons over the data, and assembles
            the answer into a custom React page.
          </Typography>
          <Typography component="li">
            <strong>A Zoom bot</strong> that’s recorded{' '}
            <AnimatedNumber value={6} suffix="k+" /> sales meetings, plus an
            in-Zoom app surfacing insights in real time.
          </Typography>
          <Typography component="li">
            <strong>The React web app</strong> — built from scratch, owned ever
            since.
          </Typography>
          <Typography component="li">
            <strong>10+ core Python microservices</strong> — built, extended,
            and owned.
          </Typography>
          <Typography component="li">
            <strong>Integrations</strong> across customers’ stack — CRM,
            calendar, messaging, and more.
          </Typography>
          <Typography component="li">
            <strong>The full GCP footprint</strong> — containerized, deployed,
            maintained.
          </Typography>
          <Typography component="li">
            <strong>Automated tests and quality metrics</strong> that catch
            regressions in production before customers do.
          </Typography>
          <Typography component="li">
            <strong>Mentored engineers</strong> as they joined the team.
          </Typography>
        </BulletList>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Talka
