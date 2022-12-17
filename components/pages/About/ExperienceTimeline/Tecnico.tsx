import Image from 'next/image'
import { FC } from 'react'
import { Grid, Link, Typography } from '@mui/material'
import { AboutAvatar } from '../styles'
import { TimelineItemCard, TimelineItemSection } from './styles'

const Tecnico: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <TimelineItemSection>
            <Typography>
              I studied Computer Science &amp; Engineering @{' '}
              <Link
                href="https://tecnico.ulisboa.pt/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                Instituto Superior Técnico
              </Link>{' '}
              (Técnico Lisboa),{' '}
              <Link
                href="https://www.usnews.com/education/best-global-universities/portugal/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                ranked
              </Link>{' '}
              several times as the best engineering university in Portugal,
              where I&apos;ve specialized in Distributed Systems &amp;
              Cyber-Security and graduated with a 19/20 GPA.
            </Typography>
            <Typography>
              My journey at Técnico was thankfully filled with academic
              successes. Each year I was recognized with a Merit/Excellence
              Diploma for my academic performance, and recently I was awarded an
              University of Lisbon Merit Scholarship for being the best
              performing student of my course in the academic year of 20/21.
            </Typography>
            <Typography>
              During this period I got to teach lab classes of Distributed
              Systems (3rd year course of the Computer Science Bachelor&apos;s
              Degree) as Invited Teaching Assistant, and work on the development
              and maintenance of app features to support IST Management as
              Research Initiation Scholar @ Taguspark Computer Services Unit.
            </Typography>
            <Typography>
              That said, the most important take away was the huge amount of
              learning I acquired and friends I&apos;ve made for life.
            </Typography>
          </TimelineItemSection>
        </Grid>
        <Grid item xs>
          <TimelineItemSection>
            <AboutAvatar>
              <Image
                src="/master.jpg"
                alt="master"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </AboutAvatar>
            <div>
              <Typography color="textSecondary" textAlign="center">
                Master&apos;s Thesis
              </Typography>
              <Typography textAlign="center" whiteSpace="pre-line">
                <Link
                  href="https://www.dropbox.com/home/MasterDissertation?preview=MasterThesis.pdf"
                  target="_blank"
                  underline="hover"
                >
                  CROSS City Mobile Application:{'\n'}
                  Gamified Peer-Based Location Certification
                </Link>
              </Typography>
            </div>
          </TimelineItemSection>
        </Grid>
      </Grid>
    </TimelineItemCard>
  )
}

export default Tecnico
