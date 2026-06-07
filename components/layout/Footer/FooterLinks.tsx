import { FC } from 'react'
import { Tooltip, Typography } from '@mui/material'
import { Link } from '../../../data/links'
import {
  FooterLinksContainer,
  FooterLinksGroup,
  SocialIconButton,
} from './styles'

export interface FooterLinksProps {
  title: string
  links: Link[]
}

const FooterLinks: FC<FooterLinksProps> = ({ title, links }) => (
  <FooterLinksGroup>
    <Typography variant="body2" color="textSecondary">
      {title}
    </Typography>
    <FooterLinksContainer>
      {links.map(({ href, Icon, tooltip }) => (
        <Tooltip key={href} title={tooltip}>
          <SocialIconButton
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <Icon />
          </SocialIconButton>
        </Tooltip>
      ))}
    </FooterLinksContainer>
  </FooterLinksGroup>
)

export default FooterLinks
