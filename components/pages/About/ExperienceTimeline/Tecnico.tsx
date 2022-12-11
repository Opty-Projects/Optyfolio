import Image from 'next/image'
import { FC } from 'react'
import { Avatar, Grid, Link, Typography } from '@mui/material'
import Card from '../../../shared/Card'
import { useStyles } from './styles'

const Tecnico: FC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.body}>
      <Grid container spacing={3}>
        <Grid className={classes.bodySection} item xs={12} md={8}>
          <Typography className={classes.description}>
            I studied Computer Science &amp; Engineering @{' '}
            <Link
              href="https://tecnico.ulisboa.pt/"
              target="_blank"
              underline="hover"
            >
              Instituto Superior Técnico
            </Link>{' '}
            (Técnico Lisboa),{' '}
            <Link
              href="https://www.usnews.com/education/best-global-universities/portugal/computer-science"
              target="_blank"
              underline="hover"
            >
              ranked
            </Link>{' '}
            several times as the best engineering university in Portugal, where
            I've specialized in Distributed Systems &amp; Cyber-Security and
            graduated with a 19/20 GPA.
          </Typography>
          <Typography className={classes.description}>
            My journey at Técnico was thankfully filled with academic successes.
            Each year I was recognized with a Merit/Excellence Diploma for my
            academic performance, and recently I was awarded an University of
            Lisbon Merit Scholarship for being the best performing student of my
            course in the academic year of 20/21.
          </Typography>
          <Typography className={classes.description}>
            During this period I got to teach lab classes of Distributed Systems
            (3rd year course of the Computer Science Bachelor's Degree) as
            Invited Teaching Assistant, and work on the development and
            maintenance of app features to support IST Management as Research
            Initiation Scholar @ Taguspark Computer Services Unit.
          </Typography>
          <Typography className={classes.description}>
            That said, the most important take away was the huge amount of
            learning I acquired and friends I've made for life.
          </Typography>
        </Grid>
        <Grid className={classes.bodySection} item xs>
          <Avatar className={classes.avatar}>
            <Image
              src="/master.jpg"
              alt="master"
              layout="fill"
              objectFit="cover"
            />
          </Avatar>
          <div>
            <Typography className={classes.mediumLabel} textAlign="center">
              Master's Thesis
            </Typography>
            <Typography className={classes.description} textAlign="center">
              <Link
                href="https://www.dropbox.com/home/MasterDissertation?preview=MasterThesis.pdf"
                target="_blank"
                underline="hover"
              >
                CROSS City Mobile Application: Gamified Peer-Based Location
                Certification
              </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Tecnico
