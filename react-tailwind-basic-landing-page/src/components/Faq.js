import React from "react";

// Assets
import ImFaq from "../images/faq-section.png";

// Icons
import { FiPlus } from "react-icons/fi";

const Faq = () => {
  return (
    <section className="relative py-32 px-4">
      <div
        className="absolute right-0 top-0 h-full w-4/5 lg:w-3/5"
        style={{ borderTopLeftRadius: "500px", backgroundColor: "#FDEDE8" }}
      ></div>
      <div className="container flex flex-col-reverse lg:flex-row items-center relative">
        <div className="flex flex-1 flex-col text-center md:text-left">
          <h3 className="font-bold text-traffico-red text-md uppercase">FAQ</h3>
          <h2 className="font-SerifDisplay text-4xl text-traffico-black ">
            Questions and Answers on Professional Traffic Permits:
          </h2>
        </div>
        <div className="hidden lg:block w-3/5">
          <img src={ImFaq} alt="Faq" className="object-cover w-full" />
        </div>
      </div>
      <div className="container flex flex-wrap mt-16 gap-4 lg:gap-8 justify-center items-start box-border relative">
        <div className="flex p-6 rounded-md items-center justify-between bg-white w-full lg:w-5/12 cursor-pointer shadow-lg hover:shadow-xl ">
          <h5 className="text-traffico-black text-lg font-bold">
            What is a professional traffic permit?
          </h5>
          <FiPlus className="text-traffico-red" />
        </div>
        <div className="flex p-6 rounded-md items-center justify-between bg-white w-full lg:w-5/12 cursor-pointer shadow-lg hover:shadow-xl ">
          <h5 className="text-traffico-black text-lg font-bold">
            What is a professional traffic permit?
          </h5>
          <FiPlus className="text-traffico-red" />
        </div>
        <div className="flex p-6 rounded-md items-center justify-between bg-white w-full lg:w-5/12 cursor-pointer shadow-lg hover:shadow-xl ">
          <h5 className="text-traffico-black text-lg font-bold">
            What is a professional traffic permit?
          </h5>
          <FiPlus className="text-traffico-red" />
        </div>
        <div className="flex p-6 rounded-md items-center justify-between bg-white w-full lg:w-5/12 cursor-pointer shadow-lg hover:shadow-xl ">
          <h5 className="text-traffico-black text-lg font-bold">
            What is a professional traffic permit?
          </h5>
          <FiPlus className="text-traffico-red" />
        </div>
        <div className="flex p-6 rounded-md items-center justify-between bg-white w-full lg:w-5/12 cursor-pointer shadow-lg hover:shadow-xl ">
          <h5 className="text-traffico-black text-lg font-bold">
            What is a professional traffic permit?
          </h5>
          <FiPlus className="text-traffico-red" />
        </div>
      </div>
    </section>
  );
};

export default Faq;
