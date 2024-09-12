import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="fixed top-5 md:top-10 z-50 w-[90%] sm:max-w-xl sm:inset-x-0 sm:mx-auto">
        <nav className="relative bg-black rounded-full sm:space-x-8 space-x-4 border border-white/[0.2] shadow-lg text-white py-[14px] md:py-6 px-6 sm:px-8 flex justify-center">
          <a className="hover:text-[#7b93fe] transition-transform duration-300 hover:scale-125 " href="#home">
            Home
          </a>
          <a className="hover:text-[#7b93fe] transition-transform duration-300 hover:scale-125 " href="#projects">
            Projects
          </a>
          <a className="hover:text-[#7b93fe] transition-transform duration-300 hover:scale-125 " href="#about">
            About
          </a>
          <a className="hover:text-[#7b93fe] transition-transform duration-300 hover:scale-125 " href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
