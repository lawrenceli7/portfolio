function About() {
  return (
    <div
      id="about"
      className="items-center h-screen flex flex-col justify-center"
    >
      <h1 className="text-center mb-4 hover:underline hover:underline-offset-8">
        <span className="text-4xl font-bold bg-gradient-to-r from-gray-500 via-gray-400 to-gray-300 bg-clip-text text-transparent">
          About Me
        </span>
      </h1>
      {/* <div className="flex flex-row gap-8 text-m md:text-xl">
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2">Education</button>
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2">Skills</button>
        <button className="bg-white p-5 rounded-3xl hover:underline hover: underline-offset-8 hover:bg-gray-500 hover:text-white hover:shadow-2xl  hover:shadow-teal-100 border-gray-500 border-2">Experience</button>
      </div> */}
      <div className="flex flex-col items-center">
        <div className="text-xl text-gray-500 pt-6">
          I am a junior at Boston University studying Computer Science. My main
          interests lie in the field of web development and software
          engineering, with a special focus on front-end development.
        </div>
        <div className="text-xl text-gray-500 pt-6">
          I am currently looking for an internship for the summer of 2024. If
          you are interested in collaborating or have any projects you think
          would be a good fit, feel free to reach out to me!
        </div>
      </div>
    </div>
  );
}

export default About;
