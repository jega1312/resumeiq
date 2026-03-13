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
    <section
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 pb-0 lg:pb-16 flex flex-col gap-14"
      id="howitworks"
    >
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl  font-inter text-white font-bold text-balance">
          How It Works
        </h2>
        <p className="text-base md:text-lg font-inter text-center text-white/50 text-balance">
          Get professional resume insights in three simple steps
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-[80%] 2xl:w-[70%] mx-auto gap-10 items-stretch">
        {processes.map((process) => (
          <div
            key={process.id}
            className="relative flex flex-col gap-5 p-10 bg-slate-950 mx-auto rounded-3xl border border-slate-700 hover:border-purple-500 w-full hover:bg-purple-950/20 transition duration-300 ease-in-out group shadow-2xl"
          >
            {/* Numbering */}
            <div className="absolute right-6 top-5 text-7xl font-inter text-white/10 font-bold group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
              {process.numbering}
            </div>
            {/* Icon Box */}
            <div className="p-3 w-fit bg-purple-500 border border-transparent group-hover:border-purple-700 rounded-full group-hover:scale-110 transition duration-300 ease-in-out group-hover:bg-linear-to-r group-hover:from-purple-500 group-hover:to-blue-600">
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
