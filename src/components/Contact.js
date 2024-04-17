import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mnqeoknw");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    if (state.succeeded) {
      alert("Message Sent!");
      setFormData({ name: "", email: "", message: "" }); // Reset form fields
    }
  }, [state.succeeded]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <footer>
      <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">Contact</h2>
      <p className="leading-relaxed mb-5">
        Please add any inquiries in a message below, and I will get back to you as soon as possible. Thank you!
      </p>
      <div className="relative mb-4">
        <form className="form" onSubmit={handleFormSubmit}>
          {/* Name */}
          <label htmlFor="name" className="leading-7 text-sm">
            Name
          </label>
          <input
            id="name"
            className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
          />

          {/* Email */}
          <label htmlFor="email" className="leading-7 text-sm">
            Email
          </label>
          <input
            id="email"
            className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          
          {/* Message */}
          <label htmlFor="message" className="leading-7 text-sm">
            Message
          </label>
          <textarea
            id="message"
            className="w-full bg-gray-800 rounded border border-black focus:border-white focus:ring-2 focus:ring-white h-32 text-base outline-none text-bal-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button id="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
}








// export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");


//   const CheckTextInput = (event) => {
//     console.log(event.target.getAttribute("id"))
//     const blurredEl = event.target.getAttribute("id");

//     if (blurredEl === "name") {
//       // error
//       alert('Please enter name!')
//       return;
//     } else if (blurredEl === "email") {
//       // error
//       alert('Please enter email!')
//       return;
//     } else if (blurredEl === "message") {
//       // error
//       alert('Please enter a message!')
//       return;
//     }

//     //Checked Successfully
//     //Do whatever you want
//     alert('Success');
//   };

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (name === '' || email === '' || message === '') {
//       // error
//       alert("Please input requested information above!")
//       return;
//     }

//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "test", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

//   return (
//     <section id="contact" className="relative">
//       <hr className='hr'></hr>
//       <div className="container px-5 py-10 mx-auto\ flex sm:flex-nowrap flex-wrap">
//         <form
//           onSubmit={handleSubmit}
//           className=" lg:w-1/3 md:w-1/2  flex-col md:mx-80 w-full md:py-8 mt-8 md:mt-0">
//           <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
//             Contact
//           </h2>
//           <p className="leading-relaxed mb-5">
//             Please add any inquires in a message below and I will get back to you as soon as possible. Thank you!
//           </p>
//           <div className="relative mb-4">
//             <label htmlFor="name" className="leading-7 text-sm text-gray-400">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name" onBlur={CheckTextInput}
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label htmlFor="email" className="leading-7 text-sm text-gray-400">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email" onBlur={CheckTextInput}
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="message" 
//               className="leading-7 text-sm text-gray-400">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message" onBlur={CheckTextInput}
//               className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder="Write message here"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button
//             type="submit"
//             className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

