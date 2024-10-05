import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);
  const testimonialsData = [
    {
      img: "https://solarsaver.vercel.app/assets/joh-doe-CpqoclS1.webp",
      description:
        "Solar Saver exceeded my expectations in every way. From the initial consultation to the final installation, their team was professional and efficient. The whole process was seamless. Highly recommend!",
      name: "John Doe",
    },
    {
      img: "https://solarsaver.vercel.app/assets/review-img2-1sDgRqsh.webp",
      description:
        "Choosing Solar Saver was one of the best decisions. The installation was quick and hassle-free, and their customer service was top-notch. I appreciate the transparency and the significant savings on my energy costs. Fantastic experience!",
      name: "Tom Davis",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex =
      currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex =
      currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  return (
    <section className="flex justify-center items-center flex-wrap h-auto w-full mt-20 pt-20">
      <div
        className="md:w-[50%] w-full flex justify-center items-center mb-8 md:mb-0"
        data-aos="zoom-in"
      >
        <img
          src={testimonialsData[currentIndex].img}
          className="h-[600px] w-[60%] object-cover rounded-[20px] "
          alt={testimonialsData[currentIndex].name}
        />
      </div>

      <div
        className="md:w-[50%] w-full p-6"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <img
          src="data:image/svg+xml,%3csvg%20width='29'%20height='23'%20viewBox='0%200%2029%2023'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.638282%2011.66V-5.24521e-06H12.2983V10.45L7.01828%2022.66H2.06828L5.25828%2011.66H0.638282ZM16.6983%2011.66V-5.24521e-06H28.3583V10.45L23.0783%2022.66H18.1283L21.3183%2011.66H16.6983Z'%20fill='%23EE8023'/%3e%3c/svg%3e"
          alt="Quotation Icon"
          className="mb-4"
        />
        <h1 className="text-5xl text-white mb-6 abc">
          {testimonialsData[currentIndex].description}
        </h1>

        <div className="flex items-center justify-center md:justify-start space-x-4">
          <img
            src={testimonialsData[currentIndex].img}
            className="h-[50px] w-[50px] rounded-full object-fill"
            alt={testimonialsData[currentIndex].name}
          />
          <h1 className="text-white">
            <span className="text-[#EE8023]">@</span>{" "}
            {testimonialsData[currentIndex].name}
          </h1>
        </div>

        <div className="pt-10">
          <ArrowLeftOutlined
            className="text-[#EE8023] mx-2 text-xl cursor-pointer"
            onClick={handlePrevClick}
          />
          <ArrowRightOutlined
            className="text-[#EE8023] mx-2 text-xl cursor-pointer"
            onClick={handleNextClick}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
