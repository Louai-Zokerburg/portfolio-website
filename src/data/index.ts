import { TCertificate, TField, TGeneralInfo, TProject } from "@/types";

import { FaCode, FaCog, FaServer } from "react-icons/fa";

import no_cover from "@/assets/images/no-front-end.png";
import project_1_cover from "@/assets/images/project_1/project_1_cover.png";
import project_2_cover from "@/assets/images/project_2/project_2_cover.png";
import project_3_cover from "@/assets/images/project_3/project_3_cover.png";
import project_4_cover from "@/assets/images/project_4/project_4_cover.png";
import project_5_cover from "@/assets/images/project_5/project_5_cover.png";
import project_6_cover from "@/assets/images/project_6/project_6_cover.png";

// General Information
export const generalInfo: TGeneralInfo = {
  hero_info: {
    greeting: "Hi there, my name is",
    name: "Louai Boumediene",
    role: "Backend Engineer",
    intro:
      "Passionate in building highly interactive, beautiful web application that bring your idea to life and push your current  business to the next level.",
    stats: {
      experience: 3,
      projects: 6,
      frameworks: 12,
    },
  },
  about_info: {
    bio: {
      intro: `Full-stack web developer with three years of experience, skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express, MongoDB, MySQL, Python, Django, Docker, Git, and GitHub.`,
      main: `I excel in both frontend and backend development, specializing in creating responsive web applications and robust backend systems. My work spans across various technologies, enabling me to deliver comprehensive solutions that meet client needs. Currently, I work as a Backend Engineer at BIGmama Technology, where I collaborate closely with cross-functional teams to deliver high-quality projects. My role involves developing scalable backend architectures, optimizing system performance, and ensuring seamless integration between frontend and backend components.`,
      outro: `I hold certifications in Meta Front-End and Back-End Development and continually stay updated with the latest industry trends to keep my skills sharp and relevant.`,
    },
  },
  contact_info: {
    email: "boumedienelouai2@gmail.com",
    linkedin: "https://www.linkedin.com/in/louai-boumediene-018919262",
    github: "https://github.com/Louai-Zokerburg",
    twitter: "https://twitter.com/Louai_Dourov",
  },
};

