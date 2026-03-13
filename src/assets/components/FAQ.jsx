import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const faqs = [
  {
    id: 1,
    question: "How does the AI resume analysis work?",
    answer:
      "Our advanced AI scans your resume for industry-specific keywords, ATS compatibility, formatting issues, and content quality. It compares your resume against thousands of successful resumes in your field to provide personalized recommendations.",
  },
  {
    id: 2,
    question: "Is my data secure and private?",
    answer:
      "Absolutely! Your resume is never shared with third parties, and you can delete your information at any time. We are fully GDPR and CCPA compliant.",
  },
  {
    id: 3,
    question: "What file formats do you support?",
    answer:
      "We support all major resume formats including PDF, DOC, DOCX, and TXT. You can also paste your resume text directly into our analyzer for instant feedback.",
  },
  {
    id: 4,
    question: "How long does the analysis take?",
    answer:
      "Our AI provides instant analysis in under 2 minutes. You'll receive a comprehensive report with actionable insights, keyword suggestions, and formatting recommendations immediately after upload.",
  },
  {
    id: 5,
    question: "Can I analyze multiple resumes?",
    answer:
      "Yes! Our free plan allows 3 resume analyses per month. Premium users get unlimited analyses, plus advanced features like job description matching and interview preparation tips.",
  },
  {
    id: 6,
    question: "Do you offer a money-back guarantee?",
    answer:
      "We offer a 30-day money-back guarantee on all premium plans. If you're not satisfied with our service, contact us within 30 days for a full refund, no questions asked.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section
      id="faq"
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] py-32 flex flex-col gap-14"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-5">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter text-white font-bold text-center text-balance">
          Frequently Asked Questions
        </h2>
        <p className="text-base md:text-lg font-inter text-center text-white/50 text-balance">
          Everything you need to know about ResumeIQ
        </p>
      </div>

      {/* FAQ Section Container */}
      <div className="w-[80%] 2xl:w-[70%] mx-auto flex flex-col gap-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className={`border rounded-xl p-7 bg-slate-950 flex flex-col cursor-pointer transition duration-300 ease-in-out
  ${openId === faq.id ? "border-purple-500" : "border-slate-700"}`}
          >
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg text-white font-inter font-semibold">
                {faq.question}
              </h3>
              <FaChevronDown
                size={20}
                className={`shrink-0 transition duration-300 ease-in-out
      ${openId === faq.id ? "rotate-180 text-purple-500" : "text-white/50"}`}
              />
            </div>

            {/* Answer */}
            <div className={`faq-answer ${openId === faq.id ? "open" : ""}`}>
              <div>
                <p className="text-base text-slate-400 font-inter pt-3">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
