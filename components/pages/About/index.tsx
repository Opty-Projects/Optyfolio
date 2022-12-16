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
const About: FC = () => {
  const theme = useTheme()

  return (
    <AboutContainer>
      <AboutHeader>
        <AboutAvatar>
          <Image
            src="/avatar.jpg"
            alt="avatar"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />
        </AboutAvatar>
        <AnimatedSentence sentence={introductorySentence} />
      </AboutHeader>

      <AnimatedSentence sentence="Experience" />
      <ExperienceTimeline />

      <AnimatedSentence sentence="Skills" />
      <Grid container spacing={3}>
        {Object.entries(skills).map(([group, skills]) => (
          <Grid key={`skill-group-${group}`} item xs={12} sm={6} md={3}>
            <SkillGroupCard>
              <Typography fontSize="large">{group}</Typography>
              {skills.map(({ name, Icon, color, level }) => {
                const skillColor =
                  color ||
                  (theme.palette.mode === 'dark' ? '#ffffff' : '#000000')
                return (
                  <SkillContainer key={`skill-${name}`}>
                    <AboutSection>
                      {Icon && <Icon fontSize="large" color={skillColor} />}
                      <Typography color="textSecondary">{name}</Typography>
                    </AboutSection>
                    <SkillProgress
                      value={level}
                      variant="determinate"
                      sx={{
                        backgroundColor: `${skillColor}50`,
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: skillColor,
                        },
                      }}
                    />
                  </SkillContainer>
                )
              })}
            </SkillGroupCard>
          </Grid>
        ))}
      </Grid>
    </AboutContainer>
  )
}

export default About
