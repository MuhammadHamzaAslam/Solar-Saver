import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  return (
    <>
      <section className="flex flex-wrap justify-center items-center p-6 mt-20  pt-10">
        <div
          className="w-full lg:w-1/2 p-4 mt-10 "
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="text-[#EE791F] text-lg w-full lg:w-[50%]  mb-6">
            About Us
          </h1>
          <h1 className="text-8xl abc text-white mb-6">SOLAR SAVER</h1>
          <p className="text-[#918f8d] mb-7 text-xl capitalize ">
            Solar Saver is revolutionizing the solar industry by offering the
            most cost-effective solar solutions in America. We specialize in
            providing transparent, instant pricing for solar installations. With
            an innovative AI quoting engine, we ensure personalized and accurate
            estimates for each customer.
          </p>
          <p className="text-[#EE791F] text-xl capitalize">
            Solar Saver also offers innovative battery solutions and flexible
            financing options, making solar energy more accessible and
            affordable.
          </p>
        </div>

        <div className="w-full lg:w-1/2 p-4 ">
          <img
            src="https://solarsaver.vercel.app/assets/about-img-CpwndtbG.webp"
            alt="Solar Saver"
            data-aos="fade-down-right"
            className="w-full h-auto "
          />
        </div>
      </section>
    </>
  );
};

export default AboutUs;
