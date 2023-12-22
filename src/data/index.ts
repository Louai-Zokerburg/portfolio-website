import { TGeneralInfo, TField, TCertifecate, TProject } from '@/types';

import { FaCode, FaServer, FaCog } from 'react-icons/fa';

import project_1_cover from '@/assets/images/project_1/project_1_cover.png';
import project_2_cover from '@/assets/images/project_2/project_2_cover.png';
import project_3_cover from '@/assets/images/project_3/project_3_cover.png';
import project_4_cover from '@/assets/images/project_4/project_4_cover.png';
import project_5_cover from '@/assets/images/project_5/project_5_cover.png';

// General Informations
export const generalInfo: TGeneralInfo = {
  hero_info: {
    greeting: 'Hi there, my name is',
    name: 'Louai Boumediene',
    role: 'Full-stack Web Developer',
    intro:
      'Passionate in building highly interactive, beautiful web application that bring your idea to life and push your current  business to the next level.',
    stats: {
      experience: 2,
      projects: 6,
      frameworks: 12,
    },
  },
  about_info: {
    bio: {
      intro: `I'm Louai, a Full-stack web developer and student at M'hamed Bouguerra University.`,
      main: `I began my journey as a front-end developer with over 2 years of experience, focusing on web development, UI/UX design, and staying current with industry trends.
      Now, I've transitioned into a full-stack developer with proficiency in both front-end and backend technologies, including Express, Node, MongoDB. I've completed couple legitimate  projects, demonstrating strong attention to detail and problem-solving skills, even under pressure.`,
      outro: `My experience equips me to handle diverse and complex projects, and I'm excited to continue contributing to the world of web development.`,
    },
  },
  contact_info: {
    email: 'boumedienelouai2@gmail.com',
    linkedin: 'https://www.linkedin.com/in/louai-boumediene-018919262',
    github: 'https://github.com/Louai-Zokerburg',
    twitter: 'https://twitter.com/Louai_Dourov',
  },
};

