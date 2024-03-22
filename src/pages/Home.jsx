import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";
import { SlLocationPin } from "react-icons/sl";
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
        <span className="text-base md:text-2xl mb-3 font-medium text-teal-200">
          <TypeAnimation
            sequence={[
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
        </span>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              className="cursor-pointer hover:animate-pulse hover:text-blue"
              href="https://www.linkedin.com/in/lawrenceli7/"
            >
              <GrLinkedin size={30} />
            </a>
            <a
              className="cursor-pointer hover:animate-pulse hover:text-green"
              href="https://www.github.com/lawrenceli7/"
            >
              <GrGithub size={30} />
            </a>
            <a
              className="cursor-pointer hover:animate-pulse hover:text-red"
              href="mailto: lawrenceli3202@gmail.com"
            >
              <GrMail size={30} />
            </a>
          </div>
          <div className="flex flex-row gap-2 justify-center">
            <SlLocationPin size={30} className="hover:text-darkred hover:animate-pulse" />
            <span className="text-xl text-gray-500 hover:underline-offset-8 hover:underline">
              Boston, MA
            </span>
          </div>
          {/* <div>
            <a
              className="transition duration-300 ease-in-out rounded-2xl border-2 border-gray-500 bg-white p-4 cursor-pointer hover:scale-110 hover:underline-offset-8 hover:underline hover:text-white hover:bg-gray-500 hover:shadow-2xl  hover:shadow-teal-100 hover:animate-pulse"
              download="resume-template.pdf"
              href="./resume-template.pdf"
            >
              Download Resume
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
