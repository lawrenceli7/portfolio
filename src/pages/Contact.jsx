import { AiOutlineMessage } from "react-icons/ai";
import { CiMail, CiPaperplane, CiPen, CiUser } from "react-icons/ci";
import { RxReset } from "react-icons/rx";

function Contact() {
  const clearMessage = () => {
    document.querySelector('input[name="name"]').value = "";
    document.querySelector('input[name="email"]').value = "";
    document.querySelector('textarea[name="subject"]').value = "";
    document.querySelector('textarea[name="message"]').value = "";
  };

  return (
    <div className="flex flex-col justify-center h-screen mx-auto" id="contact">
      <div className="flex justify-center items-center bg-white rounded-xl pt-10 pb-10 pl-2 pr-2 md:w-1/2 mx-auto w-11/12 shadow-xl border border-black dark:bg-[#16181d] dark:border-white">
        <form
          action="https://getform.io/f/negAvlbw"
          method="POST"
          className="flex flex-col w-full ml-2 mr-2"
        >
          <h1 className="mb-2 text-center hover:underline hover:underline-offset-8 dark:hover:text-white">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">
              Contact Me
            </span>
          </h1>
          <div className="flex items-center">
            <CiUser className="dark:text-white" />
            <label htmlFor="name" className="p-1 dark:text-white">
              Full Name:
            </label>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter full name"
            className="text-sm p-2 border rounded-lg focus:outline-none bg-white dark:bg-[#23272f] dark:placeholder-white dark:border-white dark:text-white mb-2"
            required
          />
          <div className="flex items-center">
            <CiMail className="dark:text-white" />
            <label htmlFor="name" className="p-1 dark:text-white">
              Email:
            </label>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Enter email address"
            className="text-sm p-2 border rounded-lg focus:outline-none bg-white dark:bg-[#23272f] dark:placeholder-white dark:border-white dark:text-white mb-2"
            required
          />
          <div className="flex items-center">
            <CiPen className="dark:text-white" />
            <label htmlFor="subject" className="p-1 dark:text-white">
              Subject:
            </label>
          </div>
          <textarea
            name="subject"
            placeholder="Enter subject"
            rows="1"
            className="text-sm p-2 border rounded-lg focus:outline-none bg-white dark:bg-[#23272f] dark:placeholder-white dark:border-white dark:text-white mb-2"
            required
          />
          <div className="flex items-center">
            <CiPaperplane className="dark:text-white" />
            <label htmlFor="message" className="p-1 dark:text-white">
              Message:
            </label>
          </div>
          <textarea
            name="message"
            placeholder="Enter your message..."
            rows="6"
            className="text-sm p-2 border rounded-lg focus:outline-none bg-white dark:bg-[#23272f] dark:placeholder-white dark:border-white dark:text-white mb-4"
            required
          />
          <button
            type="submit"
            className="inline-block w-full px-4 py-1 mb-2 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              Send Message <AiOutlineMessage />
            </div>
          </button>
          <button
            type="reset"
            onClick={clearMessage}
            className="inline-block w-full px-4 py-1 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-purple-200 via-purple-300 to-purple-200 drop-shadow-md"
          >
            <div className="flex items-center justify-center gap-2">
              Reset <RxReset />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
