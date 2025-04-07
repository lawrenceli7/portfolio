import emailjs from "@emailjs/browser";
import { message } from "antd";
import { motion } from "framer-motion";
import React, { useRef } from "react";
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
      className="flex flex-col justify-center min-h-screen mx-auto"
      id="contact"
    >
      <h1 className="flex items-center w-11/12 max-w-5xl mx-auto mb-4 text-center dark:hover:text-white">
        <span className="flex flex-grow border-t dark:border-white"></span>
        <span className="mx-2 text-4xl font-bold text-gray-900 dark:text-white relative inline-block cursor-pointer after:absolute after:w-0 after:h-2 after:block after:bg-current after:transition-all after:duration-300 after:left-0 after:-bottom-[5px] after:hover:w-full">
          Contact
        </span>
        <span className="flex flex-grow border-t dark:border-white"></span>
      </h1>
      <motion.div
        className="flex items-center justify-center w-11/12 max-w-5xl pt-10 pb-10 pl-2 pr-2 mx-auto bg-white border border-black shadow-xl shadow-teal-100 rounded-xl md:w-1/2 dark:bg-contact dark:border-white dark:shadow-purple-100"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form
          onSubmit={sendEmail}
          className="flex flex-col w-full ml-2 mr-2"
          ref={form}
        >
          <div className="flex items-center">
            <CiUser className="transition-colors duration-300 dark:text-white hover:text-teal-200 dark:hover:text-purple-100" />
            <label htmlFor="name" className="p-1 dark:text-white">
              Full Name:
            </label>
          </div>
          <motion.input
            type="text"
            name="user_name"
            placeholder="Enter full name"
            className="p-2 mb-2 text-sm transition-colors duration-300 bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white focus:border-teal-200 dark:focus:border-purple-100 focus:bg-teal-50 dark:focus:bg-gray-500"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center">
            <CiMail className="transition-colors duration-300 dark:text-white hover:text-teal-200 dark:hover:text-purple-100" />
            <label htmlFor="email" className="p-1 dark:text-white">
              Email:
            </label>
          </div>
          <motion.input
            type="email"
            name="user_email"
            placeholder="Enter email address"
            className="p-2 mb-2 text-sm transition-colors duration-300 bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white focus:border-teal-200 dark:focus:border-purple-100 focus:bg-teal-50 dark:focus:bg-gray-500"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center">
            <CiPen className="transition-colors duration-300 dark:text-white hover:text-teal-200 dark:hover:text-purple-100" />
            <label htmlFor="subject" className="p-1 dark:text-white">
              Subject:
            </label>
          </div>
          <motion.textarea
            name="user_subject"
            placeholder="Enter subject"
            rows={1}
            className="p-2 mb-2 text-sm transition-colors duration-300 bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white focus:border-teal-200 dark:focus:border-purple-100 focus:bg-teal-50 dark:focus:bg-gray-500"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <div className="flex items-center">
            <CiText className="transition-colors duration-300 dark:text-white hover:text-teal-200 dark:hover:text-purple-100" />
            <label htmlFor="message" className="p-1 dark:text-white">
              Message:
            </label>
          </div>
          <motion.textarea
            name="user_message"
            placeholder="Enter your message..."
            rows={6}
            className="p-2 mb-4 text-sm transition-colors duration-300 bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white focus:border-teal-200 dark:focus:border-purple-100 focus:bg-teal-50 dark:focus:bg-gray-500"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="inline-block w-full px-4 py-1 mb-2 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 drop-shadow-md"
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
            className="inline-block w-full px-4 py-1 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 drop-shadow-md"
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
