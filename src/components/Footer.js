import React from "react";
import { SocialIcon } from 'react-social-icons';



export default function Footer() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");


  const CheckTextInput = (event) => {
    console.log(event.target.getAttribute("id"))
    const blurredEl = event.target.getAttribute("id");

    if (blurredEl === "name") {
      // error
      alert('Please enter name!')
      return;
    } else if (blurredEl === "email") {
      // error
      alert('Please enter email!')
      return;
    } else if (blurredEl === "message") {
      // error
      alert('Please enter a message!')
      return;
    }

    //Checked Successfully
    //Do whatever you want
    alert('Success');
  };

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      // error
      alert("Please input requested information above!")
      return;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <footer>
      <hr className='hr'></hr>
      <div id="footer">
          <form
            onSubmit={handleSubmit}
            className="form">
            <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
              Contact
            </h2>
            <p className="leading-relaxed mb-5">
              Please add any inquires in a message below and I will get back to you as soon as possible. Thank you!
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" onBlur={CheckTextInput}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" onBlur={CheckTextInput}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400">
                Message
              </label>
              <textarea
                id="message"
                name="message" onBlur={CheckTextInput}
                className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Write message here"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>
        


        {/* Socials, map, email */}
        <div className="socials">
            <h1>
              Social Links
            </h1>
            <div className="icons">
              <a href="nhttps://github.com/LuisChevere">< SocialIcon url="https://github.com/LuisChevere" /></a>
              <a href="https://www.linkedin.com/in/luis-chevere-4a417575"><SocialIcon url="https://www.linkedin.com/in/luis-chevere-4a417575" /></a>
              </div>
        </div>
      </div>
    </footer>
  );
}