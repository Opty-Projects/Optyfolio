import { IconType } from 'react-icons'
import { GrMysql } from 'react-icons/gr'
import { RiJavaFill, RiVuejsFill } from 'react-icons/ri'
import {
  SiAngular,
  SiDjango,
  SiFlask,
  SiGraphql,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'
import {
  blue,
  green,
  lightBlue,
  orange,
  pink,
  purple,
  red,
  teal,
  yellow,
} from '@mui/material/colors'

export interface Skill {
  name: string
  Icon?: IconType
  color?: string
  level: number // 1-100
}

export const skills: Record<string, Skill[]> = {
  'Frontend Frameworks': [
    { name: 'React', Icon: SiReact, color: lightBlue[600], level: 95 },
    { name: 'React Native', Icon: SiReact, color: lightBlue[600], level: 95 },
    { name: 'Vue', Icon: RiVuejsFill, color: green[600], level: 75 },
    { name: 'Angular', Icon: SiAngular, color: red[600], level: 75 },
  ],
  'Backend Frameworks': [
    { name: 'Express.js', Icon: SiNodedotjs, color: yellow[700], level: 95 },
    { name: 'Flask', Icon: SiFlask, level: 95 },
    { name: 'Django', Icon: SiDjango, color: teal[600], level: 75 },
    { name: 'Spring Boot', Icon: SiSpringboot, color: green[600], level: 75 },
    { name: 'GraphQL', Icon: SiGraphql, color: pink[600], level: 75 },
  ],
  Databases: [
    { name: 'PostgreSQL', Icon: SiPostgresql, color: blue[600], level: 90 },
    { name: 'MySQL', Icon: GrMysql, color: blue[600], level: 90 },
    { name: 'MongoDB', Icon: SiMongodb, color: green[600], level: 90 },
  ],
  'Programming Languages': [
    { name: 'TypeScript', Icon: SiTypescript, color: blue[600], level: 95 },
    { name: 'Python', Icon: SiPython, color: blue[600], level: 95 },
    { name: 'Java', Icon: RiJavaFill, color: orange[600], level: 95 },
    { name: 'C#', color: purple[600], level: 75 },
    { name: 'C', color: purple[600], level: 75 },
  ],
}
