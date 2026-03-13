import { SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";

const productLinks = [
  { id: 1, label: "How it Works", href: "#howitworks" },
  { id: 2, label: "Features", href: "#features" },
  { id: 3, label: "Pricing", href: "#pricing" },
  { id: 4, label: "Testimonials", href: "#testimonials" },
  { id: 5, label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { id: 1, label: "About" },
  { id: 2, label: "Blog" },
  { id: 3, label: "Careers" },
  { id: 4, label: "Contact" },
];

const legalLinks = [
  { id: 1, label: "Privacy" },
  { id: 2, label: "Terms" },
  { id: 3, label: "Security" },
  { id: 4, label: "Cookies" },
];

function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-linear-to-r from-[#03001C] to-[#1b1042] flex flex-col gap-10 items-center">
      <div className="w-[80%] mx-auto py-3">
        {/* Link Container */}
        <div className="grid grid-cols-1 gap-7 lg:gap-0 lg:grid-cols-4 place-items-start py-10">
          {/* Logo Container */}
          <div className="flex flex-col gap-3 items-start">
            <a
              className="flex gap-2 items-center hover:cursor-pointer"
              href="#hero"
            >
              <span className="text-2xl font-bold font-inter text-white w-full">
                Resume
                <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                  IQ
                </span>
              </span>
            </a>
            <p className="text-xs text-slate-400 font-inter text-balance">
              Transform your resume with AI-powered insights and land your dream
              job faster.
            </p>
          </div>
          {/* Product Links Container */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-inter font-bold text-lg text-white">Product</h3>
            <ul className="flex flex-col items-start gap-2">
              {productLinks.map((products) => (
                <li key={products.id} className="group">
                  <a
                    href={products.href}
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {products.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>
          {/* Company Links Container */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-inter font-bold text-lg text-white">Company</h3>
            <ul className="flex flex-col items-start gap-2">
              {companyLinks.map((company) => (
                <li key={company.id} className="group">
                  <a
                    href="#"
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {company.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>
          {/* Legal Links Container */}
          <div className="flex flex-col items-start gap-3">
            <h3 className="font-inter font-bold text-lg text-white">Legal</h3>
            <ul className="flex flex-col items-start gap-2">
              {legalLinks.map((legal) => (
                <li key={legal.id} className="group">
                  <a
                    href="#"
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {legal.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Footer Below */}
        <div className="w-full border-t border-slate-700 flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center py-10">
          <p className="text-sm text-slate-400 font-inter">
            © 2026 ResumeIQ. All rights reserved.
          </p>
          {/* Social Buttons */}
          <div className="flex gap-5">
            <a
              href="https://github.com/jega1312"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 border border-slate-700 p-3 rounded-lg group hover:border-purple-700 flex justify-center items-center transition duration-300 ease-in-out"
            >
              <FiGithub
                size={20}
                className="text-slate-400 group-hover:text-white transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/jegathiswaran-thiaghu/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-950 hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 border border-slate-700 p-3 rounded-lg group hover:border-purple-700 flex justify-center items-center transition duration-300 ease-in-out"
            >
              <SlSocialLinkedin
                size={20}
                className="text-slate-400 group-hover:text-white transition duration-300 ease-in-out"
              />
            </a>
            <a
              href="mailto:jegathiaghu@gmail.com?subject=Hello%20from%20ResumeIQ"
              className="bg-slate-950 hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 border border-slate-700 p-3 rounded-lg group hover:border-purple-700 flex justify-center items-center transition duration-300 ease-in-out"
            >
              <SlEnvolope
                size={20}
                className="text-slate-400 group-hover:text-white transition duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
