import Image from 'next/image'
import { FC, ReactNode } from 'react'
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  useTheme,
} from '@mui/material'
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
    width={49}
    height={49}
    style={{ objectFit: 'contain' }}
  />
)
const items: TimelineItem[] = [
  {
    icon: <Icon src="/talka.png" />,
    title: (
      <Typography fontSize="large">Software Engineer @ Talka.ai</Typography>
    ),
    label: (
      <div>
        <Typography fontSize="small" color="textSecondary">
          Work
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          2022 - Present
        </Typography>
      </div>
    ),
    body: <Talka />,
  },
  {
    icon: <Icon src="/tecnico.png" />,
    title: (
      <Typography fontSize="large">
        Computer Science &amp; Engineering Master's Degree @ Técnico
      </Typography>
    ),
    label: (
      <div>
        <Typography fontSize="small" color="textSecondary">
          Education
        </Typography>
        <Typography fontSize="small" color="textSecondary">
          2017 - 2022
        </Typography>
      </div>
    ),
    body: <Tecnico />,
  },
]

const ExperienceTimeline = () => {
  const theme = useTheme()
  return (
    <Stepper orientation="vertical" sx={{ ml: theme.spacing(3 / 2) }}>
      {items.map(({ icon, title, label, body }, index) => (
        <Step key={`step-${index}`} active>
          <StepLabel
            optional={label}
            icon={icon}
            sx={{ ml: theme.spacing(-3 / 2) }}
          >
            {title}
          </StepLabel>
          <StepContent sx={{ p: theme.spacing(3, 0, 0, 3) }}>
            {body}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

export default ExperienceTimeline
