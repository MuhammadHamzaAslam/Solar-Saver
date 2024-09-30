import React from "react";
import Button from "./Button";

const Tools = () => {
  const Data = [
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png1-CHwXHQYP.svg",
      title: "Real-time, accurate",
      text: "production estimates.",
    },
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png2-BdZxoh61.svg",
      title: "Minimal training time for",
      text: "new sales representatives.",
    },
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png3-DQyZYqFR.svg",
      title: "Homeowner-focused",
      text: "proposal design for clarity.",
    },
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png4-DtkWNZzq.svg",
      title: "Customizable solar sales",
      text: "tools for each representative.",
    },
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png5-BhXUQqOL.svg",
      title: "Quick and accurate",
      text: "solar sales proposals.",
    },
    {
      imgUrl: "https://solarsaver.vercel.app/assets/png6-K1TI4P5r.svg",
      title: "Smart management features for",
      text: "effective team coordination.",
    },
  ];
  return (
    <div>
      <div>
        <h1 className="text-8xl abc text-white text-center mt-32">
          <span className="text-[#ee8023] ">SOLAR</span> SAVER TOOLS
        </h1>
        <p className="text-center text-white text-lg mt-4">
          There are many variations of Solar Saver tools available, but the
          majority have suffered alteration in some form.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center flex-wrap mt-16">
          {Data.map((data, index) => (
            <div
              key={index}
              className="bg-[#1a1714] rounded-xl h-[200px] w-full sm:w-[48%] md:w-[48%] lg:w-[30%] m-4 p-4 px-6 text-white"
            >
              <div className="h-[70px] w-[70px] rounded-full mt-5 bg-[#ee8023] flex justify-center items-center">
                <img src={data.imgUrl} alt="" className="h-[40px] w-[40px]" />
              </div>
              <h1 className="text-md font-semibold mt-4 ">
                <span>{data.title}</span>
              </h1>
              <p className="text-md font-semibold">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
