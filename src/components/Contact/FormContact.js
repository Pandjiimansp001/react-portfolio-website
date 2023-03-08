import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const [result, setResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ygmmb4g",
        "template_u0u250w",
        e.target,
        "GB3lxn6lV3fwqjwtc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setResult(true);
  };

  setTimeout(() => {
    setResult(false);
  }, 5000);

  return (
    <form onSubmit={sendEmail}>
      <div className="w-full lg:w-2/3 lg:mx-auto">
        <div className="w-full px-4 mb-8">
          <label
            htmlFor="name"
            className="text-base text-primary dark:text-secondPrimary font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:dark:ring-secondPrimary focus:ring-1 focus:border-primary focus:dark:border-secondPrimary"
          />
        </div>
        <div className="w-full px-4 mb-8">
          <label
            htmlFor="email"
            className="text-base text-primary dark:text-secondPrimary font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:dark:ring-secondPrimary focus:ring-1 focus:border-primary focus:border:ring-secondPrimary"
          />
        </div>
        <div className="w-full px-4 mb-8">
          <label
            htmlFor="message"
            className="text-base text-primary dark:text-secondPrimary font-bold"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            name="message"
            className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:dark:ring-secondPrimary focus:ring-1 focus:border-primary focus:dark:border-secondPrimary"
          ></textarea>
        </div>
        <div className="w-full px-4">
          <button
            type="submit"
            className="text-base font-semibold text-white bg-primary dark:bg-secondPrimary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
          >
            Send
          </button>
          <div className="pt-4">
            {result ? <p>Your message has been successfully sent.</p> : null}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormContact;
