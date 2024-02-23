function Contact() {

  const clearMessage = () => {
    document.querySelector('input[name="name"]').value = '';
    document.querySelector('input[name="email"]').value = '';
    document.querySelector('textarea[name="subject"]').value = '';
    document.querySelector('textarea[name="message"]').value = '';
  };

  return (
    <div className="flex flex-col mx-auto h-screen justify-center" id="contact">
      <div className="flex justify-center items-center">
        <form
          action="https://getform.io/f/negAvlbw"
          method="POST"
          className="flex flex-col w-full md:w-6/12"
        >
          <h1 className="text-center mb-4 hover:underline hover:underline-offset-8">
            <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>
          <input
            type="text"
            name="name"
            placeholder="Full Name:"
            className="p-2 border-2 rounded-2xl focus:outline-none bg-white"
            required
          />
          <input
            type="text"
            name="email"
            placeholder="Email Address:"
            className="my-2 p-2 border-2 rounded-2xl focus:outline-none bg-white"
            required
          />
          <textarea
            name="subject"
            placeholder="Subject:"
            rows="1"
            className="p-2 mb-2 border-2 rounded-2xl focus:outline-none bg-white"
            required
          />
          <textarea
            name="message"
            placeholder="Enter your message:"
            rows="15"
            className="p-2 mb-2 border-2 rounded-2xl focus:outline-none bg-white"
            required
          />
          <button
            type="submit"
            className="text-center inline-block px-8 py-3 w-full text-base font-medium rounded-2xl text-white bg-gradient-to-r from-teal-400 via-teal-300 to-teal-200 drop-shadow-md mb-2"
          >
            Send Message
          </button>
          <button type="reset" onClick={clearMessage} className="text-center inline-block px-8 py-3 w-full text-base font-medium rounded-2xl text-white bg-gradient-to-r from-purple-400 via-purple-300 to-purple-200 drop-shadow-md">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
