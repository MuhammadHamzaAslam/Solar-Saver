import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AiUtilization = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <div>
      <section className="flex flex-wrap items-center p-6 mt-32 pt-10">
        <div className="w-full lg:w-[60%] p-4 ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="h-[130px] rounded lg:w-[107%] mb-20 bg-gradient-to-r from-[#be7d21]/0 to-[#be7d21] flex justify-end items-center p-4"
          >
            <div className="text-right">
              <h1 className="block text-2xl text-white abc">System Size</h1>
              <p className="block text-md text-white">9.5 - 14.13 kWh*</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="h-[130px] rounded lg:w-[80%] mb-20 bg-gradient-to-r from-[#be7d21]/0 to-[#be7d21] flex justify-end items-center p-4"
          >
            <div className="text-right">
              <h1 className="block text-2xl text-white abc">Solar Panels</h1>
              <p className="block text-md text-white">34 - 43*</p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="h-[130px] rounded lg:w-[60%] mb-20 bg-gradient-to-r from-[#be7d21]/0 to-[#be7d21] flex justify-end items-center p-4"
          >
            <div className="text-right">
              <h1 className="block text-2xl text-white abc">CO2 Offset</h1>
              <p className="block text-md text-white">7.65 - 9.07*</p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[40%]  p-4" data-aos="zoom-in-right">
          <h1 className="abc text-8xl text-white lg:mt-20">
            <span className="text-[#ee8023]">AI</span> Utilization
          </h1>
          <p className="text-[#918f8d] mt-5 text-md font-semibold">
            Solar Saver utilizes an AI quoting engine to estimate the ideal
            solar system size for a customer's specific needs. This system
            calculates the number of solar panels required, the potential CO2
            offset, and the new, likely reduced monthly power bill.
          </p>
          <p className="text-[#918f8d] mt-5 text-md font-semibold">
            By analyzing various factors such as roof size, local sun exposure,
            and current electricity usage, the AI provides atailored solution.
          </p>
          <p className="text-[#ee8023] mt-5 ">
            This approach ensures customers get a system that maximizes energy
            efficiency and cost savings while contributing to environmental
            sustainability.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AiUtilization;
