import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <section className="px-6 my-32">
      <h4 className="font-semibold text-3xl font-ibm text-center ">Projects</h4>
      <p className="text-xl opacity-60 font-normal text-center">
        Beberapa proyek bikinan saya.
      </p>
      <div className="container flex flex-col md:flex-row flex-wrap mt-16">
        <div className="w-full md:w-1/2 p-8 ">
          <div className="w-full flex flex-col items-center gap-y-4 text-black">
            <Image
              src="/project-1.png"
              width="775"
              height="650"
              className="object-cover"
            />
            <h5 className="font-semibold text-xl ">Hansen</h5>
            <p className="text-md opacity-40">Explorasi landing page</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 ">
          <div className="w-full flex flex-col items-center gap-y-4 text-black">
            <Image
              src="/project-1.png"
              width="775"
              height="650"
              className="object-cover"
            />
            <h5 className="font-semibold text-xl ">Hansen</h5>
            <p className="text-md opacity-40">Explorasi landing page</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 ">
          <div className="w-full flex flex-col items-center gap-y-4 text-black">
            <Image
              src="/project-1.png"
              width="775"
              height="650"
              className="object-cover"
            />
            <h5 className="font-semibold text-xl ">Hansen</h5>
            <p className="text-md opacity-40">Explorasi landing page</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 ">
          <div className="w-full flex flex-col items-center gap-y-4 text-black">
            <Image
              src="/project-1.png"
              width="775"
              height="650"
              className="object-cover"
            />
            <h5 className="font-semibold text-xl ">Hansen</h5>
            <p className="text-md opacity-40">Explorasi landing page</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
