import { IconType } from 'react-icons'
import { SiDropbox, SiGithub, SiOverleaf, SiYoutube } from 'react-icons/si'

export interface Course {
  name: string
  href: string
  score: number
  credits: number
  period: string
  links?: {
    href: string
    Icon: IconType
    color?: string
    tooltip: string
  }[]
  branch:
    | 'Computer Engineering Sciences'
    | 'Engineering Sciences'
    | 'Cross-Cutting Skills'
    | 'Dissertation'
    | 'Distributed Systems'
    | 'Cyber-Security'
    | 'Common Branch'
    | 'Free options'
}

export const bscCourses: Course[] = [
  {
    name: 'Software Engineering',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/ESof96451113264/2019-2020/2-semestre',
    score: 20,
    credits: 7.5,
    period: '3rd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/Quizzes-Tutor',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Distributed Systems',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/SDis151113264/2019-2020/2-semestre',
    score: 19,
    credits: 7.5,
    period: '3rd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/DS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Compilers',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/Com564511132624/2019-2020/2-semestre',
    score: 18,
    credits: 6,
    period: '3rd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/Comp',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Systems Analysis & Modeling',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/AMS1113264/2019-2020/2-semestre',
    score: 15,
    credits: 6,
    period: '3rd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/SAM',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Computer Networks',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/RC9179577/2019-2020/1-semestre',
    score: 20,
    credits: 6,
    period: '3rd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/CN',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Databases',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/BD8179577/2019-2020/1-semestre',
    score: 19,
    credits: 6,
    period: '3rd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/DB',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Artificial Intelligence',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/IArt9179577/2019-2020/1-semestre',
    score: 18,
    credits: 7.5,
    period: '3rd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/AI',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Computer Graphics',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CGra8179577/2019-2020/1-semestre',
    score: 18,
    credits: 4.5,
    period: '3rd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/CG',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Computer Organization',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/OC12179577/2019-2020/1-semestre',
    score: 18,
    credits: 6,
    period: '3rd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/CO',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Algorithms Analysis & Synthesis',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/ASA10111326/2018-2019/2-semestre',
    score: 16,
    credits: 6,
    period: '2nd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/AAS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Human Machine Interfaces',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/IPM17111326/2018-2019/2-semestre',
    score: 15,
    credits: 7.5,
    period: '2nd year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/HMI',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Operating Systems',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/SO717957/2018-2019/1-semestre',
    score: 19,
    credits: 6,
    period: '2nd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/OS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Object Oriented Programming',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PO1717957/2018-2019/1-semestre',
    score: 19,
    credits: 6,
    period: '2nd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/OOP',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Programming Logic',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/LP5111326/2017-2018/2-semestre',
    score: 20,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/PL',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Algorithms & Data Structures Introduction',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/IAED10111326/2017-2018/2-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/ADSI',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Programming Fundamentals',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/FP1795/2017-2018/1-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/PF',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Computer Architecture Introduction',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/IAC31795/2017-2018/1-semestre',
    score: 18,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-BSc/CAI',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Computer Engineering Sciences',
  },
  {
    name: 'Computer Theory',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/TCom111326/2018-2019/2-semestre',
    score: 19,
    credits: 4.5,
    period: '2nd year, 2nd semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Probability & Statistics',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PEst20111326/2018-2019/2-semestre',
    score: 18,
    credits: 6,
    period: '2nd year, 2nd semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Electromagnetism & Optics',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/EO9111326/2018-2019/2-semestre',
    score: 18,
    credits: 6,
    period: '2nd year, 2nd semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Mechanics & Waves',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/MO317957/2018-2019/1-semestre',
    score: 17,
    credits: 6,
    period: '2nd year, 1st semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Complex Analysis & Differential Equations',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/ACED2117957/2018-2019/1-semestre',
    score: 15,
    credits: 7.5,
    period: '2nd year, 1st semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Discrete Mathematics',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/MD5111326/2017-2018/2-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 2nd semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Differential & Integral Calculus II',
    href: 'https://cdi2tp.math.tecnico.ulisboa.pt/?semestre=2017_2',
    score: 14,
    credits: 7.5,
    period: '1st year, 2nd semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Linear Algebra',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/AL291795-2/2017-2018/1-semestre',
    score: 19,
    credits: 6,
    period: '1st year, 1st semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Differential & Integral Calculus I',
    href: 'https://cdi1tp.math.tecnico.ulisboa.pt/?semestre=2017_1',
    score: 16,
    credits: 6,
    period: '1st year, 1st semester',
    branch: 'Engineering Sciences',
  },
  {
    name: 'Computing & Society',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CS1113264/2019-2020/2-semestre',
    score: 17,
    credits: 3,
    period: '3rd year, 2nd semester',
    branch: 'Cross-Cutting Skills',
  },
  {
    name: 'Management',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/Ges1117957/2018-2019/1-semestre',
    score: 16,
    credits: 4.5,
    period: '2nd year, 1st semester',
    branch: 'Cross-Cutting Skills',
  },
  {
    name: 'Computer Engineering Introduction',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/IEI71795/2017-2018/1-semestre',
    score: 16,
    credits: 3,
    period: '1st year, 1st semester',
    branch: 'Cross-Cutting Skills',
  },
]