// Fields Informations
const frontendDevelopment: TField = {
  title: 'Frontend Development',
  description:
    'Frontend development shapes user experiences through responsive design and seamless interactivity.',
  icon: FaCode,
  skills: [
    {
      name: 'HTML, CSS, JS',
      level: {
        label: 'PRO',
        value: 88,
      },
    },
    {
      name: 'React.js',
      level: {
        label: 'PRO',
        value: 88,
      },
    },
    {
      name: 'Next.js',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Tailwindcss',
      level: {
        label: 'PRO',
        value: 88,
      },
    },
    {
      name: 'Redux/Redux Toolkit',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
  ],
};
const backendDevelopment: TField = {
  title: 'Backend Development',
  description:
    'Backend development powers applications, handling data, logic, and server-side operations',
  icon: FaServer,
  skills: [
    {
      name: 'Node.js Express.js',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Mongodb, Mongodb Atlas',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Prisma, Prisma Studio',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Restfull APIs',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'JWT Auth',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
  ],
};
const devtoolsDevelopment: TField = {
  title: 'Devtools & Libraries',
  // description: 'Backend development powers applications, handling data, logic, and server-side operations',
  description:
    'DevTools empower developers, offering insights and tools for debugging and optimizing code.',
  icon: FaCog,
  skills: [
    {
      name: 'Git & GitHub',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'TypeScript',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Firebase',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Material UI',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
    {
      name: 'Shadcn UI',
      level: {
        label: 'ADVANCED',
        value: 66,
      },
    },
  ],
};
export const fieldsInfo: TField[] = [
  frontendDevelopment,
  backendDevelopment,
  devtoolsDevelopment,
];

// Certefications Informations
export const certefications: TCertifecate[] = [
  {
    title: 'Version Controle',
    from: 'Meta',
    credential_url: 'https://www.coursera.org/verify/7579S97DQWPN',
    date: 'Mar 25, 2023',
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    from: 'IBM',
    credential_url: 'https://www.coursera.org/verify/NN5CJV9M7TRH',
    date: 'May 30, 2023',
  },
  {
    title: 'Programming In Python',
    from: 'Meta',
    credential_url: 'https://www.coursera.org/verify/VCHN3E58ZAP8',
    date: 'Mar 23, 2023',
  },
  {
    title: 'MERN Stack Course - MongoDB, Express, React and NodeJS',
    from: 'Udemy',
    credential_url:
      'https://udemy-certificate.s3.amazonaws.com/pdf/UC-11a794b3-4291-4514-a22c-7ceb23268df4.pdf',
    date: 'Dec 14, 2022',
  },
  {
    title: 'Introduction to Databases for Back-End Development',
    from: 'Meta',
    credential_url: 'https://www.coursera.org/verify/A9HNGHFMQLAB',
    date: 'Mar 29, 2023',
  },
];

// Projecrs Information
export const projectsInfo: TProject[] = [
  {
    id: 'ai-code-converter',
    title: 'AI Powered Code Converter',
    description:
      'AI Code Converter is a MERN (MongoDB, Express.js, React.js, Node.js) stack web application that simplifies the translation of code snippets from one programming language to another. By integrating with the ChatGPT API, this tool provides developers with an effortless way to convert code snippets without manual intervention.',
    features: [
      '💪🏻 A Solid & robust authentication system: Using the JWT Tokens.',
      '🧑🏻‍💻 Language Agnostic: Supports translation between a wide range of programming languages..',
      '✨ User-Friendly Interface: Intuitive web interface for easy code input and output.',
      '🌓 Multi Theme: It provides Dark and Light theme.',
      '🤖 ChatGPT Integration: Utilizes the ChatGPT API for accurate and context-aware code translations.',
      '🤩 History Tracking: Keeps a record of past translations for reference.',
    ],
    technologies: [
      'React.js',
      'Tailwindcss',
      'Zustand',
      'Node.js',
      'Express',
      'MongoDB',
      'ChatGPT API',
    ],
    live_demo: 'https://ai-code-converter-client.vercel.app',
    source_code: 'https://github.com/Louai-Zokerburg/AI-Code-Converter',
    categories: ['', ''],
    images: {
      cover: project_1_cover,
      screenshots: [project_1_cover],
    },
  },

  {
    id: 'louligram-social-media-app',
    title: 'Louligram Social Media App',
    description:
      'Louligram is a social media (Instagram Clone)built with React, React Context, React Query, Typescript, Tailwind CSS, and Appwrite for the backend. It features a beautiful UI with light and dark themes, user authentication, post creation, profile viewing, following, liking posts, saving posts, and more.',
    features: [
      '💪🏻 User Authentication: Users can sign up or sign in securely using Appwrite for backend authentication',
      '🧑🏻‍💻 Dynamic Theming: The app supports both light and dark themes, providing users with a visually appealing experience.',
      '✨ Post Interaction: Users can create, view, like, and save posts. The app utilizes React Query for efficient data fetching and management.',
      '🌓User Profiles: Users can view their own profiles and profiles of others, including their posts and followers.',
      '🤩 Follow System: Louligram includes a follow system, allowing users to connect with each other.',
      '😎 Fully Responsive: You can have a high quality user experience either form your phone or desktop.',
    ],
    technologies: [
      'React.js',
      'Tailwindcss',
      'React Context',
      'TypeScript',
      'React Query',
      'Appwrite',
    ],
    live_demo: 'https://louligram-social-media-app.vercel.app',
    source_code:
      'https://github.com/Louai-Zokerburg/louligram-social-media-app',
    categories: ['', ''],
    images: {
      cover: project_2_cover,
      screenshots: [project_2_cover],
    },
  },
  {
    id: 'my-portfolio-website',
    title: 'Portfolio Website',
    description:
      'This is my personal portfolio website built using Next.js 13 with TypeScript, Tailwind CSS, and Shadcn UI library. The website features a light and dark theme and includes three main pages: Home, About, and Projects. It is designed to be aesthetically pleasing and performs efficiently.',
    features: [
      '🌒 Light and Dark Theme: Toggle between light and dark themes for a personalized experience.',
      '🌐 Modern Looking Beautiful Sidebar Navigations: Enjoy seamless navigation with a visually appealing sidebar that enhances user experience.',
      '✨ Beautiful Modern UI/UX with Engaging Animations: Experience a stunning user interface with modern design principles and engaging animations that captivate visitors.',
      '📱 Responsive Design: Explore the portfolio on various devices, as the website is designed to be responsive and provide an optimal viewing experience across different screen sizes.',
      '🗂️ Categorized Projects: Easily find and explore projects with a categorized display, allowing visitors to filter and view projects based on different criteria.',
      '📄  Single Project Details Page: Dive into the details of each project with dedicated single project pages, providing comprehensive information, images, and any other relevant details.',
    ],
    technologies: [
      'React.js',
      'Next.js 13',
      'Tailwindcss',
      'TypeScript',
      'Shadcn UI',
    ],
    live_demo: 'https://portfolio-website-gray-theta.vercel.app',
    source_code: 'https://github.com/Louai-Zokerburg/portfolio-website',
    categories: ['', ''],
    images: {
      cover: project_3_cover,
      screenshots: [project_3_cover],
    },
  },
  {
    id: 'jobify-jobs-board',
    title: 'Jobify MERN Jobs Board',
    description:
      'Jobify is a full-stack MERN (MongoDB, Express, React, Node.js) web application that empowers users to manage job-related activities efficiently. The app provides a feature-rich interface with secure authentication, comprehensive job management, and user profile customization.',
    features: [
      '🌐 User Authentication: Securely sign up or log in to access personalized features.',
      '🕵️ Job Browsing: Explore a vast array of available jobs with detailed information.',
      '➕ Add New Jobs: Registered users can contribute to the job board by adding new job listings.',
      '❌ Delete Jobs: Remove job listings that are no longer relevant or required',
      '🔍 Search Jobs: Easily search for specific jobs based on keywords or criteria.',
      '🎯 Filter Jobs: Utilize filtering options to narrow down job listings based on various parameters.',
      '🔐 Login & Signup: A secure authentication system for user accounts.',
      '🖼️ Add Profile Picture: Personalize your profile by adding a custom profile picture.',
    ],
    technologies: [
      'React.js',
      'Styled Components',
      'React Query',
      'React Context',
      'Rechats.js',
      'Axios',
      'Express',
      'Node.js',
      'Mongo DB',
      'Cloudinary',
      'JWT Auth',
    ],
    live_demo: 'https://jobfy-mern-app.onrender.com',
    source_code: 'https://github.com/Louai-Zokerburg/mern-stack-jobify',
    categories: ['', ''],
    images: {
      cover: project_4_cover,
      screenshots: [project_4_cover],
    },
  },
  {
    id: 'digital-fennec-landing-page',
    title: 'Digital Fennec Landing Page',
    description:
      'Welcome to the Fennec Digital website repository! Explore our world of innovative and captivating mobile games. Learn more about our company, mission, and the exciting experiences we create.',
    features: [
      'Dynamic Content: Built using Next.js for a responsive and dynamic user experience.',
      'Multi-Departmental Showcase: Discover our Full Stack, Graphic and Art Design, and Game Development departments.',
      'Funky Games: Explore our whimsical and engaging game portfolio.',
      'Contact Us: Easily connect with us for inquiries and collaborations.',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'JavaScript',
      'Tailwindcss',
      'AOS (Animation on scroll)',
      'Git/GitHub ',
    ],
    live_demo: 'https://digital-fennec-website.vercel.app',
    source_code: 'https://github.com/Louai-Zokerburg/digital-fennec-website-v2',
    categories: ['', ''],
    images: {
      cover: project_5_cover,
      screenshots: [project_5_cover],
    },
  },
];
