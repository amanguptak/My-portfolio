import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {

  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
aws,
next,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
 

} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "skills",
    title: "Skills",
  },
];

const services: TService[] = [
  {
    title: "Frontend Developer",
    icon: web,
  },

  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React  Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name:"Next",
    icon:next,
  }
];

const experiences: TExperience[] = [
  {
    title: "React.js Developer",
    companyName: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    companyName: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    companyName: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Anime Clothing store use NextJS and Mern Stack",
    description:
      "A ecommerce Web app full responsive using Next Js redux, bootstrap,,mui , expressjs and mongdb(mongoAtlas), for authentication I used jwt and stored the token inside cookies for user and admin validation I created middleware. And frontend is designed in Next js and redux toolkit used reduxthunk for api call,login ,register page with attractive user interface and use Scss..",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
      ],
    image: '/images/projects/animeEcom.png',
    sourceCodeLink: "https://github.com/",
    previewLink:"https://anime-clothing-frontend.vercel.app/"
  },
  {
    name: "Job Hunt Website",
    description:"Job website where user can apply for the job and they can accesses more feature a website after registration , frontend of website is based on React and backend is based on Express js and jwt is used for authentication mongoDB is used as database",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ExpressJS",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: 'images/projects/jobwebsite.png',
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Motion-School LMS Web Application",
    description:
      "Developed an advanced Learning Management System (LMS) platform using Next.js 13 with the App Router within the React.js Framework. Implemented TypeScript for a robust and modern frontend architecture.\n- Implemented Prisma for seamless data management and Stripe for secure payment processing.\n- Integrated Mux for advanced video streaming and employed Tailwind for modern, responsive styling.\n- Developed a multifaceted authentication system with Google, GitHub, and email login options using clerk.\n- Demonstrated proficiency in latest technologies, emphasizing commitment to user-friendly solutions in educational technology.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
    image: "/images/projects/lmsprotfolio.png",
    sourceCodeLink: "https://github.com/amanguptak/Motion-school",
    previewLink:"https://motion-school.vercel.app"
  },
  {
    name: "Motion an Ai powered note talking app",
    description:
"Motion, fully responsive web application utilizing Next.js 13, an innovative frontend framework rooted in React.js. Developed with TypeScript, the project featured meticulous styling using Tailwind CSS to achieve a refined and contemporary user interface. Integrated MongoDB as the backend database for streamlined and secure data management. Successfully orchestrated the seamless integration of the OpenAI API, enhancing the application with cutting-edge artificial intelligence capabilities. Implemented Pinecone for precise request optimization, resulting in a substantial improvement in overall performance. A standout feature of this project is the integration of an AI chatbot 🤖, seamlessly incorporated to deliver insightful responses derived from users' current notes, thereby significantly enhancing overall user engagement. This project serves as a testament to proficiency in contemporary web development technologies and a steadfast commitment to optimizing the user experience.",      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
    image: "https://i.postimg.cc/hjHdG1M3/Screenshot-2023-12-11-120722.png",
    sourceCodeLink: "https://github.com/amanguptak/MotionMan",
    previewLink:"https://motion-aman.vercel.app"
  },
  {
    name: "Icommunify College Club managing web app",
    description:
      "A college club and its Event managing web app for client based on mern stack where I have implemented all frontend features Using Next js and Redux toolkit and used bootstrap and scss for responsiveness for api call used axios.",
      tags: [
        {
          name: "NextJS",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
      ],
    image: "/images/projects/icom.png",
    sourceCodeLink: "/",
    previewLink:"https://www.icommunify.com"
  },
  {
    name: "Weather App React  PWA",
    description:
      "Used axios , React and used PWA features of React ",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Pwa",
          color: "green-text-gradient",
        },
        {
          name: "Axios",
          color: "pink-text-gradient",
        },
      ],
    image: "/images/projects/weather.png",
    sourceCodeLink: "https://github.com/amanguptak/MotionMan",
    previewLink:"https://weatherappbyaman.web.app"
  },
];

export { services, technologies, experiences, testimonials, projects };
