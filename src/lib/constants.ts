import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/HunterHelms',
  linkedin: 'https://www.linkedin.com/in/brodiehelms/',
  mail: 'mailto:bhelms@redmontdigital.com',
  instagram: 'https://www.instagram.com/brodiehelms/',
  medium: 'https://medium.com/@brodiehelms',
  substack: 'https://pmbrodie.substack.com/',
  discord: 'https://discordapp.com/users/163300027618295808',
  rewardzilla: 'https://www.rewardzilla.net/',
}

// Global
export const SITE: Site = {
  TITLE: 'bhelms.com',
  DESCRIPTION:
    'Welcome to brodieh.com, a product enthusiast and software developer portfolio and blog.',
  AUTHOR: 'Brodie Helms',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Computer Science',
    institution: 'Universidad Central',
    link: 'https://www.ucentral.edu.co/',
    date: '2019 - 2027',
  },
  {
    title: '...',
    institution: 'Platzi',
    link: 'https://platzi.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Youtube',
    link: 'https://www.youtube.com/@midulive',
    date: '2018 - 2022',
  },
  {
    title: 'Tattoo Artist',
    institution: 'Tattoo Academy',
    link: 'https://www.instagram.com/tattoodcacademy/',
    date: '2024 - 2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'FIXD',
    location: 'Atlanta, GA (Remote)',
    position: 'Product Manager',
    start: '2022',
    link: 'https://fixdapp.com/',
    end: 'Current',
    tasks: [
      'Integration IA services with react and tailwind css',
      'Development and build of DB with mongoDB',
    ],
  },
  {
    company: 'LinkedIn',
    location: 'San Francisco, CA (Remote)',
    position: 'Technical Program Manager',
    link: 'https://linkedin.com/',
    start: '2018',
    end: '2021',
    tasks: [
      'Development of the Spot2 platform with the use of React, Redux, and Material UI',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'VynlMnky',
    link: 'https://www.vinylmnky.com/?srsltid=AfmBOoodTIt1wPYINyslQBeVnlqlYCLlRbOYM0NKz8ijFmv1X8-V0YxK',
    location: 'Austin, TX',
    position: 'Frontend developer',
    start: '2017',
    end: '2017',
    tasks: [
      'Development of the VynlMnkt platform with the use of React, Redux, and Material UI',
      'Work in VynlMnky e-commerce site with the use of Shopify, Liquid, and React',
    ],
  },
  {
    company: 'INETUM',
    location: 'Bogotá D C, Colombia',
    position: 'Frontend developer',
    start: '2021',
    link: 'https://www.inetum.com/es',
    end: '2021',
    tasks: [
      'Support in the QA area and bug review',
      'Use of SCRUM methodology',
      'Claro projects with the use of frameworks and libraries such as react and angular',
      'Use of redux toolkit as aproposal which allowed a shorter development time when using this tool',
    ],
  },
  {
    company: 'S I G',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2021',
    end: '2021',
    tasks: [
      'Development of a dashboard with react admin and chartjs for managing and entering information',
    ],
  },
  {
    company: 'BOOKII',
    location: 'Bogotá D C, Colombia',
    position: 'Software developer',
    start: '2019',
    end: '2021',
    tasks: [
      'Productive collaborationwiththebackendteamforthecreationofthe conversationalclubs',
      'Effective coding of conversational clubs following design guide lines and using the Redux statemanager',
      'Creation of the Bookii page in Spanish and change of texts in cms',
      'Generation of static posts using Gatsby and the Contentful cms for the Bookii blog',
    ],
  },
]
