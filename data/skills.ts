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

export interface Skill {
  name: string
  Icon?: IconType
  color?: string
  level: number // 1-100
}

export const skills: Record<string, Skill[]> = {
  'Frontend Frameworks': [
    { name: 'React', Icon: SiReact, color: '#61dbfb', level: 95 },
    { name: 'React Native', Icon: SiReact, color: '#61dbfb', level: 95 },
    { name: 'Vue', Icon: RiVuejsFill, color: '#3fb984', level: 75 },
    { name: 'Angular', Icon: SiAngular, color: '#dd0031', level: 65 },
  ],
  'Backend Frameworks': [
    { name: 'Express', Icon: SiNodedotjs, color: '#80bc01', level: 90 },
    { name: 'gRPC', Icon: RiGoogleFill, color: '#2da6b0', level: 90 },
    { name: 'Flask', Icon: SiFlask, level: 75 },
    { name: 'Firebase', Icon: SiFirebase, color: '#ffcc2d', level: 70 },
  ],
  Databases: [
    { name: 'MongoDB', Icon: SiMongodb, color: '#4faa41', level: 85 },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#2f6792', level: 85 },
    { name: 'MySQL', Icon: GrMysql, color: '#4479a1', level: 85 },
  ],
  'Programming Languages': [
    { name: 'Java', Icon: SiJava, color: '#f89917', level: 95 },
    { name: 'TypeScript', Icon: SiTypescript, color: '#2d79c7', level: 90 },
    { name: 'Python', Icon: SiPython, color: '#ffdc4d', level: 90 },
    { name: 'C', color: '#652e93', level: 80 },
    { name: 'C#', color: '#652e93', level: 70 },
  ],
}
