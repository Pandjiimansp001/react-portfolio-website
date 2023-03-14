import React from "react";
import Me from "../../assets/pandji_profile2.png";

const Hero = () => {
  return (
    <section className="pt-36" id="home">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary dark:text-secondPrimary md:text-xl">
              Hi ✌, i'm{" "}
              <span className="block font-bold mb-5 text-dark dark:text-white text-4xl mt-1 lg:text-5xl">
                Pandji Iman S
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">
              Graduate of Informatics Engineering Department
            </h2>
            <p className="font-medium text-secondary mb-10 leading-relaxed">
              Welcome to my portofolio website
            </p>
            <div className="flex gap-8">
              <a href="#contact">
                <button
                  type="button"
                  className="bg-primary dark:bg-secondPrimary hover:opacity-80 hover:shadow-lg text-white font-semibold py-3 px-8 rounded-full text-base transition duration-300 ease-in-out"
                >
                  Contact Me
                </button>
              </a>
              <a
                href="https://drive.google.com/drive/folders/1XDhxeBLk9l6aB1xucQNyHCr3anbHldUM"
                target="_blank"
              >
                <button
                  type="button"
                  className="bg-primary dark:bg-secondPrimary hover:opacity-80 hover:shadow-lg text-white font-semibold py-3 px-8 rounded-full text-base transition duration-300 ease-in-out"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center lg:justify-start px-4 lg:w-1/2">
            <img
              src={Me}
              alt="Me"
              className="lg:mt-9 lg:right-0 border-primary border-4 dark:border-secondPrimary rounded-full w-60 lg:w-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
