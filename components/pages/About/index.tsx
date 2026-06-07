import Image from 'next/image'
import { FC } from 'react'
import {
  Button,
  Grid,
  Theme,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material'
import { certificates, socialNetworks } from '../../../data/links'
import { Skill, skills } from '../../../data/skills'
import useInView from '../../../utils/useInView'
import AnimatedSentence from '../../shared/AnimatedSentence'
import GradientText from '../../shared/GradientText'
import ExperienceTimeline from './ExperienceTimeline'
import {
  AboutContainer,
  AboutHeader,
  AboutSection,
  AvatarInner,
  AvatarRing,
  BioColumn,
  Highlight,
  RoleTagline,
  SkillContainer,
  SkillGroupCard,
  SkillProgress,
  SocialIconButton,
  SocialRow,
} from './styles'

const cv = certificates.find((c) => c.tooltip === 'Curriculum Vitae')

const getSkillColor = (theme: Theme, color?: string) =>
  color || theme.palette.text.primary

const SkillGroup: FC<{ group: string; items: Skill[] }> = ({
  group,
  items,
}) => {
  const theme = useTheme()
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.25 })

  return (
    <SkillGroupCard ref={ref} className="smoothStepIn">
      <Typography variant="h6">{group}</Typography>
      {items.map(({ name, Icon, color, level }) => (
        <SkillContainer key={`skill-${name}`}>
          <AboutSection>
            {Icon && <Icon size={20} color={getSkillColor(theme, color)} />}
            <Typography variant="body2" color="textSecondary">
              {name}
            </Typography>
          </AboutSection>
          <SkillProgress variant="determinate" value={inView ? level : 0} />
        </SkillContainer>
      ))}
    </SkillGroupCard>
  )
}

const About: FC = () => {
  return (
    <AboutContainer>
      <AnimatedSentence sentence="Hi, I'm Ricardo" />
      <RoleTagline>
        <GradientText
          sx={{ fontWeight: 700, fontSize: { xs: '1.4rem', md: '1.7rem' } }}
        >
          Product Engineer
        </GradientText>
        <Typography
          component="span"
          color="textSecondary"
          sx={{ fontWeight: 500, fontSize: { xs: '1rem', md: '1.15rem' } }}
        >
          — shaping and bringing ideas to life
        </Typography>
      </RoleTagline>

      <AboutHeader className="smoothStepIn">
        <AvatarRing>
          <AvatarInner>
            <Image
              src="/avatar.jpg"
              alt="Ricardo Grade"
              fill
              sizes="168px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </AvatarInner>
        </AvatarRing>
        <BioColumn>
          <Typography>
            I’ve taken products and features <Highlight>0→1</Highlight> and
            owned them end-to-end.
          </Typography>
          <Typography>
            These days I’m <Highlight>Clauding</Highlight> — shipping at a pace
            that still feels like cheating. 🚀⚡
          </Typography>
          <Typography color="textSecondary">
            Off the clock, I’m chasing PRs — gym, runs, and more recently,
            triathlons.
          </Typography>
          <SocialRow>
            {socialNetworks.map(({ href, Icon, tooltip }) => (
              <Tooltip key={href} title={tooltip}>
                <SocialIconButton
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </SocialIconButton>
              </Tooltip>
            ))}
            {cv && (
              <Button
                variant="outlined"
                href={cv.href}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<cv.Icon />}
              >
                CV
              </Button>
            )}
          </SocialRow>
        </BioColumn>
      </AboutHeader>

      <AnimatedSentence sentence="Experience" />
      <ExperienceTimeline />

      <AnimatedSentence sentence="Skills" />
      <Grid container spacing={3}>
        {Object.entries(skills).map(([group, items]) => (
          <Grid key={`skill-group-${group}`} size={{ xs: 12, sm: 6, md: 3 }}>
            <SkillGroup group={group} items={items} />
          </Grid>
        ))}
      </Grid>
    </AboutContainer>
  )
}

export default About
