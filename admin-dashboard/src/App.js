import React from "react";
import "./App.css";

// Assets
import Logo from "./assets/logo.svg";
import { BiHome } from "react-icons/bi";
import { FiBox, FiBookmark, FiSettings } from "react-icons/fi";
import { CgList, CgMail, CgLogOut, CgArrowLongRight } from "react-icons/cg";
import { ImFire } from "react-icons/im";
import { GrFormClose } from "react-icons/gr";

function App() {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{ backgroundColor: "#F0F2FF" }}
    >
      <div
        className="flex rounded-xl overflow-hidden"
        style={{ minHeight: "500px", minWidth: "1124px" }}
      >
        {/* Sidebar */}
        <div className="w-1/5 bg-white bg-opacity-80 rounded-xl flex flex-col p-4">
          <img src={Logo} alt="logo" className="mx-auto transform scale-75 " />
          <div className="flex flex-col gap-y-2 my-4 mb-auto">
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <BiHome className="text-xl mr-3 " />
              <p className="">Home</p>
            </div>
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <FiBox className="text-xl mr-3 " />
              <p className="">Explore</p>
            </div>
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <FiBookmark className="text-xl mr-3 " />
              <p className="">Saved</p>
            </div>
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <CgList className="text-xl mr-3 " />
              <p className="">Subscriptions</p>
            </div>
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <CgMail className="text-xl mr-3 " />
              <p className="mr-auto">Messages</p>
              <span className="w-5 h-5 rounded-full bg-primary text-white flex justify-center items-center text-xs">
                2
              </span>
            </div>
            <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
              <FiSettings className="text-xl mr-3 " />
              <p className="">Settings</p>
            </div>
          </div>
          <div className="h-10 rounded-lg bg-transparent hover:bg-primary hover:bg-opacity-20 cursor-pointer p-3 flex items-center text-gray hover:text-primary text-sm transition">
            <CgLogOut className="text-xl mr-3 " />
            <p className="">Logout</p>
          </div>
          <hr className="my-6 border-b border-gray opacity-20" />
          <div className="relative bg-white rounded-md px-4 py-8  flex flex-col items-center text-center gap-y-2 shadow-xl">
            <div className="w-12 h-12 bg-orange rounded-xl bg-opacity-30 flex justify-center items-center">
              <ImFire className="text-lg text-orange" />
            </div>
            <h5 className="font-bold text-black text-sm">
              Subscribe to our new plan <span className="text-orange">$25</span>
            </h5>
            <p className="text-xs text-gray">
              It is a limited time offer that will expire soon.
            </p>

            <button className="bg-primary hover:bg-opacity-80 text-white text-sm font-semibold py-2 self-stretch flex items-center justify-center gap-x-2 rounded-xl 	mt-4 transition">
              Subscribe now <CgArrowLongRight />
            </button>
            <button className=" w-4 h-4 absolute top-3 right-3 cursor-pointer text-black hover:opacity-80 text-xl">
              <GrFormClose />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white bg-opacity-40">
          <h2 className="font-medium hover:font-bold">testing</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
