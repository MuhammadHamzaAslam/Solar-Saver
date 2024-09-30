import React, { useState } from "react";

const Map = () => {
  const [selectedButton, setSelectedButton] = useState("Full Install");
  const handleClick = (text) => {
    setSelectedButton(text);
  };

  return (
    <div>
      <div className="pt-10">
        <h1 className="text-[105px] abc text-white text-center mt-32">
          <span className="text-[#ee8023]">WE'VE</span> GOT YOU COVERED
        </h1>
        <p className="text-white text-lg -mt-2 mx-auto text-center">
          Explore solar potential in your area. See how Solar Saver can help
          you. Full InstallMap
        </p>
      </div>

      <div className="flex justify-center items-center mt-16">
        <div className="h-[50px] w-[220px] py-7 border border-[#ee8023] rounded-lg flex items-center justify-center gap-3">
          <button
            className={` ${
              selectedButton === "Full Install"
                ? "bg-[#ee8023] text-white"
                : "bg-transparent text-white"
            }   border-none py-2 rounded-md px-5 `}
            onClick={() => handleClick("Full Install")}
          >
            Full Install
          </button>
          <button
            className={`${
              selectedButton === "Map"
                ? "bg-[#ee8023] text-white"
                : "bg-transparent text-white"
            } border-none py-2 rounded-md px-5 `}
            onClick={() => handleClick("Map")}
          >
            Map
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div>
          <img
            src={`${
              selectedButton === "Full Install"
                ? "https://solarsaver.vercel.app/assets/map-img1-DR_uFjwz.webp"
                : "https://solarsaver.vercel.app/assets/map-img2-CzFhrCce.webp"
            }`}
            alt="Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;
