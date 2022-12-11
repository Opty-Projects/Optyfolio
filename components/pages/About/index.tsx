import Image from 'next/image'
import { FC } from 'react'
import {
  Avatar,
  Grid,
  LinearProgress,
  Typography,
  useTheme,
} from '@mui/material'
import { skills } from '../../../data/skills'
import AnimatedSentence from '../../shared/AnimatedSentence'
import Card from '../../shared/Card'
import ExperienceTimeline from './ExperienceTimeline'
import { useStyles } from './styles'

const introductorySentence = "Hi! I'm Ricardo, Software Engineer"
const About: FC = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.container}>
      <div className={classes.grid}>
        <Avatar className={classes.avatar}>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            layout="fill"
            objectFit="cover"
          />
        </Avatar>
        <AnimatedSentence sentence={introductorySentence} />
      </div>

      <AnimatedSentence sentence="Experience" />
      <ExperienceTimeline />

      <AnimatedSentence sentence="Skills" />
      <Grid container spacing={3}>
        {Object.entries(skills).map(([group, skills]) => (
          <Grid key={`skill-group-${group}`} item xs={12} sm={6} md={3}>
            <Card className={classes.skillCard}>
              <Typography className={classes.title}>{group}</Typography>
              {skills.map(({ name, Icon, color, level }) => {
                const skillColor = color || theme.palette.primary.contrastText
                return (
                  <div key={`skill-${name}`} className={classes.skill}>
                    <div className={classes.section}>
                      {Icon && (
                        <Icon className={classes.icon} color={skillColor} />
                      )}
                      <Typography className={classes.value}>{name}</Typography>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={level}
                      className={classes.progress}
                      sx={{
                        backgroundColor: `${skillColor}50`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skillColor,
                        },
                      }}
                    />
                  </div>
                )
              })}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default About
