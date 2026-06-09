import { FC } from 'react'
import { Link, Typography } from '@mui/material'
import { TimelineItemCard, TimelineItemSection } from './styles'

const Bounce: FC = () => {
  return (
    <TimelineItemCard className="smoothStepIn">
      <TimelineItemSection>
        <Typography>
          <Link
            href="https://bounce.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bounce
          </Link>{' '}
          — SF travel-tech startup turning everyday shops into the world’s
          largest luggage-storage network, bookable in a tap so travelers can
          explore bag-free.
        </Typography>
      </TimelineItemSection>
    </TimelineItemCard>
  )
}

export default Bounce
