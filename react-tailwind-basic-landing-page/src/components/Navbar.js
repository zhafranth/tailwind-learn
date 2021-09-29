import React from "react";

// Logo
import Logo from "../images/logo-white.svg";
import BgHeader from "../images/bg-header.png";
import BgPeople from "../images/bg-people.png";
import BgTruck from "../images/bg-truck.png";

// Components
import Button from "./Button";

const Navbar = () => {
  return (
    <section className="relative">
      <div className="container flex items-center justify-between py-4 z-10">
        <img src={Logo} alt="logo" className="cursor-pointer z-10" />
        <ul className="flex flex-row gap-x-16 hidden md:flex text-white z-10">
          <li>
            <a href="/" className="text-lg uppercase hover:text-traffico-red-1">
              About
            </a>
          </li>
          <li>
            <a href="/" className="text-lg uppercase hover:text-traffico-red-1">
              How To
            </a>
          </li>
          <li>
            <a href="/" className="text-lg uppercase hover:text-traffico-red-1">
              Faqs
            </a>
          </li>
          <li>
            <Button title="Contact Us" />
          </li>
        </ul>
      </div>
      <div className="container flex flex-col gap-12 py-32 mt-6 z-20 relative">
        <h1 className="text-4xl lg:text-7xl font-SerifDisplay text-traffico-white w-full lg:w-1/2">
          Your awesome traffic permit consultant.
        </h1>
        <div>
          <Button title="Get Started" />
        </div>
      </div>
      <div className="absolute left-0 top-0 w-full h-full z-0 ">
        <img
          src={BgHeader}
          alt="Background header"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute right-72 top-64 z-50 hidden lg:block">
        <img src={BgPeople} alt="Background header" className="" />
      </div>
      <div className="absolute left-0 -bottom-72 hidden lg:block">
        <img src={BgTruck} alt="" />
      </div>
    </section>
  );
};

export default Navbar;
