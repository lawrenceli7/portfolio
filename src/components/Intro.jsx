import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
        Lawrence Li
      </h1>
      <p className="text-base md:text-xl mb-3 font-medium">
        Inspiring Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">
        I'm currently a junior at Boston University studying computer science.
      </p>
    </div>
  );
}

export default Intro;
