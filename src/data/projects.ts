import BattleNetworkGameImg from "../assets/battle-network-game.png";
import BlackjackImg from "../assets/blackjack.png";
import JobNowImg from "../assets/job-now.png";
import LogisimImg from "../assets/logisim.png";
import PortfolioImg from "../assets/portfolio.png";
import SpaceNewsImg from "../assets/space-news.png";
import SparkBytesImg from "../assets/spark-bytes.png";
import TravelPlannerImg from "../assets/travel-planner.png";
import WeatherAppImg from "../assets/weather-app.png";

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
    title: "Spark Bytes",
    imgURL: SparkBytesImg,
    stack: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "JWT",
      "PostgreSQL",
      "Prisma",
      "Ant Design",
    ],
    link: "https://github.com/lawrenceli7/spark-bytes",
    production:
      "https://spark-bytes-project-team5-production-0340.up.railway.app/",
    description:
      "A platform for BU students and faculty members to post events that provides food or snacks, aiming to help reduce food waste and promote sustainability.",
  },
  {
    title: "Travel Planner",
    imgURL: TravelPlannerImg,
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Go", "Redis", "Vite"],
    link: "https://github.com/wjhuang98/travel-planner",
    production: "https://github.com/wjhuang98/travel-planner",
    description:
      "A fullstack web application that allows you to search up places that you would like to travel to and plan out your trip.",
  },
  {
    title: "Space News",
    imgURL: SpaceNewsImg,
    stack: ["Next.js", "TypeScript", "Ant Design", "Styled-Components"],
    link: "https://github.com/lawrenceli7/space-news",
    production: "https://space-news-ruddy.vercel.app/",
    description: "A website that displays the latest updates on space news.",
  },
  {
    title: "Weather App",
    imgURL: WeatherAppImg,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design"],
    link: "https://github.com/lawrenceli7/weather-app",
    production: "https://weather-app-chi-swart.vercel.app/",
    description: "An app that displays the weather in a city of your choice.",
  },
  {
    title: "Personal Website",
    imgURL: PortfolioImg,
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML"],
    link: "https://github.com/lawrenceli7/portfolio",
    production: "https://lawrenceli.dev",
    description: "My personal portfolio website.",
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
    title: "Battle Network Game",
    imgURL: BattleNetworkGameImg,
    stack: ["JavaFX", "Java", "CSS"],
    link: "https://github.com/lawrenceli7/battle-network-game",
    production: "https://github.com/lawrenceli7/battle-network-game",
    description:
      "A turn-based game inspired by MegaMan Battle Network and Fire Emblem. The game features a grid-based map where the player can move their character and attack enemies.",
  },
  {
    title: "Blackjack",
    imgURL: BlackjackImg,
    stack: ["Java"],
    link: "https://github.com/lawrenceli7/blackjack",
    production: "https://github.com/lawrenceli7/blackjack",
    description:
      "A simple blackjack game within the console. The game follows the traditional rules of blackjack.",
  },
];

export default projects;
