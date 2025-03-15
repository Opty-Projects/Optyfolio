import moment from 'moment'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { getDateDelta } from './datetime'
import SureThing from './SureThing'
import Talka from './Talka'
import Tecnico from './Tecnico'

export interface TimelineItem {
  icon: ReactNode
  title: ReactNode
  label: ReactNode
  body: ReactNode
}

const Icon: FC<{ src: string }> = ({ src }) => (
  <Image
    src={src}
    alt="logo"
    width={40}
    height={40}
    style={{ objectFit: 'contain' }}
  />
)
const items: TimelineItem[] = [
  {
    icon: <Icon src="/talka.png" />,
    title: (
      <Typography fontSize="large">
        Senior Software Engineer @ Talka.ai
      </Typography>
    ),
    label: (
      <div>
        <Typography fontSize="small" color="textSecondary">
          Work
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          {moment('2022-09-01').format('MMM YYYY')} - Present •{' '}
          {getDateDelta('2022-09-01', moment())}
        </Typography>
      </div>
    ),
    body: <Talka />,
  },
  {
    icon: <Icon src="/sure_thing.png" />,
    title: (
      <Typography fontSize="large">
        Software Engineer Intern @ SureThing
      </Typography>
    ),
    label: (
      <div>
        <Typography fontSize="small" color="textSecondary">
          Work
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          {moment('2021-09-01').format('MMM YYYY')} -{' '}
          {moment('2022-09-01').format('MMM YYYY')} •{' '}
          {getDateDelta('2021-09-01', '2022-09-01')}
        </Typography>
      </div>
    ),
    body: <SureThing />,
  },
  {
    icon: <Icon src="/tecnico.png" />,
    title: (
      <Typography fontSize="large">
        Computer Science &amp; Engineering BSc &amp; MSc @ Técnico
      </Typography>
    ),
    label: (
      <div>
        <Typography fontSize="small" color="textSecondary">
          Education
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          {moment('2017-09-01').format('MMM YYYY')} -{' '}
          {moment('2022-09-01').format('MMM YYYY')} •{' '}
          {getDateDelta('2017-09-01', '2022-09-01')}
        </Typography>
      </div>
    ),
    body: <Tecnico />,
  },
]

const ExperienceTimeline = () => {
  return (
    <Stepper orientation="vertical" sx={{ ml: 1 }}>
      {items.map(({ icon, title, label, body }, index) => (
        <Step key={`step-${index}`} active>
          <StepLabel optional={label} icon={icon} sx={{ ml: -1 }}>
            {title}
          </StepLabel>
          <StepContent sx={{ pt: 3, pl: 3 }}>{body}</StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

export default ExperienceTimeline
