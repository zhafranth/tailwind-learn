import React from "react";

// Assets
import ImApply from "../images/apply-section.png";

const Apply = () => {
  return (
    <section className="px-8 pt-5 ">
      <div className="container flex flex-col lg:flex-row items-center gap-8">
        <div className="flex items-center">
          <img src={ImApply} alt="" />
        </div>
        <div className="flex flex-1 flex-col gap-4 justify-center md:justify-start">
          <h3 className="font-bold text-traffico-red text-md uppercase">
            How to apply
          </h3>
          <p className="text-base text-traffico-black font-light my-4 leading-9">
            When applying for a traffic permit, there are certain requirements
            that you must meet that are included in the examination:
            requirements for professional knowledge, solid establishment, good
            reputation and financial resources. Important to remember is to
            confirm your application for a traffic permit by the company's
            company signer or CEO.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Apply;
