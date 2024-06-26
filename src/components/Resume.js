import React from "react";
import resume from "../assets/LCResume.pdf";

export default function Resume() {
  return (
    <section>
      <hr className='hr'></hr>
      <div className="container mx-auto flex md:flex-row flex-col items-center">
        <div id="resume" className="container px-5 py-10 mx-auto text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Resume
            <br className="hidden lg:inline-block" />
          </h1> 
          <div id="resumeCon" className="resumeSkills row justify-content-center">
            <div className="col-md-6">
              <p id="skills" className="mb-8 leading-relaxed">
                <h2 className="title-font sm:text-l text-l mb-4 font-medium text-white">Skills:</h2>
                HTML, CSS, Javascript, ReactJS, PWA, WordPress, PHP, Woocommerce, Shopify, Elementor, Adobe Photoshop, Back-End Development, Customer Support, Databases, Debuggin, Design Pattern, Digital Marketing, Editing, Full-Stack Web Development, Google Docs, Git, Github, NPM, GraphQL, IT, JQuery, Json, Layout Design, MERN, MVC, Responsive Web Design, Photography, Photo Editing, SEO, Slack, Software Development/Deployment.<br></br>
                Resume can also be downloaded <a className="download" href={resume} target="_blank" rel="noreferrer">Here</a> 
              </p>
            </div>
            <div className="col-md-6">
              <object className="resume" data={resume} type="application/pdf"> </object>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}