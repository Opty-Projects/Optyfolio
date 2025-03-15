import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import { TimelineItemCard, TimelineItemSection } from './styles'

const Tecnico: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection>
        <Typography>
          I studied Computer Science &amp; Engineering @{' '}
          <Link
            href="https://tecnico.ulisboa.pt/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            Instituto Superior Técnico
          </Link>{' '}
          (Técnico Lisboa),{' '}
          <Link
            href="https://www.usnews.com/education/best-global-universities/portugal/computer-science"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            ranked
          </Link>{' '}
          several times as the best engineering university in Portugal, where
          I&apos;ve specialized in Distributed Systems &amp; Cyber-Security and
          graduated with a 19/20 GPA.
        </Typography>
        <Typography>
          My journey at Técnico was thankfully filled with academic successes.
          Each year I was recognized with a Merit/Excellence Diploma for my
          academic performance, and recently I was awarded an University of
          Lisbon Merit Scholarship for being the best performing student of my
          course in the academic year of 20/21.
        </Typography>
        <Typography>
          During this period I got to teach lab classes of Distributed Systems
          (3rd year course of the Computer Science Bachelor&apos;s Degree) as
          Invited Teaching Assistant, and work on the development and
          maintenance of app features to support IST Management as Research
          Initiation Scholar @ Taguspark Computer Services Unit.
        </Typography>
        <Typography>
          That said, the most important take away was the huge amount of
          learning I acquired and friends I&apos;ve made for life.
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Tecnico
