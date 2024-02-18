import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <>
      <div
        className="flex items-center justify-center flex-col text-center pt-5 pb-6 h-screen"
        id="home"
      >
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 bg-clip-text text-transparent">
            Lawrence.
          </span>
        </h1>
        <p className="text-base md:text-2xl mb-3 font-medium text-teal-200">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I'm a Coder",
              2000,
              "I'm a Software Engineer",
              2000,
              "I'm also a Web Developer",
              2000,
            ]}
            wrapper="div"
            speed={20}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </p>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              className="cursor-pointer hover:animate-bounce hover:text-[#0077b5]"
              href="https://www.linkedin.com/in/lawrenceli7/"
            >
              <GrLinkedin size={30} />
            </a>
            <a
              className="cursor-pointer hover:animate-bounce hover:text-[#2dba4e]"
              href="https://www.github.com/lawrenceli7/"
            >
              <GrGithub size={30} />
            </a>
            <a
              className="cursor-pointer hover:animate-bounce hover:text-[#c71610]"
              href="mailto: lawrenceli3202@gmail.com"
            >
              <GrMail size={30} />
            </a>
          </div>
          <div>
            <a
              className="transition duration-300 ease-in-out rounded-2xl border-2 border-black p-4 cursor-pointer hover:scale-110 hover:underline-offset-8 hover:underline hover:text-white hover:bg-black"
              download="resume-template.pdf"
              href="./assets/resume-template.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
