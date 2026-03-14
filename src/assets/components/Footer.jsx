import { SlSocialLinkedin, SlEnvolope } from "react-icons/sl";
import { FiGithub } from "react-icons/fi";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
motion;

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

const socialLinks = [
  {
    id: 1,
    href: "https://github.com/jega1312",
    icon: <FiGithub size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/jegathiswaran-thiaghu/",
    icon: <SlSocialLinkedin size={20} />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: 3,
    href: "mailto:jegathiaghu@gmail.com?subject=Hello%20from%20ResumeIQ",
    icon: <SlEnvolope size={20} />,
  },
];

// Mapped Elements Animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const socialContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const socialItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function Footer() {
  // Start Animation When Visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

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
              <motion.span
                ref={ref}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="text-2xl font-bold font-inter text-white w-full"
              >
                Resume
                <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
                  IQ
                </span>
              </motion.span>
            </a>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-xs text-slate-400 font-inter text-balance"
            >
              Transform your resume with AI-powered insights and land your dream
              job faster.
            </motion.p>
          </div>
          {/* Product Links Container */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-inter font-bold text-lg text-white"
            >
              Product
            </motion.h3>
            <motion.ul className="flex flex-col items-start gap-2">
              {productLinks.map((products) => (
                <motion.li
                  key={products.id}
                  variants={itemVariants}
                  className="group"
                >
                  <a
                    href={products.href}
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {products.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company Links Container */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-inter font-bold text-lg text-white"
            >
              Company
            </motion.h3>
            <motion.ul className="flex flex-col items-start gap-2">
              {companyLinks.map((company) => (
                <motion.li
                  key={company.id}
                  variants={itemVariants}
                  className="group"
                >
                  <a
                    href="#"
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {company.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Legal Links Container */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-3"
          >
            <motion.h3
              ref={ref}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="font-inter font-bold text-lg text-white"
            >
              Legal
            </motion.h3>
            <motion.ul className="flex flex-col items-start gap-2">
              {legalLinks.map((legal) => (
                <motion.li
                  key={legal.id}
                  variants={itemVariants}
                  className="group"
                >
                  <a
                    href="#"
                    className="text-sm text-slate-400 font-inter hover:text-white transition duration-300 ease-in-out"
                  >
                    {legal.label}
                  </a>
                  <span className="h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out"></span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
        {/* Footer Below */}
        <div className="w-full border-t border-slate-700 flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between items-center py-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-sm text-slate-400 font-inter"
          >
            © 2026 ResumeIQ. All rights reserved.
          </motion.p>
          {/* Social Buttons */}
          <motion.div
            ref={ref}
            variants={socialContainerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex gap-5"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target={social.target}
                rel={social.rel}
                variants={socialItemVariants}
                className="bg-slate-950 hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 border border-slate-700 p-3 rounded-lg group hover:border-purple-700 flex justify-center items-center transition duration-300 ease-in-out"
              >
                <span className="text-slate-400 group-hover:text-white transition duration-300 ease-in-out">
                  {social.icon}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
