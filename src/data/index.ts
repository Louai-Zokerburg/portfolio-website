import { TGeneralInfo, TField, TCertifecate, TProject } from '@/types';

import { FaCode, FaServer, FaCog } from 'react-icons/fa';

// General Informations
export const generalInfo: TGeneralInfo = {
  hero_info: {
    greeting: 'Hi there, my name is',
    name: 'Louai Boumediene',
    role: 'I am a Full-stack Web Developer',
    intro:
      'Passionate in building highly interactive, beautiful web application that bring your idea to life and push your current  business to the next level.',
    stats: {
      experience: 2,
      projects: 6,
      frameworks: 12,
    },
  },
  about_info: {
    bio: `
        I'm Louai, a Full-stack web developer and student at M'hamed Bouguerra University.

        I began my journey as a front-end developer with over 2 years of experience, focusing on web development, UI/UX design, and staying current with industry trends. 

        Now, I've transitioned into a full-stack developer with proficiency in both front-end and backend technologies, including Express, Node, MongoDB. I've completed couple legitimate  projects, demonstrating strong attention to detail and problem-solving skills, even under pressure. 

        My experience equips me to handle diverse and complex projects, and I'm excited to continue contributing to the world of web development.
    `,
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
        label: 'ADVENCED',
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
        label: 'ADVENCED',
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
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Mongodb, Mongodb Atlas',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Prisma, Prisma Studio',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Restfull APIs',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'JWT Auth',
      level: {
        label: 'ADVENCED',
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
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'TypeScript',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Firebase',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Material UI',
      level: {
        label: 'ADVENCED',
        value: 66,
      },
    },
    {
      name: 'Shadcn UI',
      level: {
        label: 'ADVENCED',
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