// Fields Information
const frontendDevelopment: TField = {
  title: "Frontend Development",
  description:
    "Frontend development shapes user experiences through responsive design and seamless interactivity.",
  icon: FaCode,
  skills: [
    {
      name: "HTML, CSS, JS",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "React.js",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Next.js",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Tailwindcss",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Typescript",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
  ],
};
const backendDevelopment: TField = {
  title: "Backend Development",
  description:
    "Backend development powers applications, handling data, logic, and server-side operations",
  icon: FaServer,
  skills: [
    {
      name: "Node.js Express.js",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Mongodb, Mongodb Atlas",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Python FastAPI",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Restfull APIs",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Micro Services",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
  ],
};
const devtoolsDevelopment: TField = {
  title: "Devtools & Libraries",
  // description: 'Backend development powers applications, handling data, logic, and server-side operations',
  description:
    "DevTools empower developers, offering insights and tools for debugging and optimizing code.",
  icon: FaCog,
  skills: [
    {
      name: "Git & GitHub",
      level: {
        label: "PRO",
        value: 88,
      },
    },
    {
      name: "Docker",
      level: {
        label: "ADVANCED",
        value: 66,
      },
    },
    {
      name: "Kubernetes",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "Redis",
      level: {
        label: "INTERMEDIATE",
        value: 44,
      },
    },
    {
      name: "Linux",
      level: {
        label: "ADVANCED",
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

// Certifications Information
export const certifications: TCertificate[] = [
  {
    title: "Meta Front-End Developer",
    from: "Meta",
    credential_url:
      "https://www.coursera.org/account/accomplishments/professional-cert/Q4TBPCX368N6",
    date: "Jul 23, 2024",
  },

  {
    title: "Meta Back-End Developer",
    from: "Meta",
    credential_url:
      "https://www.coursera.org/account/accomplishments/professional-cert/GDXN05XZZAJG",
    date: "Aug 06, 2024",
  },
  {
    title: "Applied Software Engineering Fundamentals",
    from: "Meta",
    credential_url:
      "https://www.coursera.org/account/accomplishments/specialization/PFMR949E2S5D",
    date: "Mar 29, 2023",
  },
  {
    title: "MERN Stack Course - MongoDB, Express, React and NodeJS",
    from: "Udemy",
    credential_url:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-11a794b3-4291-4514-a22c-7ceb23268df4.pdf",
    date: "Dec 14, 2023",
  },
  {
    title: "Developing Back-End Apps with Node.js and Express",
    from: "IBM",
    credential_url: "https://www.coursera.org/verify/NN5CJV9M7TRH",
    date: "May 30, 2023",
  },
];

// Projects Information
export const projectsInfo: TProject[] = [
  {
    id: "hyko-ai-project",
    title: "Hyko.ai",
    description:
      "Hyko.ai is an AI-powered automation tool developed by my current company, BIGmama Technology. As part of the backend team, I contribute to building the platform that simplifies complex workflows by automating tasks across various applications, similar to tools like Zapier and Make.",
    features: [
      "🤖 AI Automation: Automate tasks across different applications with AI-driven workflows.",
      "🔄 Workflow Management: Create, manage, and customize automation workflows.",
      "🔌 Integrations: Seamlessly connect with multiple apps and services.",
      "⚡ Real-Time Processing: Fast and efficient execution of automation tasks.",
      "📊 Analytics & Monitoring: Track performance and monitor workflows in real-time.",
      "💼 Enterprise-Ready: Scalable solutions for businesses of all sizes.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "MongoDB",
      "S3",
      "Redis",
      "Asyncio",
      "Next.js",
      "Tailwind",
      "Shadcn",
      "Zustand",
    ],
    live_demo: "https://beta.hyko.ai/sign-in",
    source_code: undefined,
    categories: ["", ""],
    images: {
      cover: project_6_cover,
      screenshots: [project_6_cover],
    },
  },
  {
    id: "ai-code-converter",
    title: "AI Powered Code Converter",
    description:
      "AI Code Converter is a MERN (MongoDB, Express.js, React.js, Node.js) stack web application that simplifies the translation of code snippets from one programming language to another. By integrating with the ChatGPT API, this tool provides developers with an effortless way to convert code snippets without manual intervention.",
    features: [
      "💪🏻 A Solid & robust authentication system: Using the JWT Tokens.",
      "🧑🏻‍💻 Language Agnostic: Supports translation between a wide range of programming languages..",
      "✨ User-Friendly Interface: Intuitive web interface for easy code input and output.",
      "🌓 Multi Theme: It provides Dark and Light theme.",
      "🤖 ChatGPT Integration: Utilizes the ChatGPT API for accurate and context-aware code translations.",
      "🤩 History Tracking: Keeps a record of past translations for reference.",
    ],
    technologies: [
      "React.js",
      "Tailwindcss",
      "Zustand",
      "Node.js",
      "Express",
      "MongoDB",
      "ChatGPT API",
    ],
    // live_demo: "https://ai-code-converter-client.vercel.app",
    live_demo: undefined,
    source_code: "https://github.com/Louai-Zokerburg/AI-Code-Converter",
    categories: ["", ""],
    images: {
      cover: project_1_cover,
      screenshots: [project_1_cover],
    },
  },

  {
    id: "louligram-social-media-app",
    title: "Louligram Social Media App",
    description:
      "Louligram is a social media (Instagram Clone)built with React, React Context, React Query, Typescript, Tailwind CSS, and Appwrite for the backend. It features a beautiful UI with light and dark themes, user authentication, post creation, profile viewing, following, liking posts, saving posts, and more.",
    features: [
      "💪🏻 User Authentication: Users can sign up or sign in securely using Appwrite for backend authentication",
      "🧑🏻‍💻 Dynamic Theming: The app supports both light and dark themes, providing users with a visually appealing experience.",
      "✨ Post Interaction: Users can create, view, like, and save posts. The app utilizes React Query for efficient data fetching and management.",
      "🌓User Profiles: Users can view their own profiles and profiles of others, including their posts and followers.",
      "🤩 Follow System: Louligram includes a follow system, allowing users to connect with each other.",
      "😎 Fully Responsive: You can have a high quality user experience either form your phone or desktop.",
    ],
    technologies: [
      "React.js",
      "Tailwindcss",
      "React Context",
      "TypeScript",
      "React Query",
      "Appwrite",
    ],
    // live_demo: "https://louligram-social-media-app.vercel.app",
    live_demo: undefined,
    source_code:
      "https://github.com/Louai-Zokerburg/louligram-social-media-app",
    categories: ["", ""],
    images: {
      cover: project_2_cover,
      screenshots: [project_2_cover],
    },
  },
  {
    id: "my-portfolio-website",
    title: "Portfolio Website",
    description:
      "This is my personal portfolio website built using Next.js 13 with TypeScript, Tailwind CSS, and Shadcn UI library. The website features a light and dark theme and includes three main pages: Home, About, and Projects. It is designed to be aesthetically pleasing and performs efficiently.",
    features: [
      "🌒 Light and Dark Theme: Toggle between light and dark themes for a personalized experience.",
      "🌐 Modern Looking Beautiful Sidebar Navigations: Enjoy seamless navigation with a visually appealing sidebar that enhances user experience.",
      "✨ Beautiful Modern UI/UX with Engaging Animations: Experience a stunning user interface with modern design principles and engaging animations that captivate visitors.",
      "📱 Responsive Design: Explore the portfolio on various devices, as the website is designed to be responsive and provide an optimal viewing experience across different screen sizes.",
      "🗂️ Categorized Projects: Easily find and explore projects with a categorized display, allowing visitors to filter and view projects based on different criteria.",
      "📄  Single Project Details Page: Dive into the details of each project with dedicated single project pages, providing comprehensive information, images, and any other relevant details.",
    ],
    technologies: [
      "React.js",
      "Next.js 13",
      "Tailwindcss",
      "TypeScript",
      "Shadcn UI",
    ],
    live_demo: "https://portfolio-website-gray-theta.vercel.app",
    source_code: "https://github.com/Louai-Zokerburg/portfolio-website",
    categories: ["", ""],
    images: {
      cover: project_3_cover,
      screenshots: [project_3_cover],
    },
  },
  {
    id: "jobify-jobs-board",
    title: "Jobify MERN Jobs Board",
    description:
      "Jobify is a full-stack MERN (MongoDB, Express, React, Node.js) web application that empowers users to manage job-related activities efficiently. The app provides a feature-rich interface with secure authentication, comprehensive job management, and user profile customization.",
    features: [
      "🌐 User Authentication: Securely sign up or log in to access personalized features.",
      "🕵️ Job Browsing: Explore a vast array of available jobs with detailed information.",
      "➕ Add New Jobs: Registered users can contribute to the job board by adding new job listings.",
      "❌ Delete Jobs: Remove job listings that are no longer relevant or required",
      "🔍 Search Jobs: Easily search for specific jobs based on keywords or criteria.",
      "🎯 Filter Jobs: Utilize filtering options to narrow down job listings based on various parameters.",
      "🔐 Login & Signup: A secure authentication system for user accounts.",
      "🖼️ Add Profile Picture: Personalize your profile by adding a custom profile picture.",
    ],
    technologies: [
      "React.js",
      "Styled Components",
      "React Query",
      "React Context",
      "Rechats.js",
      "Axios",
      "Express",
      "Node.js",
      "Mongo DB",
      "Cloudinary",
      "JWT Auth",
    ],
    live_demo: "https://jobfy-mern-app.onrender.com",
    source_code: "https://github.com/Louai-Zokerburg/mern-stack-jobify",
    categories: ["", ""],
    images: {
      cover: project_4_cover,
      screenshots: [project_4_cover],
    },
  },
  {
    id: "digital-fennec-landing-page",
    title: "Digital Fennec Landing Page",
    description:
      "Welcome to the Fennec Digital website repository! Explore our world of innovative and captivating mobile games. Learn more about our company, mission, and the exciting experiences we create.",
    features: [
      "Dynamic Content: Built using Next.js for a responsive and dynamic user experience.",
      "Multi-Departmental Showcase: Discover our Full Stack, Graphic and Art Design, and Game Development departments.",
      "Funky Games: Explore our whimsical and engaging game portfolio.",
      "Contact Us: Easily connect with us for inquiries and collaborations.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwindcss",
      "AOS (Animation on scroll)",
      "Git/GitHub ",
    ],
    live_demo: "https://digital-fennec-website.vercel.app",
    source_code: "https://github.com/Louai-Zokerburg/digital-fennec-website-v2",
    categories: ["", ""],
    images: {
      cover: project_5_cover,
      screenshots: [project_5_cover],
    },
  },
  // {
  //   id: "dev-finder-project",
  //   title: "Dev Finder",
  //   description:
  //     "Dev Finder is a collaborative platform for developers, enabling real-time communication through rooms with audio and video calls. Built with modern web technologies and integrated with Google Auth for secure access.",
  //   features: [
  //     "🔒 Google Authentication: Secure sign-in and session management.",
  //     "🎥 Real-Time Communication: Full audio and video calls within rooms.",
  //     "📂 Room Management: Create, join, and invite others to developer-focused rooms.",
  //     "⚡ Powered by Stream API: High-quality streaming and call controls.",
  //     "💻 Built with Next.js: Responsive and dynamic user experience.",
  //     "🛠️ Developer Collaboration: Designed to facilitate project collaboration.",
  //   ],
  //   technologies: [
  //     "React.js",
  //     "Next.js",
  //     "Typescript",
  //     "Tailwindcss",
  //     "PostgreSQL",
  //     "Drizzle ORM",
  //     "Stream API",
  //     "Git/GitHub ",
  //   ],
  //   // live_demo: "https://dev-finder-production-ef4d.up.railway.app/",
  //   live_demo: undefined,
  //   source_code: "https://github.com/Louai-Zokerburg/dev-finder",
  //   categories: ["", ""],
  //   images: {
  //     cover: project_5_cover,
  //     screenshots: [project_5_cover],
  //   },
  // },
  {
    id: "ecommerce-api-project",
    title: "E-Commerce API",
    description:
      "A robust and scalable e-commerce API built with TypeScript and Express, offering comprehensive features for managing users, products, orders, and reviews.",
    features: [
      "🔒 Authentication System: Secure user login and registration.",
      "👤 User Management: Manage user profiles, roles, and permissions.",
      "🛒 Product Management: Add, update, and delete products.",
      "📦 Order Processing: Handle order creation, tracking, and status updates.",
      "⭐ Reviews & Ratings: Users can leave reviews and ratings on products.",
      "🛠️ Admin Role: Admin-specific functionalities for managing the platform.",
    ],
    technologies: [
      "TypeScript",
      "Express",
      "MongoDB",
      "Express-Validator",
      "Docker",
      "Docker Compose",
      "Git/GitHub",
    ],
    live_demo: undefined,
    source_code: "https://github.com/Louai-Zokerburg/e-commerce-api",
    categories: ["", ""],
    images: {
      cover: no_cover,
      screenshots: [no_cover],
    },
  },
];
