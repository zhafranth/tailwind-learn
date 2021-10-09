import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";

const index = () => {
  return (
    <section className="h-[712px] font-source-sans w-full text-white relative px-6">
      <div className="absolute top-0 left-0 w-full h-full">
        <img src="/bg-hero.png" className="w-full h-full " />
      </div>
      <div className="relative z-10 container flex items-center justify-between py-14">
        <Link href="/">
          <span className="font-semibold tracking-widest text-2xl uppercase cursor-pointer">
            Zhafran
          </span>
        </Link>
        <ul className="hidden md:flex space-x-12 items-center">
          <li>
            <Link href="/">
              <span className="opacity-80 hover:opacity-90  text-lg cursor-pointer ">
                Profile
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="opacity-80 hover:opacity-90  text-lg cursor-pointer ">
                Skills
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="opacity-80 hover:opacity-90  text-lg cursor-pointer ">
                Project
              </span>
            </Link>
          </li>
          <li>
            <Link href="/">
              <span className="opacity-80 hover:opacity-90  text-lg cursor-pointer ">
                Contact
              </span>
            </Link>
          </li>
        </ul>
        <Button variant="outline-yellow" classname="hidden md:inline-block">
          Kontak
        </Button>
      </div>
      <div className="relative z-10 w-full lg:w-5/12 mx-auto text-center mt-24">
        <h4 className="font-ibm font-semibold text-xl lg:text-3xl">
          Saya seorang front-end engineer, back-end engineer, dan juga UI
          designer
        </h4>
        <p className="w-full lg:w-2/4 mx-auto text-lg opacity-60 mt-6 mb-14">
          Sejak 13 tahun saya memulai programming. Sejak 3 tahun memulai UI
          design.
        </p>
        <Button variant="yellow">Pelajari</Button>
      </div>
    </section>
  );
};

export default index;
