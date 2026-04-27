import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { easeOut, motion, useInView } from "motion/react";
import { useRef } from "react";
motion;

const plans = [
  {
    id: 1,
    name: "Basic",
    price: "Free",
    features: [
      "3 Resume Scans/month",
      "ATS Compatibility Check",
      "Basic Score Report",
      "Grammar & Spell Check",
      "Email Support",
    ],
  },
  {
    id: 2,
    name: "Plus",
    price: "RM39 / mo",
    features: [
      "Unlimited Resume Scans",
      "ATS Compatibility Check",
      "Keyword Optimization",
      "Score & Metrics",
      "Privacy First",
      "Priority Support",
    ],
  },
  {
    id: 3,
    name: "Premium",
    price: "RM99 / mo",
    features: [
      "Everything in Plus",
      "Expert Tips",
      "Cover Letter Analysis",
      "LinkedIn Profile Review",
      "Job Match Score",
      "1-on-1 Expert Review",
      "Dedicated Account Manager",
    ],
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

function Pricing({ setSelectedPlan }) {
  // Start Animation When Visible
  const headingRef = useRef(null);
  const cardsRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  return (
    <section
      id="pricing"
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 pb-0 lg:pb-16 flex flex-col gap-14"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl text-center font-inter text-white font-bold text-balance w-[85%] md:w-full mx-auto"
        >
          Pricing
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-base md:text-lg font-inter text-center text-white/50 text-balance w-[85%] md:w-full mx-auto"
        >
          Choose the plan that fits your goals
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        className="grid grid-cols-1 lg:grid-cols-3 w-[80%] md:w-[40%] lg:w-[80%] 2xl:w-[70%] mx-auto gap-10 items-stretch"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05, ease: easeOut }}
            className="relative flex flex-col justify-between items-center gap-10 p-10 bg-slate-950 mx-auto rounded-3xl border border-slate-700 hover:border-purple-500 w-full hover:bg-purple-950/20 transition-colors duration-300 ease-in-out group shadow-2xl"
          >
            <div className="flex flex-col items-center gap-10">
              <div className="flex flex-col items-center justify-center gap-5">
                {/* Logo Image */}
                <img
                  src="/images/resume-logo.png"
                  alt="Resume Logo"
                  className="h-20 w-auto"
                />
                {/* Plan Title */}
                <h3 className="text-white font-inter font-bold text-xl">
                  {plan.name}
                </h3>
              </div>
              {/* Plan Benefits */}
              <ul className="flex flex-col gap-5 items-start justify-center">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="text-white/75 font-inter text-sm flex items-start gap-2"
                  >
                    <IoCheckmarkCircleOutline
                      size={20}
                      className="text-green-500"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-5 w-full">
              {/* Price */}
              <p className="flex gap-1 text-white font-inter font-bold text-xl">
                {plan.price}
              </p>

              {/* Select */}
              <button
                type="button"
                onClick={() => {
                  setSelectedPlan(plan.name);
                  document
                    .getElementById("register")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="py-2 rounded-full bg-transparent border border-purple-500 text-purple-500 font-inter w-[50%] transition duration-300 ease-in-out hover:cursor-pointer hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 hover:text-white hover:border-purple-700"
              >
                Select
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Pricing;
