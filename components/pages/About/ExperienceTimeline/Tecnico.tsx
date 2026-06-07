import NextLink from 'next/link'
import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import { BulletList, TimelineItemCard, TimelineItemSection } from './styles'

const Tecnico: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection>
        <Typography>
          I studied Computer Science & Engineering @{' '}
          <Link
            href="https://tecnico.ulisboa.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instituto Superior Técnico
          </Link>{' '}
          (Técnico Lisboa), ranked several times as the{' '}
          <strong>best engineering university in Portugal</strong>.
        </Typography>
        <BulletList>
          <Typography component="li">
            Specialized in Distributed Systems & Cyber-Security and graduated
            with a <strong>19/20 GPA</strong>.
          </Typography>
          <Typography component="li">
            Earned a <strong>Merit/Excellence Diploma</strong> every year at
            Técnico, plus a{' '}
            <strong>University of Lisbon Merit Scholarship</strong> as the
            best-performing student in my course in 2020/21.
          </Typography>
          <Typography component="li">
            Taught <strong>Distributed Systems labs</strong> (3rd-year CS) and
            built internal university tools as an <strong>R&D Scholar</strong>.
          </Typography>
        </BulletList>
        <Typography color="textSecondary">
          Details →{' '}
          <Link component={NextLink} href="/bsc">
            Bachelor’s
          </Link>{' '}
          ·{' '}
          <Link component={NextLink} href="/msc">
            Master’s
          </Link>
          .
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Tecnico
