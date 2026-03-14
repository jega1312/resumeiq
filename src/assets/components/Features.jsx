import { CgNotes } from "react-icons/cg";
import { FaBullseye } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { LuChartColumn } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
motion;

const features = [
  {
    id: 1,
    icon: <CgNotes size={30} />,
    heading: "ATS Optimization",
    body: "Ensure your resume passes Applicant Tracking Systems with our advanced scanning technology.",
  },
  {
    id: 2,
    icon: <FaBullseye size={30} />,
    heading: "Keyword Analysis",
    body: "Get tailored keyword suggestions based on your target job description and industry.",
  },
  {
    id: 3,
    icon: <BsLightningCharge size={30} />,
    heading: "Instant Feedback",
    body: "Receive real-time suggestions and improvements as you upload your resume.",
  },
  {
    id: 4,
    icon: <BsShieldCheck size={30} />,
    heading: "Privacy First",
    body: "Your data is encrypted and secure. We never share your information with third parties.",
  },
  {
    id: 5,
    icon: <LuChartColumn size={30} />,
    heading: "Score & Metrics",
    body: "Get a detailed score breakdown with metrics on readability, format, and content quality.",
  },
  {
    id: 6,
    icon: <GoLightBulb size={30} />,
    heading: "Expert Tips",
    body: "Access professional writing tips and best practices from industry recruiters.",
  },
];

// Mapped Elements Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Features() {
  // Start Animation When Visible
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  return (
    <section
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 pb-12 flex flex-col gap-14"
      id="features"
    >
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl text-center font-inter text-white font-bold text-balance w-[90%] md:w-full mx-auto"
        >
          Features
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-base md:text-lg font-inter text-center text-white/50 text-balance w-[90%] md:w-full mx-auto"
        >
          Everything you need to create a winning resume
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 w-[80%] 2xl:w-[70%] mx-auto gap-10 items-stretch"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.id}
            variants={itemVariants}
            className="relative flex flex-col gap-5 p-10 bg-slate-950 mx-auto rounded-3xl border border-slate-700 hover:border-purple-500 w-full hover:bg-purple-950/20 transition duration-300 ease-in-out group hover:-translate-y-3 shadow-2xl"
          >
            {/* Icon Box */}
            <div className="p-3 w-fit bg-purple-500 border border-transparent group-hover:border-purple-700 group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:to-blue-600 rounded-xl group-hover:scale-110 transition duration-300 ease-in-out">
              {feature.icon}
            </div>
            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-inter text-white font-bold">
                {feature.heading}
              </h3>
              <p className="text-base font-inter text-white/50">
                {feature.body}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Features;
