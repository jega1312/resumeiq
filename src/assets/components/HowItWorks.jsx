import { FiUpload } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

const processes = [
  {
    id: 1,
    numbering: "01",
    icon: <FiUpload size={30} />,
    heading: "Upload Your Resume",
    body: "Simply drag and drop your resume or paste your text. We support all major formats including PDF, DOC, and TXT.",
  },
  {
    id: 2,
    numbering: "02",
    icon: <BsStars size={30} />,
    heading: "AI Analysis",
    body: "Our advanced AI scans your resume for ATS compatibility, keyword optimization, and industry best practices.",
  },
  {
    id: 3,
    numbering: "03",
    icon: <FiDownload size={30} />,
    heading: "Get Insights",
    body: "Receive a detailed report with actionable recommendations to improve your resume and increase interview chances.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 flex flex-col gap-14" id="howitworks">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter text-white font-bold">
          How It Works
        </h2>
        <p className="text-base md:text-lg font-inter text-center text-white/50 w-[90%] sm:w-full">
          Get professional resume insights in three simple steps
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] 2xl:w-[70%] mx-auto gap-10">
        {processes.map((process) => (
          <div
            key={process.id}
            className="relative flex flex-col gap-5 p-10 bg-slate-950 mx-auto rounded-3xl border border-purple-500 hover:border-white w-full hover:bg-purple-950/20 transition duration-300 ease-in-out group"
          >
            {/* Numbering */}
            <div className="absolute right-6 top-5 text-7xl font-inter text-white/10 font-bold">
              {process.numbering}
            </div>
            {/* Icon Box */}
            <div className="p-3 w-fit bg-purple-500 border border-transparent group-hover:border-white rounded-full group-hover:scale-110 transition duration-300 ease-in-out">
              {process.icon}
            </div>
            {/* Content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-inter text-white font-bold">
                {process.heading}
              </h3>
              <p className="text-base font-inter text-white/50">
                {process.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
