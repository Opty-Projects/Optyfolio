import Image from 'next/image'
import { FC } from 'react'
import { TagCloud } from 'react-tagcloud'
import { WorkspacePremium } from '@mui/icons-material'
import { Avatar, Typography, useTheme } from '@mui/material'
import { skills, SkillTag } from '../../../data/skills'
import Card from '../../shared/Card'
import { useStyles } from './styles'

const About: FC = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar}>
        <Image src="/Avatar.jpg" alt="Avatar" layout="fill" />
      </Avatar>

      <Card className={classes.card}>
        <div className={classes.section}>
          <WorkspacePremium className={classes.icon} />
          <Typography className={classes.title}>Skills</Typography>
        </div>
        <TagCloud
          className={classes.tagCloud}
          minSize={20}
          maxSize={30}
          tags={skills}
          shuffle={false}
          colorOptions={{
            luminosity: theme.palette.mode === 'light' ? 'dark' : undefined,
            hue: theme.palette.primary.main,
          }}
          renderer={({ value }: SkillTag, fontSize: number, color: string) => (
            <span
              key={value}
              className={classes.tag}
              style={{ fontSize, color }}
            >
              {value}
            </span>
          )}
        />
      </Card>
    </div>
  )
}

export default About
