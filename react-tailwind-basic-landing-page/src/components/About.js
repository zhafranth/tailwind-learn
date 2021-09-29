import React from "react";

import ImAbout from "../images/about-section.png";

const About = () => {
  return (
    <section className="px-8 py-20 mt-30 lg:mt-80">
      <div className="container flex flex-col-reverse lg:flex-row items-center gap-8">
        <div className="flex flex-1 flex-col gap-4 justify-center md:justify-start">
          <h3 className="font-bold text-traffico-red text-md uppercase">
            About Us
          </h3>
          <p className="text-base text-traffico-black font-light my-4 leading-9">
            The occupational traffic permit is one of the most important things
            in the company when carrying out freight transport. In fact, it is a
            prerequisite for doing business traffic at all.
          </p>
          <div className="bg-traffico-red-1 p-8 border-l-4 border-traffico-red">
            <h5 className="font-bold text-traffico-black text-lg">
              How do you do when you need to obtain a commercial traffic permit
              for freight transport to your business?
            </h5>
          </div>
        </div>
        <div className="flex items-center">
          <img src={ImAbout} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
