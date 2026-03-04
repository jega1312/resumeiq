import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center outline-1 py-4 px-10">
      {/* Logo Container */}
      <div className="flex gap-2 items-center">
        <img
          src="/public/images/logo.png"
          alt="Logo Image"
          className="size-12 rounded-lg border-black"
        />
        <h1 className="text-lg font-bold font-inter">ResumeIQ</h1>
      </div>

      {/* Links */}
      <ul className="">
        <li>
          <a href="#process" className="text">Process</a>
        </li>
        <li>
          <a href="#features" className="text">Features</a>
        </li>
        <li>
          <a href="#pricing" className="text">Pricing</a>
        </li>
        <li>
          <a href="#faq" className="text">FAQ</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
