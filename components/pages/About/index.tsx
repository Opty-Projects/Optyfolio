import Image from 'next/image'
import { FC } from 'react'
import { Grid, Typography, useTheme } from '@mui/material'
import { skills } from '../../../data/skills'
import AnimatedSentence from '../../shared/AnimatedSentence'
import ExperienceTimeline from './ExperienceTimeline'
import {
  AboutAvatar,
  AboutContainer,
  AboutHeader,
  AboutSection,
  SkillContainer,
  SkillGroupCard,
  SkillProgress,
} from './styles'

const introductorySentence = "Hi! I'm Ricardo, Software Engineer"
const introductoryDescription = `I'm passionate about building scalable and reliable applications that offer a good user experience.
I highly value the quality and cleanliness of the code I develop.
In my spare time, I like to watch series, play video games, have dinner and carry out various activities with friends, and of course, learn new frameworks and technologies that allow me to improve my skills as a developer.`
const About: FC = () => {
  const theme = useTheme()
  const getSkillColor = (color?: string) =>
    color || (theme.palette.mode === 'dark' ? '#ffffff' : '#000000')

  return (
    <AboutContainer>
      <AnimatedSentence sentence={introductorySentence} />
      <AboutHeader className="smoothStepIn">
        <AboutAvatar>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </AboutAvatar>
        <Typography>{introductoryDescription}</Typography>
      </AboutHeader>
      <AnimatedSentence sentence="Experience" />
      <ExperienceTimeline />
      <AnimatedSentence sentence="Skills" />
      <Grid container spacing={3}>
        {Object.entries(skills).map(([group, skills]) => (
          <Grid key={`skill-group-${group}`} item xs={12} sm={6} md={3}>
            <SkillGroupCard className="smoothStepIn">
              <Typography fontSize="large">{group}</Typography>
              {skills.map(({ name, Icon, color, level }) => (
                <SkillContainer key={`skill-${name}`}>
                  <AboutSection>
                    {Icon && (
                      <Icon fontSize="large" color={getSkillColor(color)} />
                    )}
                    <Typography color="textSecondary">{name}</Typography>
                  </AboutSection>
                  <SkillProgress
                    value={level}
                    variant="determinate"
                    sx={{
                      backgroundColor: `${getSkillColor(color)}50`,
                      '& .MuiLinearProgress-bar': {
                        backgroundColor: getSkillColor(color),
                      },
                    }}
                  />
                </SkillContainer>
              ))}
            </SkillGroupCard>
          </Grid>
        ))}
      </Grid>
    </AboutContainer>
  )
}

export default About
