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
}

const projects: Project[] = [
  {
    title: "JobNow",
    imgURL: JobNowImg,
    stack: [
      "React.js",
      "Flask",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Python",
      "Ant Design",
      "Vite",
    ],
    link: "https://github.com/kevkim12/jobnow",
    production: "https://jobnow.onrender.com/",
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
  },
  {
    title: "Travel Planner",
    imgURL: TravelPlannerImg,
    stack: ["React.js", "TypeScript", "Tailwind CSS", "Go", "Redis", "Vite"],
    link: "https://github.com/wjhuang98/travel-planner",
    production: "https://github.com/wjhuang98/travel-planner",
  },
  {
    title: "Space News",
    imgURL: SpaceNewsImg,
    stack: ["Next.js", "TypeScript", "Ant Design", "Styled-Components"],
    link: "https://github.com/lawrenceli7/space-news",
    production: "https://space-news-ruddy.vercel.app/",
  },
  {
    title: "Weather App",
    imgURL: WeatherAppImg,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Ant Design"],
    link: "https://github.com/lawrenceli7/weather-app",
    production: "https://weather-app-chi-swart.vercel.app/",
  },
  {
    title: "Personal Website",
    imgURL: PortfolioImg,
    stack: ["React.js", "JavaScript", "Tailwind CSS", "Vite", "HTML"],
    link: "https://github.com/lawrenceli7/portfolio",
    production: "https://lawrenceli.dev",
  },
  {
    title: "LC3-Processor",
    imgURL: LogisimImg,
    stack: ["Assembly", "Logisim"],
    link: "https://github.com/lawrenceli7/lc3-processor",
    production: "https://github.com/lawrenceli7/lc3-processor",
  },
  {
    title: "Battle Network Game",
    imgURL: BattleNetworkGameImg,
    stack: ["JavaFX", "Java", "CSS"],
    link: "https://github.com/lawrenceli7/battle-network-game",
    production: "https://github.com/lawrenceli7/battle-network-game",
  },
  {
    title: "Blackjack",
    imgURL: BlackjackImg,
    stack: ["Java"],
    link: "https://github.com/lawrenceli7/blackjack",
    production: "https://github.com/lawrenceli7/blackjack",
  },
];

export default projects;
