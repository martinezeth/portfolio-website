import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  manualClassifier,
  wagerWiseHome,
  nyeusi,
  space,
  dcc,
  ssuPaw,
  gradCap,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  // {
  //   title: 'UI/UX Design',
  //   icon: ux,
  // },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Bachelor of Science in Computer Science',
    company_name: 'Sonoma State University',
    icon: gradCap,
    iconBg: '#333333',
    date: 'Graduated May 2024'
  },
  {
    title: 'XR Student Developer',
    company_name: 'Sonoma State University',
    icon: ssuPaw,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
  {
    title: 'Student Researcher',
    company_name: 'Sonoma State University',
    icon: ssuPaw,
    iconBg: '#333333',
    date: 'Sept 2023 - May 2024',
  },
];

//  TODO:  Modify formatting of 'projects' props to contain tech stack
const projects = [
  {
    id: 'project-1',
    name: 'Manual Image Classifier',
    description: 'A tool for manually classifying images to create training datasets for machine learning models. It provides an intuitive interface for users to efficiently sort and label large volumes of images, streamlining the data preparation process for ML projects.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: manualClassifier,
    repo: 'https://github.com/martinezeth/manual-image-classifier',
    //demo: '',
  },
  {
    id: 'project-2',
    name: 'WagerWise [In Progress]',
    description:
      'WagerWise is an iOS application designed to help users track their gambling activities and promote responsible gaming habits. It provides real-time session tracking, customizable limits, and insightful statistics to encourage mindful betting practices.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: wagerWiseHome,
   // repo: '',
  // demo: '',
  },
  {
    id: 'project-3',
    name: 'Crisis Companion',
    description: 'Crisis Companion is a web-based platform designed to provide crucial information and resources during emergency situations. It features real-time updates, interactive maps, and a user-friendly interface to help communities navigate crises effectively.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: '',
    demo: '',
  },
];

export { services, technologies, experiences, projects };
