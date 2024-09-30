import React from "react";

const Equipment = () => {
  const Data = [
    {
      title: "Panels",
      text: "Solar Saver offers industry-leading solar panels. Experience unparalleled efficiency and durability with our advanced technology.",
    },
    {
      title: "INVERTERS",
      text: "Solar Saver supplies high-performance inverters. Our inverters ensure maximum energy conversion and system reliability.",
    },
    {
      title: "BATTERIES",
      text: "Solar Saver provides state-of-the-art batteries. Enjoy consistent and long lasting energy storage with our premium solutions.",
    },
  ];
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-8xl abc text-white text-center mt-32">
          <span className="text-[#ee8023]">best</span> Equipment in the industry
        </h1>
        <p className="text-white text-lg mt-4 lg:w-[62%] mx-auto text-center">
          Solar Saver uses the highest quality solar panels and inverters. Trust
          our cutting-edge technology for superior performance and durability.
        </p>
      </div>
      <div className="mt-14 flex justify-center items-center flex-wrap container mx-auto gap-5">
        {
            Data.map((data , index)=>(
                <div key={index} className="flex flex-col justify-center items-center bg-[#1a1714] rounded-3xl py-14 px-5 md:w-[40%] lg:w-[30%]  ">
                    <div>
                        <img src="https://solarsaver.vercel.app/assets/home-png-CGsn3ztO.svg" className="h-[100px] " alt="" />
                    </div>
                    <h1 className="abc text-3xl mt-5 text-white">{data.title} </h1>
                    <p className="text-white text-lg text-center mt-5 ">{data.text} </p>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Equipment;
