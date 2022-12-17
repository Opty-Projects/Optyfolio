import { FC } from 'react'
import { IconButton, Tooltip, Typography } from '@mui/material'
import { Link } from '../../../data/links'
import { FooterLinksContainer, FooterLinksGroup } from './styles'

export interface FooterLinksProps {
  title: string
  links: Link[]
}

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => (
  <FooterLinksGroup>
    <Typography color="textSecondary">{title}</Typography>
    <FooterLinksContainer>
      {links.map(({ href, Icon, tooltip }) => (
        <Tooltip key={href} title={tooltip}>
          <IconButton
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <Icon />
          </IconButton>
        </Tooltip>
      ))}
    </FooterLinksContainer>
  </FooterLinksGroup>
)

export default FooterLinks
