import photo from '../assets/images/photo.jpeg'
import css from '../assets/svg/css.svg'
import html5 from '../assets/svg/html5.svg'
import git from '../assets/svg/git.svg'
import javascript from '../assets/svg/javascript.svg'
import jest from '../assets/svg/jest.svg'
import figma from '../assets/svg/figma.svg'
import npm from '../assets/svg/npm.svg'
import react from '../assets/svg/react.svg'
import ubuntu from '../assets/svg/ubuntu.svg'
import vite from '../assets/svg/vite.svg'
import github from '../assets/svg/github.svg'
import sass from '../assets/svg/sass.svg'
import instagram from '../assets/svg/instagram.svg'
import linkedin from '../assets/svg/linkedin.svg'
import youtube from '../assets/svg/youtube.svg'
import tidal from '../assets/svg/tidal.svg'

const data = {
  hero: {
    areaName: 'hero',
    size: '',
    heading: 'Rodrigo Andre Gutierrez',
    subheading: 'Pixel Perfect Specialist',
    description: '',
  },
  portrait: {
    areaName: 'portrait',
    size: '',
    image: {
      imgSrc: photo,
      alt: 'Close-up portrait of Rodrigo, a Frontend Developer. He is wearing glasses and a black t-shirt, looking directly at the camera with a professional and focused expression',
    },
  },
  about: {
    areaName: 'about',
    size: '',
    content: [
      'Frontend Developer & Pixel Perfect Specialist dedicated to crafting scalable digital environments through a strict component-first methodology.',
      'Based in Chile, specializing in the transformation of complex data into clean, semantic, and high-performance interfaces.',
      'Approach based on unwavering precision, structural integrity, and a strong commitment to accessibility standards to ensure inclusive digital experiences.',
    ],
  },
  stack: {
    areaName: 'stack',
    size: '',
    heading: 'Stack',
    tools: [
      {
        name: 'html5',
        icon: {
          iconSrc: html5,
          alt: 'html5 icon',
        },
      },
      {
        name: 'css',
        icon: {
          iconSrc: css,
          alt: 'css icon',
        },
      },
      {
        name: 'sass',
        icon: {
          iconSrc: sass,
          alt: 'sass icon',
        },
      },
      {
        name: 'JS ES6+',
        icon: {
          iconSrc: javascript,
          alt: 'javascript icon',
        },
      },
      {
        name: 'react',
        icon: {
          iconSrc: react,
          alt: 'react icon',
        },
      },
      {
        name: 'git',
        icon: {
          iconSrc: git,
          alt: 'git icon',
        },
      },
      {
        name: 'github',
        icon: {
          iconSrc: github,
          alt: 'github icon',
        },
      },
      {
        name: 'jest',
        icon: {
          iconSrc: jest,
          alt: 'jest icon',
        },
      },
      {
        name: 'figma',
        icon: {
          iconSrc: figma,
          alt: 'figma icon',
        },
      },
      {
        name: 'npm',
        icon: {
          iconSrc: npm,
          alt: 'npm icon',
        },
      },
      {
        name: 'ubuntu',
        icon: {
          iconSrc: ubuntu,
          alt: 'ubuntu icon',
        },
      },
      {
        name: 'vite',
        icon: {
          iconSrc: vite,
          alt: 'vite icon',
        },
      },
    ],
  },
  projects: {
    areaName: 'projects',
    heading: 'Projects',
    size: '',
    items: [
      {
        name: '',
        description: '',
        thumbnail: {
          imgSrc: '',
          alt: '',
        },
        tags: [''],
      },
    ],
  },
  contact: {
    areaName: 'contact',
    size: '',
    heading: 'Contact',
    social: [
      {
        platform: 'Instagram',
        userName: '@rodanlostboy',
        url: '',
        urlTitle: '',
        icon: {
          iconSrc: instagram,
          alt: '',
        },
      },
      {
        platform: 'Linkedin',
        userName: '@rodancoder',
        url: '',
        urlTitle: '',
        icon: {
          iconSrc: linkedin,
          alt: '',
        },
      },
      {
        platform: 'Youtube',
        userName: 'Rodan Epic Fail',
        url: '',
        urlTitle: '',
        icon: {
          iconSrc: youtube,
          alt: '',
        },
      },
      {
        platform: 'Tidal',
        userName: '@rodan',
        url: '',
        urlTitle: '',
        icon: {
          iconSrc: tidal,
          alt: '',
        },
      },
    ],
  },
}

export default data
