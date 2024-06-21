import { IconType } from "react-icons";
import { BsFiletypeJava } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
import {
  SiAntdesign,
  SiAssemblyscript,
  SiCss3,
  SiExpress,
  SiFlask,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiRedis,
  SiSqlite,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const projectIcons: { [key: string]: IconType } = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Ant Design": SiAntdesign,
  "Styled-Components": SiStyledcomponents,
  Vite: SiVite,
  Go: SiGo,
  Redis: SiRedis,
  SQLite: SiSqlite,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  Flask: SiFlask,
  "Express.js": SiExpress,
  JWT: SiJsonwebtokens,
  Python: SiPython,
  HTML: SiHtml5,
  Java: FaJava,
  JavaFX: BsFiletypeJava,
  CSS: SiCss3,
  Assembly: SiAssemblyscript,
  Logisim: IoHardwareChipOutline,
};

export default projectIcons;
