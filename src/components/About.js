import React from "react";
import headshot from '../assets/newheadshot.jpg'

export default function About() {
  return (
    <section className="aboutInfo">
  <hr className="hr" />
  <div id="aboutCon" className="container mx-auto px-10 py-20 md:flex md:flex-col">
    <h1 id="about" className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      About Me
      <br className="hidden lg:inline-block" />
    </h1>
    <div id="aboutme" className="aboutme flex flex-col items-center md:flex-row">
      <img id="headshot" className="sm:w-64 h-70 p-4" alt="headshot" src={headshot} />
      <p className="par">
        <strong>Front-End Web Developer</strong><br />
        My name is Luis Chevere. I pursued my passion for web development by attending UTSA-San Antonio, where I
        completed their Full-Stack Web Development program. My journey into web development began at a young age, back
        in the days of customizing Myspace landing pages. Although it took me some time to reconnect with something I
        loved doing as a teen, in 2022, I reignited my passion for web development.
      </p>
    </div>
  </div>
</section>

  );
}