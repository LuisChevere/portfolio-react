import React from "react";
import { SocialIcon } from 'react-social-icons';
import { useForm, ValidationError } from '@formspree/react';

export default function Footer() {
  const [state, handleSubmit] = useForm("mnqeoknw");

  const handleFormSubmit = async (data, event) => {
    event.preventDefault();

    await handleSubmit(data, event);
    
    if (state.succeeded) {
      alert("Message Sent!");
    }
  };

  return (
    <footer>
      <hr className='hr'></hr>
      <div id="footer">
        <form
          onSubmit={(event) => handleFormSubmit(event)}
          className="form"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5">
            Please add any inquiries in a message below, and I will get back to you as soon as possible. Thank you!
          </p>

          {/* Input fields */}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              id="name"
              className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="text"
              name="name"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>

          {/* Email field */}
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              id="email"
              className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              type="email"
              name="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message field */}
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white h-32 text-base outline-none text-bal-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Write message here"
              name="message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={state.submitting}
            id="btn"
          >
            {state.submitting ? 'Sending...' : 'Submit'}
          </button>
        </form>

        {/* Social links */}
        <div className="socials">
          <h1>Social Links</h1>
          <div className="icons">
            <a href="https://github.com/LuisChevere">
              <SocialIcon url="https://github.com/LuisChevere" />
            </a>
            <a href="https://www.linkedin.com/in/luis-chevere-4a417575">
              <SocialIcon url="https://www.linkedin.com/in/luis-chevere-4a417575" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
