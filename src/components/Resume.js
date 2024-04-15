import React from "react";
import resume from "../assets/LCResume.pdf";

export default function Resume() {
  return (
    <section>
      <hr className='hr'></hr>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div id="resume" className="container px-5 py-10 mx-auto text-center lg:px-40">
          
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Resume
            <br className="hidden lg:inline-block" />
          </h1> 
          <h2 className="title-font sm:text-l text-l mb-4 font-medium text-white">Skills:</h2>
          <div className="resumeSkills">
            <p id="skills" className="mb-8 leading-relaxed">
              HTML, CSS, Javascript, ReactJS, PWA, WordPress, PHP, Woocommerce, Shopify, Elementor, Adobe Photoshop, Back-End Development, Customer Support, Databases, Debuggin, Design Pattern, Digital Marketing, Editing, Full-Stack Web Development, Google Docs, Git, Github, NPM, GraphQL, IT, JQuery, Json, Layout Design, MERN, MVC, Responsive Web Design, Photography, Photo Editing, SEO, Slack, Software Development/Deployment.
              It can also be downloaded <a className="download" href={resume} target="_blank" rel="noreferrer">Here</a> 
            </p>
            <object className="resume" data={resume} type="application/pdf"> </object>
          </div>
        </div>
        </div>
    </section>
  );
}