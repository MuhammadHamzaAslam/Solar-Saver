import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

const faqData = [
  {
    question: "WHAT IS SOLAR ENERGY?",
    answer:
      "Solar panels work by capturing sunlight through photovoltaic cells, which convert the sunlight into direct current (DC) electricity. An inverter then converts the DC electricity into alternating current (AC) electricity for use in homes and businesses.",
  },
  {
    question: "WHAT ARE THE BENEFITS OF USING SOLAR PANELS?",
    answer:
      "Solar panels offer several benefits, including reducing electricity bills, decreasing carbon footprint, and providing a renewable source of energy. They also have low maintenance costs and can increase property value.",
  },
  {
    question: "HOW LONG DO SOLAR PANELS LAST?",
    answer:
      "Solar panels typically have a lifespan of 25 to 30 years. However, their efficiency may decrease slightly over time. Most manufacturers offer warranties that guarantee performance for 20-25 years.",
  },
  {
    question: "WHAT MAINTENANCE DO SOLAR PANELS REQUIRE?",
    answer:
      "Solar panels require minimal maintenance. It is recommended to clean them a few times a year to ensure they are free of debris and dust. Regular inspections can help identify and address any potential issues early.",
  },
];

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`py-4 transition-all duration-300 ${
            activeIndex === index ? "bg-[#1a1714] rounded-md p-6" : ""
          }`}
        >
          <div
            className={`flex justify-between items-center transition-colors duration-300 mt-10 ${
              activeIndex === index ? "text-white" : "text-[#4f4c49]"
            }`}
          >
            <h1 className={`text-lg lg:text-4xl abc`}>{faq.question}</h1>

            <button
              onClick={() => toggleAnswer(index)}
              className="text-[#EE8023] text-xl md:text-2xl"
            >
              {activeIndex === index ? <MinusOutlined /> : <PlusOutlined />}
            </button>
          </div>

          {activeIndex === index && (
            <div className="mt-3">
              <p className="text-white text-sm md:text-base">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
