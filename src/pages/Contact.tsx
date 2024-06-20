import React, { useRef } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { CiMail, CiPaperplane, CiPen, CiUser } from "react-icons/ci";
import { RxReset } from "react-icons/rx";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });

  const clearMessage = () => {
    (document.querySelector('input[name="name"]') as HTMLInputElement).value =
      "";
    (document.querySelector('input[name="email"]') as HTMLInputElement).value =
      "";
    (
      document.querySelector('textarea[name="subject"]') as HTMLTextAreaElement
    ).value = "";
    (
      document.querySelector('textarea[name="message"]') as HTMLTextAreaElement
    ).value = "";
  };

  return (
    <div
      ref={contactRef}
      className={`flex flex-col justify-center h-screen mx-auto ${
        isVisible ? "fade-in" : "fade-out"
      }`}
      id="contact"
    >
      <div className="flex items-center justify-center w-11/12 pt-10 pb-10 pl-2 pr-2 mx-auto bg-white border border-black shadow-xl shadow-teal-100 rounded-xl md:w-1/2 dark:bg-contact dark:border-white dark:shadow-purple-100">
        <form
          action="https://getform.io/f/negAvlbw"
          method="POST"
          className="flex flex-col w-full ml-2 mr-2"
        >
          <div className="flex items-center mb-2">
            <span className="flex-grow border-t border-gray-400 dark:border-white"></span>
            <h1 className="px-2 text-center">
              <span className="mx-2 text-4xl font-bold text-gray-900 underline-hover dark:text-white ">
                Contact Me
              </span>
            </h1>
            <span className="flex-grow border-t border-gray-400 dark:border-white"></span>
          </div>
          <div className="flex items-center">
            <CiUser className="dark:text-white icon-transition" />
            <label htmlFor="name" className="p-1 dark:text-white">
              Full Name:
            </label>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="p-2 mb-2 text-sm bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white input-transition"
            required
          />
          <div className="flex items-center">
            <CiMail className="dark:text-white icon-transition" />
            <label htmlFor="email" className="p-1 dark:text-white">
              Email:
            </label>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            className="p-2 mb-2 text-sm bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white input-transition"
            required
          />
          <div className="flex items-center">
            <CiPen className="dark:text-white icon-transition" />
            <label htmlFor="subject" className="p-1 dark:text-white">
              Subject:
            </label>
          </div>
          <textarea
            name="subject"
            placeholder="Enter subject"
            rows={1}
            className="p-2 mb-2 text-sm bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white input-transition"
            required
          />
          <div className="flex items-center">
            <AiOutlineMessage className="dark:text-white icon-transition" />
            <label htmlFor="message" className="p-1 dark:text-white">
              Message:
            </label>
          </div>
          <textarea
            name="message"
            placeholder="Enter your message..."
            rows={6}
            className="p-2 mb-4 text-sm bg-white border rounded-lg focus:outline-none dark:bg-default dark:placeholder-white dark:border-white dark:text-white input-transition"
            required
          />
          <button
            type="submit"
            className="inline-block w-full px-4 py-1 mb-2 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 drop-shadow-md button-transition"
          >
            <div className="flex items-center justify-center gap-2">
              Send Message <CiPaperplane />
            </div>
          </button>
          <button
            type="button"
            onClick={clearMessage}
            className="inline-block w-full px-4 py-1 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 drop-shadow-md button-transition"
          >
            <div className="flex items-center justify-center gap-2">
              Reset <RxReset />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
