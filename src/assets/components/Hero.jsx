import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <IoCheckmarkCircle size={40} className="text-green-500" />,
    stat: "98%",
    label: "Success Rate",
    border: "lg:border-r border-purple-500 border-b lg:border-b-0",
  },
  {
    id: 2,
    icon: <MdPeopleAlt size={40} className="text-blue-500" />,
    stat: "50K+",
    label: "Active Users",
    border: "",
  },
  {
    id: 3,
    icon: <MdAutoGraph size={40} className="text-yellow-500" />,
    stat: "3x",
    label: "More Interviews",
    border: "lg:border-l border-purple-500 border-t lg:border-t-0",
  },
];

function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative bg-linear-to-r from-[#03001C] to-[#1b1042] min-h-screen flex justify-center items-center"
      >
        {/* Orb Glow Container */}
        <div className=" flex w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[375px] md:h-[375px] xl:w-[450px] xl:h-[450px] justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin-slow"></div>
          <div className="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute rotate-90 animate-spin-medium"></div>
          <div className="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute rotate-180 animate-spin-fast"></div>
        </div>

        <div className="flex flex-col justify-center items-center gap-5 xl:gap-7 z-30">
          <span className="bg-purple-950/75 border-[#47227b] border-2 py-2 rounded-full text-white text-xs md:text-sm  font-inter font-normal flex justify-center items-center px-5 md:px-0 md:w-[35%] lg:w-[27%] mx-auto gap-2">
            <BsGraphUpArrow size={20} />
            50,000+ Resumes Optimized
          </span>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white font-inter font-bold md:leading-20">
            Transform Your Resume With <br />
            <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              AI Intelligence
            </span>
          </h1>

          <p className="text-sm sm:text-lg lg:text-xl text-center text-white/70 font-inter mx-auto w-[70%] md:w-[60%] lg:w-[50%]">
            Get personalized insights, ATS optimization & expert recommendations
            to land your dream job faster.
          </p>

          {/* Get Started Desktop Button */}
          <button
            type="button"
            className="py-2 px-5 sm:px-0 text-sm sm:text-base sm:w-[20%] lg:w-[15%] bg-purple-500 font-inter font-medium text-white/90 hover:text-white rounded-sm hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 transition duration-300 ease-in-out relative hover:scale-110 hover:cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </section>

      <div className="bg-linear-to-r from-[#03001C] to-[#1b1042]">
        <div className="bg-slate-950 border-purple-500 border grid grid-cols-1 lg:grid-cols-3 mx-auto w-[70%] rounded-lg shadow-2xl">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`py-5 flex flex-col justify-center items-center ${stat.border}`}
            >
              {stat.icon}
              <p className="text-lg md:text-xl font-inter font-semibold text-white">
                {stat.stat}
              </p>
              <p className="text-base font-inter font-normal text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
