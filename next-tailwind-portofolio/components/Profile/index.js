import React from "react";
import Image from "next/image";

const index = () => {
  return (
    <section className="px-6 my-24">
      <div className="w-full lg:w-9/12 xl:w-7/12 mx-auto text-black font-source-sans">
        <h4 className="font-semibold text-3xl font-ibm text-center ">
          Profile
        </h4>
        <p className="text-xl opacity-60 font-normal text-center">
          Mengenal saya secara singkat.
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-x-12 mt-16">
          <Image src="/profile.png" width="400" height="550" className="" />
          <div className="flex-1 mt-14 lg:mt-0">
            <p className="text-xl font-normal mb-8 leading-9">
              {" "}
              Aliquam blandit leo lorem, nec vehicula mi accumsan posuere. Duis
              condimentum ornare ante a posuere. Aliquam sem magna, sodales quis
              congue vel, congue nec nisi. Aenean nec lorem et dolor aliquet
              ullamcorper eu at sapien. Sed pretium mauris dui. Phasellus mollis
              accumsan tempus. Proin laoreet hendrerit ligula, id lacinia eros.
              Aenean consequat, felis eu malesuada lobortis, augue nisl faucibus
              ligula, id viverra mi erat at nisl. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Maecenas ac aliquet eros.
            </p>
            <p className="text-xl font-normal leading-9">
              Aliquam a fringilla metus. Fusce ut tortor ut sem sagittis
              convallis. Morbi et augue sed nisl fermentum dictum eget ut nisl.
              Mauris ut dolor posuere augue porta lobortis nec sed lacus.
              Curabitur dignissim ac lorem in tempor. Morbi id dui quis ex
              malesuada mattis. Suspendisse potenti. Nulla euismod diam ut risus
              mollis, id vehicula nulla dictum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
