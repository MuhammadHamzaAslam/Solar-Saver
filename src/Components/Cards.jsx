import React, { useEffect } from "react";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css"; 
const Cards = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  const data = [
    {
      type: "STANDARD",
      text: "PLAN",
      description:
        "Efficient and affordable solar solutions for every Household. Perfect for Residential use.",
      watt: "$1.50 / watt",
    },
    {
      type: "PREMIUM",
      text: "PLAN",
      description:
        "Advanced solar technology designed for maximum energy savings. Ideal for larger Homes and Estates.",
      watt: "$1.75 / watt",
    },
    {
      type: "COMMERCIAL",
      text: " PLAN",
      description:
        "High-capacity solar systems tailored for Businesses and Enterprises. Reliable and Robust solutions.",
      watt: "$2.00 / watt",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap mt-10 pt-8">
      {data.map((dataItem, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#1a1714] rounded-xl w-full  sm:w-[48%] md:w-[48%] lg:w-[30%] m-4 p-4 px-6 text-white"
        >
          <div className="h-[70px] w-[70px] rounded-full mt-5 bg-[#ee8023] flex justify-center items-center">
            <img
              src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
              alt=""
              className="h-[40px] w-[40px]"
            />
          </div>
          <h1 className="text-5xl mt-4 abc">
            <span className="text-[#ee8023]">{dataItem.type}</span>{" "}
            {dataItem.text}
          </h1>
          <p className="mt-2 text-xl ">{dataItem.description}</p>
          <p className="mt-2 text-lg font-bold">{dataItem.watt}</p>
          <div className="mt-5">
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
