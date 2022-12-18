import { IconType } from 'react-icons'
import { FaGlobe, FaSchool } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import { SiGithub, SiLinkedin, SiUdemy } from 'react-icons/si'

export interface Link {
  href: string
  Icon: IconType
  tooltip: string
}

export const certificates: Link[] = [
  {
    href: 'https://www.dropbox.com/sh/de630iboukz9n7j/AAAGsjfkRv30dD20LlfmBoDWa?dl=0',
    Icon: FaSchool,
    tooltip: 'High school certificates',
  },
  {
    href: 'https://www.dropbox.com/sh/4sh29fvjv5y01qk/AAAASJlkjH8PxnVZX0hsEf43a?dl=0',
    Icon: IoSchool,
    tooltip: 'University certificates',
  },
  {
    href: 'https://www.dropbox.com/sh/sovrxx25zwvukf0/AAAKGlPZ3jWK8uFnT2w_CPbfa?dl=0',
    Icon: SiUdemy,
    tooltip: 'Udemy certificates',
  },
  {
    href: 'https://www.dropbox.com/sh/7gbjyzvl15qu2w8/AAApkXNo7A2gaNJ1ml1_HE6da?dl=0',
    Icon: FaGlobe,
    tooltip: 'English certificates',
  },
]

export const socialNetworks: Link[] = [
  {
    href: 'https://www.linkedin.com/in/ricardograde/',
    Icon: SiLinkedin,
    tooltip: 'LinkedIn profile',
  },
  {
    href: 'https://github.com/RicardoGrade',
    Icon: SiGithub,
    tooltip: 'GitHub profile',
  },
]
