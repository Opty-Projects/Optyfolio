import Image from 'next/image'
import { FC } from 'react'
import { Grid, Link, Typography } from '@mui/material'
import { AboutAvatar } from '../styles'
import { TimelineItemCard, TimelineItemSection } from './styles'

const SureThing: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={8}>
          <TimelineItemSection>
            <Typography>
              <Link
                href="https://surething.tecnico.ulisboa.pt/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
              >
                SureThing
              </Link>
              &apos;s mission is to address today&apos;s security need in IoT.
            </Typography>
            <Typography>
              <li>
                I designed and integrated a peer-based location certification
                strategy into a smart tourism Android app, which leverages the
                moments when user devices see each other via Bluetooth.
              </li>
              <li>I developed gamification features into the app.</li>
            </Typography>
          </TimelineItemSection>
        </Grid>
        <Grid item xs>
          <TimelineItemSection
            sx={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <AboutAvatar>
              <Image
                src="/master.jpg"
                alt="master"
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </AboutAvatar>
            <Typography textAlign="center" whiteSpace="pre-line">
              <Link
                href="https://youtu.be/g6Qp26nNgQk"
                target="_blank"
                underline="hover"
              >
                CROSS City Mobile Application:{'\n'}
                Gamified Peer-Based Location Certification
              </Link>
            </Typography>
          </TimelineItemSection>
        </Grid>
      </Grid>
    </TimelineItemCard>
  )
}

export default SureThing
