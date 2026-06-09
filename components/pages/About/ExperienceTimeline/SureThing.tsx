import Image from 'next/image'
import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import {
  BulletList,
  MediaSide,
  MediaThumb,
  TimelineItemCard,
  TimelineItemSection,
} from './styles'

const SureThing: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection sx={{ flex: 1, minWidth: 260 }}>
        <Typography>
          <Link
            href="https://surething.tecnico.ulisboa.pt/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SureThing
          </Link>{' '}
          — proving a device is really where it claims to be.
        </Typography>
        <BulletList>
          <Typography component="li">
            Built a <strong>peer-to-peer Bluetooth location-proof</strong>{' '}
            strategy for <strong>CROSS City</strong>, a gamified smart-tourism
            Android app — nearby phones endorse each other’s location.
            <br />
            Collusion-resistant, tested with real users.
          </Typography>
        </BulletList>
        <Typography color="textSecondary">
          Published at{' '}
          <Link
            href="https://ieeexplore.ieee.org/document/10013607"
            target="_blank"
            rel="noopener noreferrer"
          >
            IEEE NCA 2022
          </Link>
          .
        </Typography>
      </TimelineItemSection>
      <MediaSide>
        <MediaThumb
          href="https://youtu.be/g6Qp26nNgQk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/master.jpg"
            alt="CROSS City demo"
            fill
            sizes="124px"
            style={{ objectFit: 'cover' }}
          />
        </MediaThumb>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ textAlign: 'center' }}
        >
          CROSS City demo
        </Typography>
      </MediaSide>
    </TimelineItemCard>
  )
}

export default SureThing
