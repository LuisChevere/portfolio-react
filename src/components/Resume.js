import React from "react";
import resume from "../LuisChResume.pdf";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Resume
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            You can download my Resume <a className="text-white" href={resume}>Here</a>
            <h2 className="title-font sm:text-l text-l mb-4 font-medium text-white">Skills:</h2>
            HTML<br></br>
            CSS<br></br>
            Javascript<br></br>
            ReactJS<br></br>
            PWA<br></br>
            Wordpress<br></br>
            PHP <br></br>
          </p>
        </div>
      </div>
    </section>
  );
}