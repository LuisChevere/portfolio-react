import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me!
            <br className="hidden lg:inline-block" />
            <img className="sm:w-64 h-70 p-4" alt="headshot" src="./headshot.jpg"></img>
          </h1>
          <p className="mb-8 leading-relaxed">
          I'm a 34 year old coding student at UTSA. 
                Web Development has changed the way<br></br> I think and it has been a fantastic journey. 
                I am always looking for new things to learn and work with.<br></br>My specialty is Front-End Web Development.
                I consider myself a visual artist and love to collaborate with <br></br>technical artist to bring ideas to life.
          </p>
        </div>
      </div>
    </section>
  );
}