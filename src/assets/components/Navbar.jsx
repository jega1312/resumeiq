import { useEffect, useState } from "react";
import React from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleOpen = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return ()=>{
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav className="flex justify-between flex-wrap items-center py-6 px-8 lg:px-10 bg-linear-to-r from-[#03001C] to-[#1b1042] ">
      {/* Logo Container */}
      <a className="flex gap-2 items-center hover:cursor-pointer" href="#hero">
        <img
          src="/public/images/logo.png"
          alt="Logo Image"
          className="size-10 md:size-12 rounded-lg border-black"
        />
        <h1 className="text-base md:text-xl font-bold font-inter text-white/75 hover:text-white transition duration-300 ease-in-out">
          ResumeIQ
        </h1>
      </a>

      {/* Hamburger Menu */}
      <button
        type="button"
        onClick={toggleOpen}
        className="relative flex items-center lg:hidden flex-col gap-2 h-5 w-8"
      >
        <span
          className={`absolute h-0.75 w-8 bg-white rounded-full transition duration-300 ease-in-out  ${menuOpen ? "rotate-45 top-2" : "top-0"}`}
        ></span>
        <span
          className={`absolute top-2 h-0.75 w-8 bg-white rounded-full transition duration-300 ease-in-out  ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`absolute h-0.75 w-8 bg-white rounded-full  transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-2" : "top-4"}`}
        ></span>
      </button>

      {/* Menu Mobile Dropdown */}
      <div
        className={`min-h-screen ${menuOpen ? "flex" : "hidden"} lg:hidden w-full flex-col items-start justify-center gap-10 transition duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start justify-center gap-10 list-none">
          <li>
            <a
              href="#process"
              className="no-underline font-inter font-medium text-4xl relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
            >
              Process
              <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="no-underline font-inter font-medium text-4xl relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
            >
              Features
              <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="no-underline font-inter font-medium text-4xl relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
            >
              Pricing
              <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className="no-underline font-inter font-medium text-4xl relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
            >
              FAQ
              <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
            </a>
          </li>
        </ul>

        {/* Get Started Mobile Button */}
        <button
          type="button"
          className="py-3 px-5 bg-purple-500 font-inter font-medium text-white/90 hover:text-white text-xl rounded-sm hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 transition duration-300 ease-in-out relative hover:scale-110 hover:cursor-pointer"
        >
          Get Started
        </button>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-4 list-none">
        <li>
          <a
            href="#process"
            className="no-underline font-inter font-medium text-lg relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
          >
            Process
            <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="no-underline font-inter font-medium text-lg relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
          >
            Features
            <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="no-underline font-inter font-medium text-lg relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
          >
            Pricing
            <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="no-underline font-inter font-medium text-lg relative group text-white/75 hover:text-white transition duration-300 ease-in-out"
          >
            FAQ
            <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
          </a>
        </li>
      </ul>

      {/* Get Started Desktop Button */}
      <button
        type="button"
        className="hidden lg:block py-2 px-4 bg-purple-500 font-inter font-medium text-white/90 hover:text-white rounded-sm hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 transition duration-300 ease-in-out relative hover:scale-110 hover:cursor-pointer"
      >
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
