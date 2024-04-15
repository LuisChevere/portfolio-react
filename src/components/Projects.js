import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import Crowley from '../assets/churchofcrowley.png';
import Elementor from '../assets/elementor.png';
import Ganza from '../assets/wrestleganza.png'
import Heathenz from '../assets/heathen.png'


const projects = [
  {
    title: "Church of Crowley",
    subtitle: "Wordpress application",
    description:
      "A pro-wrestling based website for a wrestling couple",
    image: Crowley, // Update image path
    link: "https://www.churchofcrowley.com",
  },
  {
      title: "Elementor Portfolio",
      subtitle: "Elementor Wordpress Plugin",
      description:
        "A Wordpress Elementor version of this Portfolio",
      image: Elementor, // Update image path
      link: "https://vfq.nyt.mybluehost.me/website_c93218db/",
    },
  {
    title: "Wrestleganza",
    subtitle: "Wordpress application",
    description:
      "Currently a 'coming soon page' for a 2 day event",
    image: Ganza, // Update image path
    link: "http://wrestleganza.com",
  },
  {
      title: "Heathenz Entertainment",
      subtitle: "Wordpress application",
      description:
        "A pro-wrestling company website.",
      image: Heathenz, // Update image path
      link: "http://heathenzentertainment.com",
    },
 
];

export default function Projects() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div id="gallery" className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
        <CodeIcon id="codeIcon" className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Below are just a few of the applications I've build myself and with collaborators.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image} 
              className="sm:w-1/2 w-100 p-4" target="_blank" rel="noreferrer">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
