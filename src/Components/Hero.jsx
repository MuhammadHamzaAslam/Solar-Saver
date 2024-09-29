import React from "react";
import App from "../App";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="h-[50vh] container mx-auto flex justify-center items-center flex-col text-center">
      <h1 className="abc text-5xl text-white w-[75%]  md:mt-[120px] md:pt-10 md:text-8xl">
        <span className="text-[#EB7F25]">Does Your Home </span>
        Need Quality Solar Panel Installation?
      </h1>
      <div className="mt-4">
        <p className="text-xl text-white">
          Trust our experienced solar power experts to customize the perfect
          solution for your home.
        </p>
      </div>
      <div className="mt-4">
        <Button />
      </div>
    </div>
  );
};

export default Hero;
