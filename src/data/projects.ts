import BattleNetworkGameImg from "../assets/battle-network-game.png";
// import BlackjackImg from "../assets/blackjack.png";
import ChatSphereImg from "../assets/chat-sphere.png";
import JobNowImg from "../assets/job-now.png";
import LogisimImg from "../assets/logisim.png";
import PortfolioImg from "../assets/portfolio.png";
// import ThreadTalkImg from "../assets/thread-talk.png";
// import TrackifyImg from "../assets/trackify.png";
import TravelPlannerImg from "../assets/travel-planner.png";
// import WeatherAppImg from "../assets/weather-app.png";

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
      "Am AI messaging application where users can message other users in real time with chatbot assistance.",
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
    title: "Travel Planner",
    imgURL: TravelPlannerImg,
    stack: ["Go", "Redis", "React.js", "TypeScript", "OpenAPI", "Tailwind CSS"],
    link: "https://github.com/wjhuang98/travel-planner",
    production: "https://github.com/wjhuang98/travel-planner",
    description:
      "A web application that allows you to search up places that you would like to travel",
  },
  {
    title: "Battle Network Game",
    imgURL: BattleNetworkGameImg,
    stack: ["JavaFX", "Java", "CSS"],
    link: "https://github.com/lil5ATWIT/battle-network-game",
    production: "https://github.com/lil5ATWIT/battle-network-game",
    description:
      "A turn-based game inspired by MegaMan Battle Network and Fire Emblem. The game features a grid-based map where the player can move their character and attack enemies.",
  },
  {
    title: "LC3-Processor",
    imgURL: LogisimImg,
    stack: ["Assembly", "Logisim"],
    link: "https://github.com/lawrenceli7/lc3-processor",
    production: "https://github.com/lawrenceli7/lc3-processor",
    description:
      "An implementation of LC-3 or Little Computer 3 processor. LC-3 is a simple computer architecture that forms the basics of computer organization and assembly language programming.",
  },
  {
    title: "Personal Website",
    imgURL: PortfolioImg,
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "HTML",
    ],
    link: "https://github.com/lawrenceli7/portfolio",
    production: "https://lawrenceli.dev",
    description: "My personal portfolio website.",
  },
  // {
  //   title: "Trackify",
  //   imgURL: TrackifyImg,
  //   stack: [
  //     "GraphQL",
  //     "React.js",
  //     "JavaScript",
  //     "MongoDB",
  //     "Express.js",
  //     "Node.js",
  //     "Apollo",
  //     "Tailwind CSS",
  //     "Vite",
  //     "Mongoose",
  //     "Ant Design",
  //     "Passport.js",
  //   ],
  //   link: "https://github.com/lawrenceli7/trackify",
  //   production: "https://trackify-k7u8.onrender.com/",
  //   description:
  //     "A finance expense tracking application to manage various expenses.",
  // },
  // {
  //   title: "Blackjack",
  //   imgURL: BlackjackImg,
  //   stack: ["Java"],
  //   link: "https://github.com/lawrenceli7/blackjack",
  //   production: "https://github.com/lawrenceli7/blackjack",
  //   description:
  //     "A simple blackjack game within the console. The game follows the traditional rules of blackjack.",
  // },
  // {
  //   title: "Weather App",
  //   imgURL: WeatherAppImg,
  //   stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design"],
  //   link: "https://github.com/lawrenceli7/weather-app",
  //   production: "https://weather-app-chi-swart.vercel.app/",
  //   description: "An app that displays the weather in a city of your choice.",
  // },
  // {
  //   title: "ThreadTalk",
  //   imgURL: ThreadTalkImg,
  //   stack: [
  //     "Next.js",
  //     "React.js",
  //     "TypeScript",
  //     "Firebase",
  //     "Vitest",
  //     "Tailwind CSS",
  //     "Chakra UI",
  //   ],
  //   link: "https://github.com/lawrenceli7/thread-talk",
  //   production: "https://thread-talk-tau.vercel.app/",
  //   description:
  //     "A social media website where users can post, like, and comment on threads.",
  // },
];

export default projects;
