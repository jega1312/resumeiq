import { motion } from "motion/react";
import { useEffect, useState } from "react";
motion;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // Animation Toggling
  const [hasOpened, setHasOpened] = useState(false);

  const toggleOpen = () => {
    if (!hasOpened) setHasOpened(true);
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return;

      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <nav
      className={`fixed w-full top-0 flex justify-between flex-wrap items-center py-6 px-8 lg:px-10  z-50 border-b border-transparent transition duration-300 ease-in-out ${scrolled ? "border-b-slate-700/20 bg-[#03001C]/50 backdrop-blur-md" : "bg-linear-to-r from-[#03001C] to-[#1b1042]"} `}
    >
      {/* Logo Container */}
      <motion.a
        className="flex gap-2 items-center hover:cursor-pointer"
        href="#hero"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <span className="text-2xl font-bold font-inter text-white w-full">
          Resume
          <span className="bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
            IQ
          </span>
        </span>
      </motion.a>

      {/* Hamburger Menu */}
      <button
        type="button"
        onClick={toggleOpen}
        className="relative flex items-center lg:hidden flex-col gap-2 h-5 w-8"
      >
        <span
          className={`absolute h-0.75 w-8 bg-white rounded-full transition duration-300 ease-in-out  ${menuOpen ? "rotate-45 top-2" : "top-0"}`}
        ></span>
        <span
          className={`absolute top-2 h-0.75 w-8 bg-white rounded-full transition duration-300 ease-in-out  ${menuOpen ? "opacity-0" : ""}`}
        ></span>
        <span
          className={`absolute h-0.75 w-8 bg-white rounded-full  transition duration-300 ease-in-out ${menuOpen ? "-rotate-45 top-2" : "top-4"}`}
        ></span>
      </button>

      {/* Menu Mobile Dropdown */}
      <div
        className={`h-screen ${menuOpen ? "flex" : "hidden"} lg:hidden w-full flex-col items-start -mt-16 justify-center gap-7 transition duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-start justify-center gap-5 list-none w-full">
          <li>
            <motion.a
              href="#howitworks"
              initial={{ opacity: 0 }}
              animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              onClick={() => setMenuOpen(false)}
              className={`no-underline font-inter font-medium text-3xl relative group transition duration-300 ease-in-out ${activeSection === "howitworks" ? "text-white" : "text-white/75 hover:text-white"}`}
            >
              How It Works
              <span
                className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "howitworks" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
              ></span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#features"
              initial={{ opacity: 0 }}
              animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className={`no-underline font-inter font-medium text-3xl relative group  transition duration-300 ease-in-out ${activeSection === "features" ? "text-white" : "text-white/75 hover:text-white"}`}
            >
              Features
              <span
                className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "features" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
              ></span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#pricing"
              initial={{ opacity: 0 }}
              animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              onClick={() => setMenuOpen(false)}
              className={`no-underline font-inter font-medium text-3xl relative group  transition duration-300 ease-in-out ${activeSection === "pricing" ? "text-white" : "text-white/75 hover:text-white"}`}
            >
              Pricing
              <span
                className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "pricing" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
              ></span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#testimonials"
              initial={{ opacity: 0 }}
              animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
              onClick={() => setMenuOpen(false)}
              className={`no-underline font-inter font-medium text-3xl relative group  transition duration-300 ease-in-out ${activeSection === "testimonials" ? "text-white" : "text-white/75 hover:text-white"}`}
            >
              Testimonials
              <span
                className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "testimonials" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
              ></span>
            </motion.a>
          </li>
          <li>
            <motion.a
              href="#faq"
              initial={{ opacity: 0 }}
              animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
              onClick={() => setMenuOpen(false)}
              className={`no-underline font-inter font-medium text-3xl relative group  transition duration-300 ease-in-out ${activeSection === "faq" ? "text-white" : "text-white/75 hover:text-white"}`}
            >
              FAQ
              <span
                className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "faq" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
              ></span>
            </motion.a>
          </li>
        </ul>

        {/* Register Now Mobile Button */}
        <motion.a
          type="button"
          href="#register"
          initial={{ opacity: 0 }}
          animate={hasOpened ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          onClick={() => setMenuOpen(false)}
          className={`py-2.5 px-4 font-inter font-medium text-white text-lg rounded-sm transition duration-300 ease-in-out relative hover:scale-110 hover:cursor-pointer
          ${
            activeSection === "register"
              ? "bg-linear-to-r from-purple-500 to-blue-600"
              : "bg-purple-500 text-white/90 hover:text-white hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600"
          }`}
        >
          Register Now
        </motion.a>
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex items-center gap-4 list-none">
        <li>
          <motion.a
            href="#howitworks"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            className={`no-underline font-inter font-medium text-lg relative group  transition duration-300 ease-in-out ${activeSection === "howitworks" ? "text-white" : "text-white/75 hover:text-white"}`}
          >
            How It Works
            <span
              className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "howitworks" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
            ></span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
            className={`no-underline font-inter font-medium text-lg relative group  transition duration-300 ease-in-out ${activeSection === "features" ? "text-white" : "text-white/75 hover:text-white"}`}
          >
            Features
            <span
              className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "features" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
            ></span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            className={`no-underline font-inter font-medium text-lg relative group  transition duration-300 ease-in-out ${activeSection === "pricing" ? "text-white" : "text-white/75 hover:text-white"}`}
          >
            Pricing
            <span
              className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "pricing" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
            ></span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#testimonials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
            className={`no-underline font-inter font-medium text-lg relative group  transition duration-300 ease-in-out ${activeSection === "testimonials" ? "text-white" : "text-white/75 hover:text-white"}`}
          >
            Testimonials
            <span
              className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "testimonials" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
            ></span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href="#faq"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
            className={`no-underline font-inter font-medium text-lg relative group  transition duration-300 ease-in-out ${activeSection === "faq" ? "text-white" : "text-white/75 hover:text-white"}`}
          >
            FAQ
            <span
              className={`h-0.5 bg-linear-to-r from-purple-500 to-blue-600 rounded-full block scale-x-0 origin-center group-hover:scale-x-100 transition duration-300 ease-in-out ${activeSection === "faq" ? "scale-x-100" : "scale-x-0 origin-center group-hover:scale-x-100"}`}
            ></span>
          </motion.a>
        </li>
      </ul>

      {/* Register Now Desktop Button */}
      <motion.a
        type="button"
        href="#register"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          delay: 0.3,
          scale: { duration: 0.3 },
        }}
        whileHover={{ scale: 1.1 }}
        className={`hidden lg:block py-2 px-4 font-inter font-medium rounded-sm transition-colors duration-300 relative hover:cursor-pointer ${
          activeSection === "register"
            ? "bg-linear-to-r from-purple-500 to-blue-600 text-white"
            : "bg-purple-500 text-white/90 hover:text-white hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600"
        }`}
      >
        Register Now
      </motion.a>
    </nav>
  );
}

export default Navbar;
