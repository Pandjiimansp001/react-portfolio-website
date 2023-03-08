import React from "react";

const DarkToggle = () => {
  const darkModeToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");

  const darkToggle = () => {
    if (darkModeToggle.checked) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  return (
    <div className="flex">
      <span className="mr-2 text-sm text-slate-500">Light</span>
      <input
        type="checkbox"
        className="hidden"
        id="dark-toggle"
        onClick={darkToggle}
      />
      <label htmlFor="dark-toggle">
        <div className="flex h-5 w-9 cursor-pointer items-center rounded-full bg-slate-500 p-1">
          <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
        </div>
      </label>
      <span className="ml-2 text-sm text-slate-500">Dark</span>
    </div>
  );
};

export default DarkToggle;
