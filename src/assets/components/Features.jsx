import { CgNotes } from "react-icons/cg";
import { FaBullseye } from "react-icons/fa6";
import { BsLightningCharge } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { LuChartColumn } from "react-icons/lu";
import { GoLightBulb } from "react-icons/go";

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

function Features() {
  return (
    <section className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 flex flex-col gap-14" id="features">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter text-white font-bold">
          Features
        </h2>
        <p className="text-base md:text-lg font-inter text-center text-white/50 w-[90%] sm:w-full">
          Everything you need to create a winning resume
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] 2xl:w-[70%] mx-auto gap-10 items-stretch">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative flex flex-col gap-5 p-10 bg-slate-950 mx-auto rounded-3xl border border-purple-500 hover:border-white w-full hover:bg-purple-950/20 transition duration-300 ease-in-out group hover:-translate-y-3"
          >
            {/* Icon Box */}
            <div className="p-3 w-fit bg-purple-500 border border-transparent group-hover:border-white rounded-xl group-hover:scale-110 transition duration-300 ease-in-out">
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
