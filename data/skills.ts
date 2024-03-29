import { IconType } from 'react-icons'
import { GrMysql } from 'react-icons/gr'
import { RiGoogleFill, RiVuejsFill } from 'react-icons/ri'
import {
  SiAngular,
  SiFirebase,
  SiFlask,
  SiJava,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from 'react-icons/si'
import {
  blue,
  green,
  lightBlue,
  orange,
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
    { name: 'Angular', Icon: SiAngular, color: red[600], level: 65 },
  ],
  'Backend Frameworks': [
    { name: 'Express', Icon: SiNodedotjs, color: green[600], level: 90 },
    { name: 'gRPC', Icon: RiGoogleFill, color: teal[600], level: 90 },
    { name: 'Flask', Icon: SiFlask, level: 75 },
    { name: 'Firebase', Icon: SiFirebase, color: yellow[700], level: 70 },
  ],
  Databases: [
    { name: 'MongoDB', Icon: SiMongodb, color: green[600], level: 85 },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: blue[600], level: 85 },
    { name: 'MySQL', Icon: GrMysql, color: blue[600], level: 85 },
  ],
  'Programming Languages': [
    { name: 'Java', Icon: SiJava, color: orange[600], level: 95 },
    { name: 'TypeScript', Icon: SiTypescript, color: blue[600], level: 90 },
    { name: 'Python', Icon: SiPython, color: blue[600], level: 90 },
    { name: 'C', color: purple[600], level: 80 },
    { name: 'C#', color: purple[600], level: 70 },
  ],
}
