import { useState, useEffect } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import HowItWorks from "./assets/components/HowItWorks";
import Features from "./assets/components/Features";
import Pricing from "./assets/components/Pricing";
import Testimonials from "./assets/components/Testimonials";
import Register from "./assets/components/Register";
import FAQ from "./assets/components/FAQ";
import Footer from "./assets/components/Footer";
import { FaChevronUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "motion/react";
motion;

function App() {
  // Pricing Button Connection To Form Plan DropDown
  const [selectedPlan, setSelectedPlan] = useState("");

  // Go Up Button
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing setSelectedPlan={setSelectedPlan} />
        <Testimonials />
        <Register selectedPlan={selectedPlan} />
        <FAQ />
        <Footer />
      </div>

      {/* Go Up Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed z-50 flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out border border-purple-500 shadow-2xl bottom-4 right-4 rounded-xl bg-slate-950 hover:cursor-pointer group hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 hover:border-purple-700"
          >
            <FaChevronUp
              size={12}
              className="text-purple-500 transition duration-300 ease-in-out group-hover:text-white"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
