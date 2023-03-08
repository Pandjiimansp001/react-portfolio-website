import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary dark:text-secondPrimary mb-2">
              Contact
            </h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Contact Me
            </h2>
            <p className="font-medium text-md text-secondary">
              Please fill the form below.
            </p>
          </div>
        </div>

        <FormContact />
      </div>
    </section>
  );
};

export default Contact;
