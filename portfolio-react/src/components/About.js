import React from "react";


function About(){
    return(
        <section id='about'>
            <div className="row">
                <div className="three columns">
                    <img className="profile-pic" src="images/headshot.jpg" alt="HeadshotImage" />
                </div>

                <div className="nine columns main-col">
                    <h2>About Me</h2>
                    <p>    I'm a 34 year old coding student at UTSA. Web Development has changed the way I think and it has been a fantastic journey. I am always looking for new things to learn and work with. My specialty is Front-End Web Development.</p>
                </div>
            </div>
        </section>
    )
}

export default About;