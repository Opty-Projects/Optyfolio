import { IconType } from 'react-icons'
import { FaGlobe } from 'react-icons/fa'
import { MdSchool, MdSummarize } from 'react-icons/md'
import { SiGithub, SiLinkedin, SiUdemy } from 'react-icons/si'

export interface Link {
  href: string
  Icon: IconType
  tooltip: string
}

export const certificates: Link[] = [
  {
    href: 'https://www.dropbox.com/scl/fi/zf6y147yfrjlpxqqy3eiy/CV.pdf?rlkey=3vy3d03lhnwdhrogadymnc5df&st=nobt3ykt&dl=0',
    Icon: MdSummarize,
    tooltip: 'Curriculum Vitae',
  },
  {
    href: 'https://www.dropbox.com/sh/4sh29fvjv5y01qk/AAAASJlkjH8PxnVZX0hsEf43a?dl=0',
    Icon: MdSchool,
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
