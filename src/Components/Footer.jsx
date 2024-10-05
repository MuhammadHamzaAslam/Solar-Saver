import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
      <div>
        <p className="text-white text-sm md:text-base text-center">
          Copyright &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
      <div className="flex gap-6 mb-4 md:mb-0">
        <FaFacebook className="text-[#EB7F25] text-2xl hover:text-white transition-colors duration-300 cursor-pointer" />
        <FaInstagram className="text-[#EB7F25] text-2xl hover:text-white transition-colors duration-300 cursor-pointer" />
        <FaXTwitter className="text-[#EB7F25] text-2xl hover:text-white transition-colors duration-300 cursor-pointer" />
      </div>
    </footer>
  );
};

export default Footer;
