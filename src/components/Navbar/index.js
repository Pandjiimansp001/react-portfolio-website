import React, { useEffect, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import DarkToggle from "./DarkToggle";

const Navbar = (props) => {
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

  const [openNav, setOpenNav] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpenNav(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <header className="w-full bg-white dark:bg-dark bg-opacity-70 backdrop-blur-sm fixed z-10">
      <div
        ref={menuRef}
        className="container md:flex items-center justify-between py-4 md:px-10"
      >
        <div className="font-bold text-2xl cursor-pointer text-primary dark:text-secondPrimary">
          Pandjiimansp
        </div>

        <div
          onClick={() => setOpenNav(!openNav)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {openNav ? <MdClose /> : <MdMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            openNav
              ? "top-[64px] opacity-100 bg-white bg-opacity-70 backdrop-blur-sm"
              : "top-[-490px] opacity-0"
          } md:opacity-100`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="text-secondary hover:text-primary dark:hover:text-secondPrimary dark:text-white duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="flex items-center pl-8">
            <DarkToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
