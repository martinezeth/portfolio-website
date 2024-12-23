import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  reactjs,
  nodejs,
  git,
  sql,
  cplusplus,
  unrealEngine,
  swift,
  python,
  manualClassifier,
  wagerWiseHome,
  wagerWiseLiveSession,
  wagerWiseSettings,
  crisisCompanionMap,
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
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'C++',
    icon: cplusplus,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Unreal Engine',
    icon: unrealEngine,
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
    name: 'Swift',
    icon: swift,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'SQL',
    icon: sql,
  },
  {
    name: 'git',
    icon: git,
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
    title: 'Student Researcher',
    company_name: 'Sonoma State University',
    icon: ssuPaw,
    iconBg: '#333333',
    date: 'Sept 2023 - May 2024',
  },
  {
    title: 'XR Student Developer',
    company_name: 'Sonoma State University',
    icon: ssuPaw,
    iconBg: '#333333',
    date: 'Aug 2021 - Feb 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Manual Image Classifier',
    description: `Created for use by my computer vision research group at Sonoma State University, this Python tool dramatically accelerates the process of labeling data for training datasets. 
    
    The tool offers quick keyboard-based classification with remote server integration, supports dual classification modes, enables auto-sync between local and server environments, and provides simple category management.`,
    techStack: {
      primary: ['Python'],
      libraries: ['Paramiko', 'Matplotlib', 'NumPy'],
      development: ['Conda']
    },
    images: [manualClassifier],
    repo: 'https://github.com/martinezeth/manual-image-classifier'
  },
  {
    id: 'project-2',
    name: 'WagerWise',
    description: `An iOS application focusing on responsible gambling through real-time session tracking and data analytics. The app implements Firebase for authentication and real-time data synchronization, providing users with comprehensive tracking and analysis of their gambling activities.

    Key features include session tracking with customizable alerts, comprehensive statistics dashboard, secure user authentication, and customizable betting limits.`,
    techStack: {
      frontend: ['Swift', 'UIKit', 'SwiftUI'],
      backend: ['Firebase'],
      database: ['Firebase Realtime Database'],
      tools: ['Xcode', 'TestFlight']
    },
    images: [wagerWiseHome, wagerWiseLiveSession, wagerWiseSettings],
    status: 'Testing Phase - Preparing for App Store submission',
  },
  {
    id: 'project-3',
    name: 'Crisis Companion',
    description: `A web-based emergency response platform featuring an interactive map interface built with Mapbox GL JS. Led the development of the map visualization component, enabling real-time crisis event reporting and location-based information display.

    Key contributions include implementing the interactive map interface with custom marker clustering, real-time geolocation tracking, custom event filtering system for different crisis types, and dynamic information display for crisis events.`,
    techStack: {
      frontend: ['React', 'Leaflet JS', 'Tailwind CSS'],
      backend: ['Node.js', 'Express'],
      database: ['PostgreSQL'],
      tools: ['npm']
    },
    images: [crisisCompanionMap],
  },
];

export { services, technologies, experiences, projects };
