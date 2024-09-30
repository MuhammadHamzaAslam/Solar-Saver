import React, { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Hero = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
    });
  }, []); 

  return (
    <>
      <div className="h-[50vh] container mx-auto flex justify-center items-center flex-col text-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="abc text-5xl text-white w-[75%] md:mt-[120px] md:pt-10 md:text-8xl"
        >
          <span className="text-[#EB7F25]">Does Your Home </span>
          Need Quality Solar Panel Installation?
        </h1>
        <div className="mt-4">
          <p
            data-aos="fade-up"
            data-aos-duration="3000"
            className="text-xl text-white"
          >
            Trust our experienced solar power experts to customize the perfect
            solution for your home.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="mt-8">
          <Button />
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="https://solarsaver.vercel.app/assets/cover-C4PYW05n.webp"
          alt=""
          data-aos="fade-up" 
        />
      </div>
    </>
  );
};

export default Hero;
