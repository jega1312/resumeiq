import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { motion, useInView } from "motion/react";
motion;

const benefits = [
  "Instant AI Resume Score",
  "ATS Compatibility Check",
  "Smart Keyword Gap Analysis",
  "Step-by-Step Improvement Plan",
  "Job Match Recommendations",
  "Cancel or Upgrade Anytime",
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
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Register({ selectedPlan }) {
  const plans = ["Basic", "Plus", "Premium"];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);

  const nameValue = watch("name") || "";
  const emailValue = watch("email") || "";

  // Local state to track dropdown visually
  const [currentPlan, setCurrentPlan] = useState("");

  useEffect(() => {
    if (selectedPlan) {
      setTimeout(() => setCurrentPlan(selectedPlan), 0);
      setValue("plan", selectedPlan);
      clearErrors("plan");
    }
  }, [selectedPlan, setValue, clearErrors]);

  const [checked, setChecked] = useState(false);
  const [termsError, setTermsError] = useState("");

  // Phone State
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [hasInput, setHasInput] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Start Animation When Visible
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section
      id="register"
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 pb-0 lg:pb-16 flex flex-col gap-14"
    >
      {/* Heading */}
      <div className="flex flex-col items-center justify-center gap-5">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-inter text-white font-bold text-center text-balance w-[85%] md:w-full mx-auto"
        >
          Optimize Your Resume Today
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-base md:text-lg font-inter text-center text-white/50 text-balance w-[85%] md:w-full mx-auto"
        >
          Take the first step toward your dream career
        </motion.p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:justify-center place-items-center w-full md:w-[90%] max-w-6xl mx-auto gap-10 overflow-hidden">
        {/* Form Container */}
        <div className="flex items-center justify-center w-full p-10">
          {/* Registration Form */}
          {isSubmitted ? (
            <div className="py-10 px-5 sm:px-10 flex flex-col items-center justify-center bg-slate-950 border-purple-500 border rounded-2xl w-full gap-5 min-h-[400px]">
              <IoCheckmarkCircle size={60} className="text-green-500" />
              <h3 className="text-2xl font-bold text-center text-white font-inter">
                You're on the list! 🎉
              </h3>
              <p className="text-base text-center font-inter text-white/50">
                Thanks for registering. We'll notify you when ResumeIQ launches!
              </p>
            </div>
          ) : (
            <motion.form
              variants={formVariants}
              initial="hidden"
              animate={headingInView ? "visible" : "hidden"}
              onSubmit={handleSubmit(
                (data) => {
                  if (!phone || phone.length < 8) {
                    setPhoneError("Enter a valid phone number");
                    return;
                  }

                  if (!checked) {
                    setTermsError("You must agree to the Terms & Conditions");
                    return;
                  }
                  setIsSubmitted(true);

                  console.log({ ...data, phone });
                },
                () => {
                  if (!phone || phone.length < 8) {
                    setPhoneError("Enter a valid phone number");
                  }

                  if (!checked) {
                    setTermsError("You must agree to the Terms & Conditions");
                  }
                },
              )}
              className="flex flex-col items-start w-full gap-8 px-5 py-10 border border-purple-500 sm:px-10 bg-slate-950 rounded-2xl"
            >
              {/* Name Input */}
              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  placeholder=" "
                  onFocus={() => setNameFocused(true)}
                  {...register("name", {
                    required: "Full name is required",
                    minLength: {
                      value: 3,
                      message: "Name must be at least 3 characters",
                    },
                    onBlur: () => setNameFocused(false),
                  })}
                  className={`h-12 w-full rounded-lg border  bg-transparent px-3 py-5 text-white outline-none  transition duration-300 ease-in-out ${
                    errors.name
                      ? "border-red-500 focus:border-red-500 caret-red-500"
                      : "border-slate-700 focus:border-purple-500 caret-purple-500"
                  }`}
                />
                <label
                  htmlFor="name"
                  className={`font-inter absolute left-3 transition-all duration-300 pointer-events-none text-xs
                ${
                  nameFocused || nameValue || errors.name
                    ? "-top-2 bg-slate-950 px-1"
                    : "top-1/2 -translate-y-1/2 sm:text-sm"
                }
                ${errors.name ? "text-red-500" : nameFocused || nameValue ? "text-purple-500" : "text-white/50"}`}
                >
                  Full Name
                </label>
                {errors.name && (
                  <p className="mt-2 text-xs text-red-500 font-inter">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  placeholder=" "
                  onFocus={() => setEmailFocused(true)}
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                    onBlur: () => setEmailFocused(false),
                  })}
                  className={`h-12 w-full rounded-lg border  bg-transparent px-3 py-5 text-white outline-none  transition duration-300 ease-in-out ${
                    errors.email
                      ? "border-red-500 focus:border-red-500 caret-red-500"
                      : "border-slate-700 focus:border-purple-500 caret-purple-500"
                  }`}
                />
                <label
                  htmlFor="email"
                  className={`font-inter absolute left-3 transition-all duration-300 pointer-events-none text-xs
                ${
                  emailFocused || emailValue || errors.email
                    ? "-top-2 bg-slate-950 px-1"
                    : "top-1/2 -translate-y-1/2 sm:text-sm"
                }
                ${errors.email ? "text-red-500" : emailFocused || emailValue ? "text-purple-500" : "text-white/50"}`}
                >
                  Email Address
                </label>
                {errors.email && (
                  <p className="mt-2 text-xs text-red-500 font-inter">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Number Input */}
              <div
                className={`relative w-full ${phoneError ? "phone-error" : ""}`}
              >
                <PhoneInput
                  defaultCountry="my"
                  value={phone}
                  onChange={(phone, meta) => {
                    setPhone(phone);

                    const hasTyped = phone !== `+${meta.country.dialCode}`;
                    setHasInput(hasTyped);

                    if (!hasTyped) {
                      setPhoneError("");
                      return;
                    }

                    if (phone.length < 8) {
                      setPhoneError("Enter a valid phone number");
                    } else {
                      setPhoneError("");
                    }
                  }}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => {
                    setIsFocused(false);
                    if (hasInput && phone.length < 8) {
                      setPhoneError("Enter a valid phone number");
                    }
                  }}
                />
                <label
                  style={{ background: "#020617" }}
                  className={`font-inter absolute z-10 transition-all duration-300 pointer-events-none
                ${
                  isFocused || hasInput || phoneError
                    ? "-top-2 left-3 text-xs px-1"
                    : "left-14 top-1/2 -translate-y-1/2 text-white/50 text-xs sm:text-sm"
                }  ${phoneError ? "text-red-500" : isFocused || hasInput ? "text-purple-500" : "text-white/50"}`}
                >
                  Phone Number
                </label>
                {phoneError && (
                  <p className="mt-2 text-xs text-red-500 font-inter">
                    {phoneError}
                  </p>
                )}
              </div>

              <div className="w-full">
                <select
                  id="plan"
                  value={currentPlan}
                  {...register("plan", { required: "Please select a plan" })}
                  onChange={(e) => {
                    setCurrentPlan(e.target.value);
                    setValue("plan", e.target.value);
                    clearErrors("plan");
                  }}
                  className={`h-12 w-full rounded-lg border bg-transparent p-3 text-white font-inter text-xs sm:text-sm outline-none transition duration-300 ease-in-out
                ${
                  errors.plan
                    ? "border-red-500 focus:border-red-500"
                    : "border-slate-700 focus:border-purple-500"
                }`}
                >
                  <option
                    value=""
                    disabled
                    style={{
                      background: "#020618",
                      color: "white",
                    }}
                  >
                    Select a Plan
                  </option>
                  {plans.map((plan) => (
                    <option
                      key={plan}
                      value={plan}
                      style={{ background: "#020618", color: "white" }}
                    >
                      {plan}
                    </option>
                  ))}
                </select>
                {errors.plan && (
                  <p className="mt-2 text-xs text-red-500 font-inter">
                    {errors.plan.message}
                  </p>
                )}
              </div>

              {/* Terms & Conditions */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <div
                    onClick={() => {
                      setChecked(!checked);
                      setTermsError("");
                    }}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer transition duration-300 ease-in-out ${
                      checked
                        ? "bg-purple-500 border-purple-500 checkbox-checked"
                        : termsError
                          ? "border-red-500 checkbox-unchecked"
                          : "border-slate-700 checkbox-unchecked"
                    }`}
                  >
                    {checked && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>

                  <label
                    htmlFor="terms"
                    className="flex gap-1 text-sm text-white font-inter"
                  >
                    I agree to the
                    <span className="text-purple-500 transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-purple-500">
                      Terms & Conditions
                    </span>
                  </label>
                </div>

                {/* Error below */}
                {termsError && (
                  <p className="mt-1 text-xs text-red-500 font-inter">
                    {termsError}
                  </p>
                )}
              </div>

              {/* Register Button */}

              <button
                type="submit"
                className="w-full h-12 text-sm transition duration-300 ease-in-out bg-purple-500 rounded-full sm:text-base font-inter text-white/75 hover:text-white hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 hover:cursor-pointer"
              >
                Get Early Access
              </button>
            </motion.form>
          )}
        </div>

        {/* What You'll Get Container */}
        <div className="flex flex-col items-start gap-10">
          <motion.h3
            initial={{ opacity: 0, x: 40 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="text-3xl font-bold text-center text-transparent md:text-4xl lg:text-5xl font-inter text-balance bg-linear-to-r from-purple-500 to-blue-600 bg-clip-text"
          >
            What You'll Get
          </motion.h3>

          {/* Benefits */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="flex flex-col items-start gap-5"
          >
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                className="flex items-center gap-3 text-base text-white font-inter md:text-lg"
              >
                <IoCheckmarkCircle size={20} className="text-purple-500" />
                {benefit}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Register;
