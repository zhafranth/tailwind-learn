import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="py-8">
      <div className="container flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center gap-y-4">
        <p className="font-light text-traffico-black text-sm">
          Copyright @ 2019
        </p>
        <ul className="flex items-center gap-8">
          <li>
            <a
              href="/"
              className="decoration-none block w-12 h-12 rounded-full flex justify-center items-center bg-traffico-red"
            >
              <FaFacebook className="text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="decoration-none block w-12 h-12 rounded-full flex justify-center items-center bg-traffico-red"
            >
              <FaTwitter className="text-white" />
            </a>
          </li>
          <li>
            <a
              href="/"
              className="decoration-none block w-12 h-12 rounded-full flex justify-center items-center bg-traffico-red"
            >
              <RiInstagramFill className="text-white" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
