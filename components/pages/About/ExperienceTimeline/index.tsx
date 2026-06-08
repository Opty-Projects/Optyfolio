import Image from 'next/image'
import { FC, ReactNode } from 'react'
import { Link, Typography } from '@mui/material'
import Bounce from './Bounce'
import { formatMonthYear, getDateDelta } from './datetime'
import SureThing from './SureThing'
import Talka from './Talka'
import Tecnico from './Tecnico'
import {
  LogoBadge,
  MarkerCol,
  TimelineBody,
  TimelineHead,
  TimelineItem,
  TimelineRoot,
} from './styles'

interface TimelineEntry {
  logo: ReactNode
  role: string
  company: string
  companyUrl: string
  kind: 'Work' | 'Education'
  start: Date
  end?: Date
  body: ReactNode
}

const LogoImg: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    style={{ objectFit: 'contain' }}
  />
)

const entries: TimelineEntry[] = [
  {
    logo: <LogoImg src="/bounce.png" alt="Bounce" />,
    role: 'Product Engineer',
    company: 'Bounce',
    companyUrl: 'https://bounce.com/',
    kind: 'Work',
    start: new Date(2026, 5, 1),
    body: <Bounce />,
  },
  {
    logo: <LogoImg src="/talka.png" alt="Talka.ai" />,
    role: 'Founding Engineer',
    company: 'Talka.ai',
    companyUrl: 'https://www.talka.ai/',
    kind: 'Work',
    start: new Date(2022, 8, 1),
    end: new Date(2026, 5, 1),
    body: <Talka />,
  },
  {
    logo: <LogoImg src="/sure_thing.png" alt="SureThing" />,
    role: 'Software Engineer',
    company: 'SureThing',
    companyUrl: 'https://surething.tecnico.ulisboa.pt/',
    kind: 'Work',
    start: new Date(2021, 8, 1),
    end: new Date(2022, 8, 1),
    body: <SureThing />,
  },
  {
    logo: <LogoImg src="/tecnico.png" alt="Instituto Superior Técnico" />,
    role: 'Computer Science & Engineering — BSc & MSc',
    company: 'Instituto Superior Técnico',
    companyUrl: 'https://tecnico.ulisboa.pt/',
    kind: 'Education',
    start: new Date(2017, 8, 1),
    end: new Date(2022, 8, 1),
    body: <Tecnico />,
  },
]

const ExperienceTimeline: FC = () => (
  <TimelineRoot>
    {entries.map((entry, index) => {
      const dateRange = `${formatMonthYear(entry.start)} - ${
        entry.end ? formatMonthYear(entry.end) : 'Present'
      }`
      // LinkedIn shows a duration for work, not education.
      const duration =
        entry.kind !== 'Education' && entry.end
          ? getDateDelta(entry.start, entry.end)
          : ''

      return (
        <TimelineItem key={`experience-${index}`}>
          <MarkerCol>
            <LogoBadge>{entry.logo}</LogoBadge>
          </MarkerCol>
          <TimelineBody>
            <TimelineHead>
              <Typography variant="h6">{entry.role}</Typography>
              <Typography color="textSecondary">
                <Link
                  href={entry.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {entry.company}
                </Link>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {dateRange}
                {duration && ` · ${duration}`}
              </Typography>
            </TimelineHead>
            {entry.body}
          </TimelineBody>
        </TimelineItem>
      )
    })}
  </TimelineRoot>
)

export default ExperienceTimeline
