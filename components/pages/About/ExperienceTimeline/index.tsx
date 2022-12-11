import Image from 'next/image'
import { FC, ReactNode, useMemo } from 'react'
import {
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { useStyles } from './styles'
import Talka from './Talka'
import Tecnico from './Tecnico'

export interface TimelineItem {
  icon: ReactNode
  title: ReactNode
  label: ReactNode
  body: ReactNode
}

const Icon: FC<{ src: string }> = ({ src }) => (
  <Image src={src} alt="logo" width={49} height={49} objectFit="contain" />
)

const ExperienceTimeline = () => {
  const theme = useTheme()
  const classes = useStyles()

  const items: TimelineItem[] = useMemo(
    () => [
      {
        icon: <Icon src="/talka.png" />,
        title: (
          <Typography className={classes.title}>
            Software Engineer @ Talka.ai
          </Typography>
        ),
        label: (
          <div>
            <Typography className={classes.smallLabel}>Work</Typography>
            <Typography className={classes.smallLabel}>
              2022 - Present
            </Typography>
          </div>
        ),
        body: <Talka />,
      },
      {
        icon: <Icon src="/tecnico.png" />,
        title: (
          <Typography className={classes.title}>
            Computer Science &amp; Engineering Master's Degree @ Técnico
          </Typography>
        ),
        label: (
          <div>
            <Typography className={classes.smallLabel}>Education</Typography>
            <Typography className={classes.smallLabel}>2017 - 2022</Typography>
          </div>
        ),
        body: <Tecnico />,
      },
    ],
    [classes]
  )

  return (
    <Stepper
      orientation="vertical"
      style={{ marginLeft: theme.spacing(3 / 2) }}
    >
      {items.map(({ icon, title, label, body }, index) => (
        <Step key={`step-${index}`} active>
          <StepLabel
            optional={label}
            icon={icon}
            style={{ marginLeft: theme.spacing(-3 / 2) }}
          >
            {title}
          </StepLabel>
          <StepContent style={{ padding: theme.spacing(3, 0, 0, 3) }}>
            {body}
          </StepContent>
        </Step>
      ))}
    </Stepper>
  )
}

export default ExperienceTimeline
