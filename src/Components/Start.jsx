import React from "react";
import Button from "./Button";

const ReadyToStart = () => {
  return (
    <section>
      <div className="bg-[url('https://solarsaver.vercel.app/assets/background-img-DpEZLK0b.webp')] h-[97.5vh] bg-[50%] bg-cover flex flex-col justify-center items-center">
        <h1 className="text-7xl abc ">Ready To Start?</h1>
        <p className="text-xl text-white mt-5">
          Our solar power experts will help you find the perfect solution for
          your home.
        </p>
        <div className="mt-5">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
