import { BsGraphUpArrow } from "react-icons/bs";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdPeopleAlt } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
motion;

const stats = [
  {
    id: 1,
    icon: <IoCheckmarkCircle size={40} className="text-green-500" />,
    stat: "98%",
    label: "Success Rate",
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
  },
];

// Mapped Elements Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Hero() {
  // Start Animation When Visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <>
      <section
        id="hero"
        className="relative bg-linear-to-r from-[#03001C] to-[#1b1042] min-h-screen flex justify-center items-center lg:pt-24"
      >
        {/* Orb Glow Container */}
        <div className="lg:pt-24 flex w-[50vw] h-[50vw] sm:max-w-[250px] sm:max-h-[250px] md:max-w-[300px] md:max-h-[300px] lg:max-w-[330px] lg:max-h-[330px] xl:max-w-[350px] xl:max-h-[350px] 2xl:max-w-[450px] 2xl:max-h-[450px] min-w-[250px] min-h-[250px] justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-[110%] h-[110%] shadow-xl shadow-pink-500 bg-transparent rounded-full absolute animate-spin-slow"></div>
          <div className="w-[108%] h-[108%] shadow-xl shadow-violet-500 bg-transparent rounded-full absolute rotate-90 animate-spin-medium"></div>
          <div className="w-[106%] h-[106%] shadow-xl shadow-cyan-500 bg-transparent rounded-full absolute rotate-180 animate-spin-fast"></div>
        </div>

        <div className="z-30 flex flex-col items-center justify-center gap-5 xl:gap-7">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-purple-950/75 border-[#47227b] border-2 py-2 rounded-full text-white text-xs md:text-sm font-inter flex justify-center items-center px-5 md:px-0 md:w-[35%] lg:w-[27%] mx-auto gap-2  hover:bg-purple-900 hover:border-transparent transition duration-300 ease-in-out"
          >
            <BsGraphUpArrow size={20} />
            50,000+ Resumes Optimized
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-2xl font-bold text-center text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-inter md:leading-20"
          >
            Transform Your Resume With <br />
            <span className="text-4xl text-transparent bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              AI Intelligence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="text-sm sm:text-lg lg:text-xl text-center text-white/70 font-inter mx-auto w-[70%] md:w-[60%] lg:w-[50%]"
          >
            Get personalized insights, ATS optimization & expert recommendations
            to land your dream job faster.
          </motion.p>

          {/* Get Started Desktop Button */}
          <motion.a
            type="button"
            href="#register"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="py-2 px-5 text-center sm:px-0 text-sm sm:text-base sm:w-[20%] lg:w-[15%] bg-purple-500 font-inter font-medium text-white/90 hover:text-white rounded-sm hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 transition duration-300 ease-in-out relative hover:scale-110 hover:cursor-pointer"
          >
            Get Started
          </motion.a>
        </div>
      </section>

      <div className="bg-linear-to-r from-[#03001C] to-[#1b1042]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className=" grid grid-cols-1 md:grid-cols-3 mx-auto w-[70%] rounded-lg"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`py-5 flex flex-col justify-center items-center ${stat.border}`}
            >
              {stat.icon}
              <p className="text-lg font-semibold text-white md:text-xl font-inter">
                {stat.stat}
              </p>
              <p className="text-base text-white font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}

export default Hero;