export const mscCourses: Course[] = [
  {
    name: "Master's Dissertation",
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/DMEIC2/2021-2022/2-semestre',
    score: 18,
    credits: 30,
    period: '2nd year, 2nd semester',
    links: [
      {
        href: 'https://www.dropbox.com/s/inyxf2on7lgiie3/MasterThesis.pdf?dl=0',
        Icon: SiDropbox,
        color: '#2196f3',
        tooltip: 'Dissertation PDF document',
      },
      {
        href: 'https://www.dropbox.com/s/g9d0rqe61nt5od4/MasterExtendedAbstract.pdf?dl=0',
        Icon: SiDropbox,
        color: '#2196f3',
        tooltip: 'Article PDF document',
      },
      {
        href: 'https://www.overleaf.com/read/jfznmjdwfjjv',
        Icon: SiOverleaf,
        color: '#4caf50',
        tooltip: 'Dissertation Overleaf project',
      },
      {
        href: 'https://www.overleaf.com/read/xkgjbxpmkjbm',
        Icon: SiOverleaf,
        color: '#4caf50',
        tooltip: 'Article Overleaf project',
      },
      {
        href: 'https://youtu.be/cz-1ctWDVGU',
        Icon: SiYoutube,
        color: '#f44336',
        tooltip: 'Presentation video',
      },
      {
        href: 'https://youtu.be/-Ev1JLfb7W0',
        Icon: SiYoutube,
        color: '#f44336',
        tooltip: 'App demo',
      },
    ],
    branch: 'Dissertation',
  },
  {
    name: "Master's Dissertation Project",
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PMEIC2/2021-2022/1-semestre',
    score: 18,
    credits: 12,
    period: '2nd year, 1st semester',
    links: [
      {
        href: 'https://www.dropbox.com/s/mm1rawv7zqgyavp/MasterDissertationProject.pdf?dl=0',
        Icon: SiDropbox,
        color: '#2196f3',
        tooltip: 'PDF document',
      },
      {
        href: 'https://www.overleaf.com/read/hsgrgwmcmhnr',
        Icon: SiOverleaf,
        color: '#4caf50',
        tooltip: 'Overleaf project',
      },
      {
        href: 'https://youtu.be/VKfyhT1Y0iI',
        Icon: SiYoutube,
        color: '#f44336',
        tooltip: 'Presentation video',
      },
    ],
    branch: 'Dissertation',
  },
  {
    name: 'Mobile & Ubiquitous Computing',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CMov46/2020-2021/2-semestre',
    score: 20,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/MUC',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Distributed Systems',
  },
  {
    name: 'Cloud Computing & Virtualization',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/AVExe76/2020-2021/2-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/CCV',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Distributed Systems',
  },
  {
    name: 'Parallel & Distributed Computing',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CPD132646/2020-2021/2-semestre',
    score: 18,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/PDC',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Distributed Systems',
  },
  {
    name: 'Design & Implementation of Distributed Applications',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PADI7/2020-2021/1-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/DIDA',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Distributed Systems',
  },
  {
    name: 'Highly Dependable Systems',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/SDTF46/2020-2021/2-semestre',
    score: 20,
    credits: 7.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/HDS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Cyber-Security',
  },
  {
    name: 'Network & Computer Security',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/SIRS7/2020-2021/1-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/NCS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Cyber-Security',
  },
  {
    name: 'Software Security',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/SSof7/2020-2021/1-semestre',
    score: 19,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/SS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Cyber-Security',
  },
  {
    name: 'Forensics Cyber-Security',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CSF7/2020-2021/1-semestre',
    score: 18,
    credits: 7.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/FCS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Cyber-Security',
  },
  {
    name: 'Management & Administration of IT Infrastructures & Services',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/AGI/2021-2022/1-semestre',
    score: 20,
    credits: 6,
    period: '2nd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/MAITIS',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Free options',
  },
  {
    name: 'User-Centered Design',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CCU/2021-2022/1-semestre',
    score: 19,
    credits: 6,
    period: '2nd year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/UCD',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Free options',
  },
  {
    name: 'Soft Skills',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/CTMee-I/2021-2022/1-semestre',
    score: 18,
    credits: 3,
    period: '2nd year, 1st semester',
    branch: 'Free options',
  },
  {
    name: 'Independent Studies 2',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PPes126/2020-2021/2-semestre',
    score: 20,
    credits: 1.5,
    period: '1st year, 2nd semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/IS2',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Common Branch',
  },
  {
    name: 'Independent Studies 1',
    href: 'https://fenix.tecnico.ulisboa.pt/disciplinas/PPes14/2020-2021/1-semestre',
    score: 20,
    credits: 1.5,
    period: '1st year, 1st semester',
    links: [
      {
        href: 'https://github.com/Opty-MSc/IS1',
        Icon: SiGithub,
        tooltip: 'GitHub project repository',
      },
    ],
    branch: 'Common Branch',
  },
]

export const getCoursesWeightedAvg = (courseList: Course[]) => {
  const [sum, credits] = courseList.reduce(
    (acc, { score, credits }) => {
      acc[0] += score * credits
      acc[1] += credits
      return acc
    },
    [0, 0]
  )
  return sum / credits
}
