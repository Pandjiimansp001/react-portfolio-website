import React from "react";

const ScrollButton = () => {
  return (
    <div>
      <a
        href="#home"
        className="fixed bottom-4 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-primary dark:bg-secondPrimary p-4 hover:animate-pulse"
      >
        <span className="mt-2 block h-5 w-5 border-white rotate-45 border-t-2 border-l-2"></span>
      </a>
    </div>
  );
};

export default ScrollButton;
