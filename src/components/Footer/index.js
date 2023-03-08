import React from "react";

const Footer = () => {
  let Links = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Portfolio",
      link: "#portfolio",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  let Connected = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/pandjiimansp/",
    },
    {
      name: "Github",
      link: "https://github.com/Pandjiimansp001?tab=repositories",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/pandjiimansp/",
    },
  ];

  return (
    <footer className="bg-dark dark:bg-secondPrimary pt-24 pb-12 text-center">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
            <h2 className="font-bold text-xl text-white mb-5">
              Pandji Portfolio
            </h2>
            <p className="mb-2">pandjiimansp001@gmail.com</p>
            <p className="mb-2">Kruing Utara Dalam 17 Street</p>
            <p className="mb-2">Semarang, Indonesia</p>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">
              Let's connect!
            </h3>
            <ul className="text-slate-300">
              {Connected.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="inline-block text-base hover:text-primary hover:dark:text-dark mb-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full px-4 mb-12 md:w-1/3">
            <h3 className="font-semibold text-xl text-white mb-5">Menus</h3>
            <ul className="text-slate-300">
              {Links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="inline-block text-base hover:text-primary hover:dark:text-dark mb-3"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
