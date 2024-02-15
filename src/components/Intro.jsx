import { TypeAnimation } from "react-type-animation";

function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 min-h-screen">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Hi! I&apos;m <span className="text-[#66b2b2]">Lawrence Li</span>
        </h1>
        <p className="text-base md:text-2xl mb-3 font-medium text-[#006666]">
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
      </div>
    </>
  );
}

export default Intro;
