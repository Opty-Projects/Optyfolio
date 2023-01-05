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
const introductoryDescription = `I'm passionate about building scalable and reliable applications that provide a good user experience.
I place a strong emphasis on the quality and cleanliness of my code.
In my free time, I enjoy watching TV series, playing video games, socializing with friends, and staying up to date with the latest frameworks and technologies to improve my skills as a developer.`
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
