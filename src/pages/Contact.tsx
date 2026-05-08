import emailjs from "@emailjs/browser";
import { message } from "antd";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { CiMail, CiPaperplane, CiPen, CiText, CiUser } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });

  const clearMessage = () => {
    (
      document.querySelector('input[name="user_name"]') as HTMLInputElement
    ).value = "";
    (
      document.querySelector('input[name="user_email"]') as HTMLInputElement
    ).value = "";
    (
      document.querySelector(
        'textarea[name="user_subject"]'
      ) as HTMLTextAreaElement
    ).value = "";
    (
      document.querySelector(
        'textarea[name="user_message"]'
      ) as HTMLTextAreaElement
    ).value = "";
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm("service_uxwqyz9", "template_1vq5zqv", form.current, {
          publicKey: "DNxwbxbLj-Ucoz7i1",
        })
        .then(
          () => {
            console.log("Message sent successfully!");
            message.success("Message sent successfully!");
            clearMessage();
          },
          (error) => {
            console.log("Message failed!", error.text);
            message.error("Message failed!");
          }
        );
    }
  };

  return (
    <motion.div
      ref={contactRef}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="relative isolate mx-auto flex min-h-screen flex-col justify-center overflow-hidden py-24"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.14),transparent_28%),radial-gradient(circle_at_86%_78%,rgba(20,184,166,0.16),transparent_30%)]" />
      <div className="mx-auto mb-10 w-11/12 max-w-6xl text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200/70 bg-white/70 px-4 py-2 text-sm font-bold text-teal-500 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-teal-100">
          Contact
        </span>
        <h1 className="text-4xl font-black tracking-tight text-gray-500 md:text-5xl dark:text-white">
          Let&apos;s build something useful.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300 dark:text-white/60">
          Have a project, role, or collaboration in mind? Send a note and I&apos;ll
          get back to you.
        </p>
      </div>
      <motion.div
        className="mx-auto grid w-11/12 max-w-6xl overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-2xl shadow-teal-900/5 backdrop-blur md:grid-cols-[0.85fr_1.15fr] dark:border-white/10 dark:bg-white/[0.06]"
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <aside className="relative overflow-hidden border-b border-gray-100 p-6 md:border-b-0 md:border-r md:p-8 dark:border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(20,184,166,0.18),transparent_38%)]" />
          <div className="relative">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gray-500 text-xl text-white dark:bg-white dark:text-gray-500">
              <CiMail />
            </span>
            <h2 className="text-2xl font-black text-gray-500 dark:text-white">
              Open to thoughtful web work and product-minded teams.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-300 dark:text-white/60">
              I&apos;m especially interested in front-end engineering,
              full-stack products, and interfaces where craft and usability both
              matter.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold text-gray-300 dark:text-white/65">
              <a
                className="inline-flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/60 p-4 transition hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.04]"
                href="mailto:lawrenceli3202@gmail.com"
              >
                <CiMail className="text-xl text-teal-400" />
                lawrenceli3202@gmail.com
              </a>
              <span className="inline-flex items-center gap-3 rounded-2xl border border-gray-100 bg-white/60 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                <FiMapPin className="text-xl text-teal-400" />
                Boston, MA
              </span>
              <div className="flex gap-3">
                <a
                  aria-label="LinkedIn"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white/60 text-xl transition hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.04]"
                  href="https://www.linkedin.com/in/lawrenceli7/"
                >
                  <FiLinkedin />
                </a>
                <a
                  aria-label="GitHub"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white/60 text-xl transition hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.04]"
                  href="https://www.github.com/lawrenceli7/"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </aside>
        <form
          onSubmit={sendEmail}
          className="flex w-full flex-col p-5 md:p-7"
          ref={form}
        >
          <div className="flex items-center text-gray-500 dark:text-white">
            <CiUser className="text-teal-400" />
            <label htmlFor="name" className="p-1 text-sm font-bold">
              Full Name:
            </label>
          </div>
          <motion.input
            type="text"
            name="user_name"
            placeholder="Enter full name"
            className="mb-3 rounded-2xl border border-gray-200 bg-white/80 p-3 text-sm text-gray-500 transition-colors duration-300 placeholder:text-gray-100 focus:border-teal-200 focus:bg-white focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:border-teal-200"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center text-gray-500 dark:text-white">
            <CiMail className="text-teal-400" />
            <label htmlFor="email" className="p-1 text-sm font-bold">
              Email:
            </label>
          </div>
          <motion.input
            type="email"
            name="user_email"
            placeholder="Enter email address"
            className="mb-3 rounded-2xl border border-gray-200 bg-white/80 p-3 text-sm text-gray-500 transition-colors duration-300 placeholder:text-gray-100 focus:border-teal-200 focus:bg-white focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:border-teal-200"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center text-gray-500 dark:text-white">
            <CiPen className="text-teal-400" />
            <label htmlFor="subject" className="p-1 text-sm font-bold">
              Subject:
            </label>
          </div>
          <motion.textarea
            name="user_subject"
            placeholder="Enter subject"
            rows={1}
            className="mb-3 rounded-2xl border border-gray-200 bg-white/80 p-3 text-sm text-gray-500 transition-colors duration-300 placeholder:text-gray-100 focus:border-teal-200 focus:bg-white focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:border-teal-200"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center text-gray-500 dark:text-white">
            <CiText className="text-teal-400" />
            <label htmlFor="message" className="p-1 text-sm font-bold">
              Message:
            </label>
          </div>
          <motion.textarea
            name="user_message"
            placeholder="Enter your message..."
            rows={4}
            className="mb-4 rounded-2xl border border-gray-200 bg-white/80 p-3 text-sm text-gray-500 transition-colors duration-300 placeholder:text-gray-100 focus:border-teal-200 focus:bg-white focus:outline-none dark:border-white/10 dark:bg-white/[0.04] dark:text-white dark:placeholder:text-white/35 dark:focus:border-teal-200"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="mb-3 inline-block w-full rounded-full bg-gray-500 px-4 py-3 text-center text-base font-bold text-white shadow-xl shadow-gray-500/20 transition hover:bg-gray-400 dark:bg-white dark:text-gray-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              Send Message <CiPaperplane />
            </div>
          </motion.button>
          <motion.button
            type="button"
            onClick={clearMessage}
            className="inline-block w-full rounded-full border border-gray-200 bg-white/70 px-4 py-3 text-center text-base font-bold text-gray-300 transition hover:border-teal-200 hover:text-teal-500 dark:border-white/10 dark:bg-white/[0.04] dark:text-white/65"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center justify-center gap-2">
              Reset <RxReset />
            </div>
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
