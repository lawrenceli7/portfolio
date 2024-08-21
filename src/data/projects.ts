import ChatSphereImg from "../assets/chat-sphere.png";
import JobNowImg from "../assets/job-now.png";
import PortfolioImg from "../assets/portfolio.png";
import ThreadTalkImg from "../assets/thread-talk.png";
import TrackifyImg from "../assets/trackify.png";

interface Project {
  title: string;
  imgURL: string;
  stack: string[];
  link: string;
  production: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "Trackify",
    imgURL: TrackifyImg,
    stack: [
      "GraphQL",
      "React.js",
      "JavaScript",
      "MongoDB",
      "Express.js",
      "Node.js",
      "Apollo",
      "Tailwind CSS",
      "Vite",
      "Mongoose",
    ],
    link: "https://github.com/lawrenceli7/trackify",
    production: "https://github.com/lawrenceli7/trackify",
    description: "In development.",
  },
  {
    title: "ChatSphere",
    imgURL: ChatSphereImg,
    stack: [
      "React.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Express.js",
      "Node.js",
      "Tailwind CSS",
      "Vite",
      "JWT",
    ],
    link: "https://github.com/lawrenceli7/chat-sphere",
    production: "https://chat-sphere-xky9.onrender.com/",
    description:
      "A messaging application where users can message other users in real time.",
  },
  {
    title: "ThreadTalk",
    imgURL: ThreadTalkImg,
    stack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Firebase",
      "Vitest",
      "Tailwind CSS",
      "Chakra UI",
    ],
    link: "https://github.com/lawrenceli7/thread-talk",
    production: "https://thread-talk-tau.vercel.app/",
    description:
      "A social media website where users can post, like, and comment on threads.",
  },
  {
    title: "JobNow",
    imgURL: JobNowImg,
    stack: [
      "React.js",
      "Flask",
      "SQLite",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Ant Design",
      "Vite",
    ],
    link: "https://github.com/kevkim12/jobnow",
    production: "https://jobnow.onrender.com/",
    description:
      "A fullstack web application where users can create an account, login, and apply to jobs or post gigs.",
  },
  {
    title: "Personal Website",
    imgURL: PortfolioImg,
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Ant Design",
      "Vite",
      "HTML",
    ],
    link: "https://github.com/lawrenceli7/portfolio",
    production: "https://lawrenceli.dev",
    description: "My personal portfolio website.",
  },
];

export default projects;
