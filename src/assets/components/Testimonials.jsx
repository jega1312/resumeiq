import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { LuQuote } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
motion;

const testimonials = [
  {
    id: 1,
    name: "Michelle Chen",
    role: "Senior Software Engineer at Google",
    review:
      '"ResumeIQ helped me optimize my resume and I got 3 interview calls within a week!"',
    stars: 5,
  },
  {
    id: 2,
    name: "Luke Cage",
    role: "Product Manager at Microsoft",
    review:
      '"The ATS optimization feature is incredible. My resume now passes through screening systems with ease. Highly recommend!"',
    stars: 5,
  },
  {
    id: 3,
    name: "Vikram Patel",
    role: "Marketing Director at Amazon",
    review:
      '"I landed my dream job thanks to ResumeIQ. The personalized recommendations transformed my resume completely."',
    stars: 5,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Data Analyst at Meta",
    review:
      '"I was struggling to get callbacks until I used ResumeIQ. The keyword suggestions alone doubled my response rate!"',
    stars: 5,
  },
  {
    id: 5,
    name: "James Carter",
    role: "UX Designer at Apple",
    review:
      '"The detailed score breakdown showed me exactly what was holding my resume back. Got my dream job within a month!"',
    stars: 5,
  },
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function NavButtons() {
  const swiper = useSwiper();

  return (
    <div className="relative flex justify-center items-center gap-4 pt-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-[#020618] border size-12 flex justify-center items-center border-purple-500 text-purple-500 rounded-full transition duration-300 ease-in-out hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 hover:border-purple-700 hover:text-white hover:cursor-pointer shadow-2xl"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-[#020618] border size-12 flex justify-center items-center border-purple-500 text-purple-500 rounded-full transition duration-300 ease-in-out hover:bg-linear-to-r hover:from-purple-500 hover:to-blue-600 hover:border-purple-700 hover:text-white hover:cursor-pointer shadow-2xl"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

function Testimonials() {
  const [users, setUsers] = useState([]);

  // Start Animation When Visible
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const swiperRef = useRef(null);

  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.3 });

  // API for Users Profile Picture
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5&seed=resumeiq")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  // Autoplay starts on Visible
  useEffect(() => {
    if (!swiperRef.current) return;

    if (cardsInView) {
      swiperRef.current.autoplay.start();
    } else {
      swiperRef.current.autoplay.stop();
    }
  }, [cardsInView]);

  return (
    <section
      id="testimonials"
      className="bg-linear-to-r from-[#03001C] to-[#1b1042] pt-32 pb-0 lg:pb-16 flex flex-col gap-14"
    >
      <div className="flex flex-col justify-center items-center gap-5">
        <motion.h2
          ref={headingRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl text-center font-inter text-white font-bold text-balance w-[85%] md:w-full mx-auto"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-base md:text-lg font-inter text-center text-white/50 text-balance w-[85%] md:w-full mx-auto"
        >
          Thousands of careers transformed and counting
        </motion.p>
      </div>

      {/* Swiper */}
      <motion.div
        ref={cardsRef}
        variants={containerVariants}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
      >
        <Swiper
          speed={800}
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={false}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
        >
          <NavButtons />
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                variants={itemVariants}
                className="relative flex flex-col lg:flex-row items-center justify-center gap-5 mx-auto w-[80%] lg:w-[60%] bg-slate-950 rounded-3xl border border-purple-500 p-14 shadow-2xl h-full"
              >
                {/* Quotation Icon */}
                <div className="absolute right-10 top-6 text-purple-500/10">
                  <LuQuote size={70} />
                </div>
                {/* Image Container */}
                <img
                  src={users[index]?.picture.large}
                  alt="Profile Picture"
                  className="rounded-full border-3 border-purple-500 size-24"
                />
                {/* Content Container */}
                <div className="flex flex-col items-center lg:items-start gap-5">
                  <div className="flex flex-col items-center lg:items-start gap-3">
                    {/* Stars Container */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: testimonial.stars }).map(
                        (_, starIndex) => (
                          <FaStar
                            key={starIndex}
                            size={18}
                            className="text-yellow-400"
                          />
                        ),
                      )}
                    </div>

                    {/* Testimonial */}
                    <p className="font-inter text-center lg:text-start text-white/75 text-base md:text-lg">
                      {testimonial.review}
                    </p>
                  </div>
                  {/* Name Container */}
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="font-inter text-white font-semibold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="font-inter text-center lg:text-start text-white/75 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export default Testimonials;
