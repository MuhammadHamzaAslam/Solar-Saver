import React, { useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white">
      <div className="px-4 flex justify-between items-center h-14 mb-2">
        {/* Logo */}
        <img
          src="https://solarsaver.vercel.app/assets/logo-CeUqb7XY.png"
          className="h-[65px] "
          alt="Logo"
        />

        {/* Links for large screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="#pricing" className="hover:text-blue-400 px-4 mt-1">
            Pricing
          </a>
          <a href="#about" className="hover:text-blue-400 px-4 mt-1">
            About
          </a>
          <a href="#tools" className="hover:text-blue-400 px-4 mt-1">
            Tools
          </a>
          <a href="#how-it-works" className="hover:text-blue-400 px-4 mt-1">
            How it Works
          </a>
          <a href="#how-it-works" className="hover:text-blue-400 px-4 mt-1">
            Testinomials
          </a>
          <a href="#faq" className="hover:text-blue-400 px-4 mt-1">
            FAQ
          </a>
        </div>

        {/* Toggle button for small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <CloseOutlined className="text-2xl" />
            ) : (
              <MenuOutlined className="text-2xl" />
            )}
          </button>
        </div>

        {/* Button on the right side */}
        <div className="hidden lg:block">
          <Button />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden text-white space-y-2 p-4 flex justify-center items-center flex-col">
          <a href="#pricing" className="block hover:text-blue-400 py-2">
            Pricing
          </a>
          <a href="#about" className="block hover:text-blue-400 py-2">
            About
          </a>
          <a href="#tools" className="block hover:text-blue-400 py-2">
            Tools
          </a>
          <a href="#how-it-works" className="block hover:text-blue-400 py-2">
            How it Works
          </a>
          <a href="#how-it-works" className="block hover:text-blue-400 py-2">
            Testinomials
          </a>
          <a href="#faq" className="block hover:text-blue-400 py-2">
            FAQ
          </a>
          <div className="py-2">
            <Button />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
