import { motion } from "framer-motion";
import React, { useRef } from "react";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import HeroScene from "../components/HeroScene";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import scrollTo from "../utils/scrollTo";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/lawrenceli7/",
    label: "LinkedIn",
    icon: <FiLinkedin />,
  },
  {
    href: "https://www.github.com/lawrenceli7/",
    label: "GitHub",
    icon: <FiGithub />,
  },
  {
    href: "mailto:lawrenceli3202@gmail.com",
    label: "Email",
    icon: <FiMail />,
  },
];

const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(homeRef, { threshold: 0.1 });

  return (
    <motion.section
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-28 text-gray-900 sm:px-6 lg:px-20 dark:text-white"
      id="home"
      ref={homeRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.18),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(167,139,250,0.18),transparent_30%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.16),transparent_30%),radial-gradient(circle_at_78%_22%,rgba(167,139,250,0.2),transparent_32%)]" />
      <div className="absolute inset-y-24 right-[-15rem] hidden w-[34rem] opacity-90 md:block lg:right-[-3rem] xl:right-0">
        <HeroScene />
      </div>

      <div className="relative z-10 grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="max-w-3xl"
          initial={{ y: 36, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-4 py-2 text-xs font-semibold text-teal-500 shadow-sm backdrop-blur sm:text-sm dark:border-white/10 dark:bg-white/5 dark:text-teal-100">
            <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_16px_rgba(45,212,191,0.9)]" />
            Software Engineer
          </span>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-gray-500 sm:text-5xl md:text-6xl xl:text-7xl dark:text-white">
            Building polished web experiences with{" "}
            <span className="text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300 bg-clip-text">
              product sense.
            </span>
          </h1>
          <div className="mt-5 min-h-[2rem] text-xl font-semibold text-gray-300 sm:text-2xl md:text-3xl dark:text-white/80">
            <TypeAnimation
              sequence={["Software that feels crisp and useful.", 2000]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
            />
          </div>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300 md:text-lg md:leading-8 dark:text-white/70">
            I&apos;m Lawrence Li, a Boston University Computer Science graduate
            focused on software engineering.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <motion.button
              onClick={scrollTo("projects")}
              className="w-full rounded-full bg-gray-500 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-gray-500/20 transition hover:bg-gray-400 sm:w-auto dark:bg-white dark:text-gray-500 dark:hover:bg-teal-50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.button>
            <motion.button
              onClick={scrollTo("contact")}
              className="w-full rounded-full border border-gray-300/70 bg-white/70 px-6 py-3 text-sm font-bold text-gray-500 backdrop-blur transition hover:border-teal-200 hover:text-teal-500 sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-teal-200"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
            </motion.button>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {socialLinks.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-xl text-gray-400 shadow-sm backdrop-blur transition hover:border-teal-200 hover:text-teal-400 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-teal-100"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
            <span className="ml-0 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 sm:ml-3 dark:text-white/60">
              <FiMapPin className="text-teal-300" />
              Boston, MA
            </span>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto h-56 w-full max-w-xs sm:h-72 sm:max-w-sm md:hidden"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <HeroScene />
        </motion.div>
      </div>

      <motion.button
        onClick={scrollTo("about")}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-gray-300 transition hover:text-teal-300 sm:flex dark:text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Scroll
        <FiArrowDown className="text-2xl animate-bounce" />
      </motion.button>
    </motion.section>
  );
};

export default Home;
