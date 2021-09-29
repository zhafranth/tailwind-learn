import React from "react";

// Assets
import LogoWhite from "../images/logo-white.svg";
import ImTruck from "../images/bg-truck-2.png";

const Contact = () => {
  return (
    <section className="relative mt-20">
      <div
        className="absolute bottom-0 left-0 bg-traffico-blue w-full md:w-11/12 h-3/4"
        style={{ borderTopRightRadius: "120px" }}
      ></div>
      <div className="absolute top-12 left-0 w-1/4 hidden lg:block">
        <img src={ImTruck} alt="Truck" className="w-full" />
      </div>
      <div className="container flex flex-col-reverse md:flex-row items-end relative">
        <div className="w-full md:w-2/4 p-8 bg-transparent border-l-4 border-traffico-red mr-0 md:mr-8 mt-8 md:mt-0">
          <p className="text-white font-light text base">
            We provide traffic management consultants so you get started
            quickly, contact us for a quote today!
          </p>
        </div>
        <div className="w-full md:w-2/4 bg-white rounded-md p-16 shadow-xl">
          <div className="mb-8">
            <label
              htmlFor="name"
              className="text-traffico-grey text-sm block mb-4 font-light"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Full Name"
              className="outline-none border-2 border-traffico-red-1 px-2 py-3 w-full rounded-md focus:shadow-xl focus:border-traffico-red focus:border-traffico-red"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="text-traffico-grey text-sm block mb-4 font-light"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Your Email Address"
              className="outline-none border-2 border-traffico-red-1 px-2 py-3 w-full rounded-md focus:shadow-xl focus:border-traffico-red focus:border-traffico-red"
            />
          </div>
          <button className="bg-traffico-red text-white px-8 py-3 rounded-md uppercase text-sm hover:shadow-lg transition mt-4">
            Get Started
          </button>
        </div>
      </div>
      <div className="container flex items-center md:items-start flex-col md:flex-row md:justify-between mt-5 md:mt-36  py-24 relative gap-12">
        <img src={LogoWhite} alt="logo traffico" />
        <ul className="flex items-center gap-14 md:gap-8 text-white">
          <li>
            <a href="/" className="font-light uppercase">
              About
            </a>
          </li>
          <li>
            <a href="/" className="font-light uppercase">
              How To
            </a>
          </li>
          <li>
            <a href="/" className="font-light uppercase">
              Faqs
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
