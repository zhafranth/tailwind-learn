import React from "react";
import "./App.css";

// Assets
import Logo from "./assets/logo.svg";
import ImUser from "./assets/user.png";
import { FaChartPie, FaSearch } from "react-icons/fa";
import { BiHome, BiTargetLock, BiFilter } from "react-icons/bi";
import { FiBox, FiBookmark, FiSettings } from "react-icons/fi";
import { CgList, CgMail, CgLogOut, CgArrowLongRight } from "react-icons/cg";
import { ImFire } from "react-icons/im";
import { HiChevronRight } from "react-icons/hi";
import { GrFormClose } from "react-icons/gr";
import {
  RiArrowUpSLine,
  RiArrowDownSLine,
  RiCalendarTodoFill,
} from "react-icons/ri";

// Images
import ImChannelFox from "./assets/channel-foxnews.png";
import ImChannelCw6 from "./assets/channel-cw6news.png";
import ImChannelAbc from "./assets/channel-abcnews.png";
import ImChannelAl from "./assets/channel-aljazeera.png";
import ImChannelBbc from "./assets/channel-bbcnews.png";
import ImChannelCnn from "./assets/channel-cnnnews.png";

function App() {
  return (
    <div className="w-screen h-screen " style={{ backgroundColor: "#F0F2FF" }}>
      <div
        className="flex rounded-xl overflow-hidden mx-auto py-24"
        style={{ minHeight: "500px", maxWidth: "1224px" }}
      >
        {/* Sidebar */}
        <div className="bg-white bg-opacity-80 rounded-xl flex flex-col p-4 w-3/12">
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

            <button className="bg-primary hover:bg-opacity-80 text-white text-sm font-semibold py-2 self-stretch flex items-center justify-center gap-x-2 hover:gap-x-3 rounded-xl 	mt-4 transition-all">
              Subscribe now <CgArrowLongRight />
            </button>
            <button className=" w-4 h-4 absolute top-3 right-3 cursor-pointer text-black hover:opacity-80 text-xl">
              <GrFormClose />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-white bg-opacity-40 pt-4 px-4">
          {/* Header */}
          <div className="flex  items-center gap-x-4">
            <div className="flex items-center gap-x-2 cursor-pointer ">
              <BiTargetLock className="text-primary w-5 h-5" />
              <p className="whitespace-nowrap self-start text-black text-sm font-normal">
                San Francisco, California
              </p>
              <div className="flex flex-col ">
                <RiArrowUpSLine className="text-xs -mb-0.5" />
                <RiArrowDownSLine className="text-xs -mt-0.5" />
              </div>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer ">
              <FaChartPie className="text-orange w-5 h-5" />
              <p className="text-black text-sm font-normal">Analysis</p>
              <div className="flex flex-col ">
                <RiArrowUpSLine className="text-xs -mb-0.5" />
                <RiArrowDownSLine className="text-xs -mt-0.5" />
              </div>
            </div>
            <div className="flex items-center gap-x-2 cursor-pointer ">
              <RiCalendarTodoFill className="text-yellow w-5 h-5" />
              <p className="text-black text-sm font-normal">Monthly</p>
              <div className="flex flex-col ">
                <RiArrowUpSLine className="text-xs -mb-0.5" />
                <RiArrowDownSLine className="text-xs -mt-0.5" />
              </div>
            </div>
            <div className="flex justify-center items-center rounded-md ml-auto w-1/4 ">
              <button className="bg-transparent text-sm text-black w-3 h-3 -mr-4 relative z-10 cursor pointer">
                <FaSearch className="opacity-60 " />
              </button>
              <input
                type="text"
                placeholder="Search for anything..."
                className="outline-none  w-10/12 hover:w-full focus:w-full transition-all  bg-gray bg-opacity-10 hover:bg-white focus:bg-white pl-8 py-2 rounded-md text-xs  placeholder-gray placeholer-opacity-50"
              />
            </div>
            <button className="bg-primary hover:bg-opacity-80 text-white rounded-md outline-none  text-3xl ">
              <BiFilter className="mx-auto" />
            </button>
            <img src={ImUser} alt="user" className="" />
          </div>
          {/* Channel */}
          <div className="my-6">
            <div className="flex justify-between mb-4">
              <h4 className="text-xl font-bold text-black">Exlpore Channels</h4>
              <a href="/" className="text-primary text-base font-semibold ">
                See all <HiChevronRight className="inline" />
              </a>
            </div>
            <div className="flex gap-x-4">
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex jusitfy-center items-center">
                  <img
                    src={ImChannelFox}
                    alt="Fox news"
                    className="transform scale-90"
                  />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  Fox News
                </p>
              </div>
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={ImChannelCw6}
                    alt="CW6 News"
                    className="w-full object-center "
                  />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  CW6 News
                </p>
              </div>
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img src={ImChannelAbc} alt="Abc news" />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  ABC News
                </p>
              </div>
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img src={ImChannelAl} alt="AL JAZEERA" />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  AL JAZEERA
                </p>
              </div>
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img src={ImChannelBbc} alt="BBC NEWS" />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  BBC NEWS
                </p>
              </div>
              <div className="w-28 h-28 bg-white  rounded-md shadow-lg hover:shadow-xl p-4 cursor-pointer transition-all flex flex-col justify-between items-center">
                <div className="flex-1 flex justify-center items-center">
                  <img src={ImChannelCnn} alt="CNN NEWS" />
                </div>
                <p className="text-black font-semibold uppercase text-xs">
                  CNN NEWS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
