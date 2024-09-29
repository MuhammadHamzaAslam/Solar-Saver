import React from "react";
import Button from "./Button";

const Cards = () => {
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
        "Efficient and affordable solar solutions for every Household. Perfect for Residential use.",
      watt: "$1.50 / watt",
    },
    {
      type: "COMMERCIAL",
      text: " PLAN",
      description:
        "Efficient and affordable solar solutions for every Household. Perfect for Residential use.",
      watt: "$1.50 / watt",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-wrap">
      {data.map((dataItem, index) => (
        <div
          key={index}
          className="bg-[#1a1714] rounded-xl h-[300px] w-[33%] m-4 p-4 px-6  text-white"
        >
          <div className="h-[80px] w-[80px] rounded-full bg-[#ee8023] flex justify-center items-center">
            <img
              src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg"
              alt=""
              className="h-[50px] w-[50px] "
            />
          </div>
          <h1 className="text-xl mt-4 abc">
            <span className="text-[#ee8023]">{dataItem.type}</span>{" "}
            {dataItem.text}
          </h1>
          <p className="mt-2">{dataItem.description}</p>
          <p className="mt-2 text-lg">{dataItem.watt}</p>
          <div className="mt-5">
            <Button />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
