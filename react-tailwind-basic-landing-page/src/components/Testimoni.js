import React from "react";

import { CgArrowLongLeft, CgArrowLongRight } from "react-icons/cg";

// Assets
import ImUser1 from "../images/testimoni-1.png";
import ImUser2 from "../images/testimoni-2.png";

const Testimoni = () => {
  return (
    <section className="py-20 px-4 mt-10">
      <div className="container flex items-center justify-between">
        <h5 className="font-bold text-traffico-red text-lg uppercase">
          About Us
        </h5>
        <div className="md:flex gap-2 justify-between hidden text-2xl">
          <CgArrowLongLeft className="text-traffico-red-1 cursor-pointer" />
          <CgArrowLongRight className="text-traffico-red cursor-pointer" />
        </div>
      </div>
      <div className="container gap-12 flex flex-wrap mt-8 text-traffico-black">
        <div className="w-80 h-64">
          <h3 className="text-4xl font-SerifDisplay">Out Awesome Clients</h3>
        </div>
        <div className="flex flex-col justify-between w-80 h-64 bg-white rounded-md shadow-lg p-8 ">
          <p className=" font-light text-sm">
            Yes, you will need to have the land owner sign the permit
            application as the Permittee, and you sign the permit as the
            Applicant or Agent for the Permittee.
          </p>
          <div className="flex items-center gap-8">
            <img src={ImUser1} alt="testimoni 1" />
            <p className="font-bold">Isak Pettersson</p>
          </div>
        </div>
        <div className="flex flex-col justify-between w-80 h-64 bg-white rounded-md shadow-lg p-8 ">
          <p className=" font-light text-sm">
            From most barricade or traffic control companies located in the
            phone book. They employ certified Traffic Control Supervisors (TCS)
            who can generate and certify the traffic control plan.
          </p>
          <div className="flex items-center gap-8">
            <img src={ImUser2} alt="testimoni 2" />
            <p className="font-bold">Simon Sandberg</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
