import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { FC, Fragment } from 'react'
import { SiGithub } from 'react-icons/si'
import { Divider, Link, Tooltip, Typography } from '@mui/material'
import { certificates, socialNetworks } from '../../../data/links'
import { navLinks } from '../../../data/navigation'
import FooterLinks from './FooterLinks'
import {
  FooterContainer,
  FooterNav,
  FooterNavLink,
  FooterSection,
  SocialIconButton,
} from './styles'

const Footer: FC = () => {
  const router = useRouter()

  return (
    <FooterContainer>
      <FooterNav>
        {navLinks.map(({ href, label }, index) => (
          <Fragment key={href}>
            {index > 0 && (
              <Typography component="span" color="textSecondary" aria-hidden>
                ·
              </Typography>
            )}
            <FooterNavLink
              component={NextLink}
              href={href}
              sx={
                router.pathname === href ? { color: 'primary.main' } : undefined
              }
            >
              {label}
            </FooterNavLink>
          </Fragment>
        ))}
      </FooterNav>

      <FooterSection>
        <FooterLinks title="Certificates" links={certificates} />
        <Divider orientation="vertical" flexItem />
        <FooterLinks title="Find me on" links={socialNetworks} />
      </FooterSection>

      <FooterSection>
        <Tooltip title="Source code">
          <SocialIconButton
            href="https://github.com/Opty-Projects/Optyfolio"
            target="_blank"
            rel="noopener noreferrer"
            size="small"
          >
            <SiGithub />
          </SocialIconButton>
        </Tooltip>
        <Typography variant="body2" color="textSecondary">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{' '}
          Ricardo Grade ·{' '}
          <Link
            href="https://github.com/Opty-Projects/Optyfolio/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT License
          </Link>
        </Typography>
      </FooterSection>
    </FooterContainer>
  )
}

export default Footer
