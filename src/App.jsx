import { useState } from "react";
import Navbar from "./assets/components/Navbar";
import Hero from "./assets/components/Hero";
import HowItWorks from "./assets/components/HowItWorks";
import Features from "./assets/components/Features";
import Pricing from "./assets/components/Pricing";
import Testimonials from "./assets/components/Testimonials";
import Register from "./assets/components/Register";
import FAQ from "./assets/components/FAQ";

function App() {
  const [selectedPlan, setSelectedPlan] = useState("");
  return (
    <div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing setSelectedPlan={setSelectedPlan} />
      <Testimonials />
      <Register selectedPlan={selectedPlan} />
      <FAQ />
    </div>
  );
}

export default App;
