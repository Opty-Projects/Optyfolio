import { FC } from 'react'
import { SiReact } from 'react-icons/si'
import { Divider, IconButton, Link, Tooltip, Typography } from '@mui/material'
import { certificates, socialNetworks } from '../../../data/links'
import FooterLinks from './FooterLinks'
import { FooterContainer, FooterSection } from './styles'

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <FooterLinks title="Certificates" links={certificates} />
        <Divider orientation="vertical" flexItem />
        <FooterLinks title="Find me on" links={socialNetworks} />
      </FooterSection>
      <FooterSection>
        <Tooltip title="Source code">
          <IconButton
            href="https://github.com/Opty-Projects/Optyfolio"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <SiReact color="#61dbfb" />
          </IconButton>
        </Tooltip>
        <Typography color="textSecondary">
          Copyright © {new Date().getFullYear()} Ricardo Grade -{' '}
          <Link
            href="https://github.com/Opty-Projects/Optyfolio/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            MIT License
          </Link>
        </Typography>
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer
