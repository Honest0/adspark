"use client";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";

const logos = [
  { title: "globe", image: "/assets/logo1.png" },
  { title: "airasia", image: "/assets/logo2.png" },
  { title: "arena", image: "/assets/logo3.png" },
  { title: "nutriasia", image: "/assets/logo4.png" },
  { title: "sportsplus", image: "/assets/logo5.png" },
  { title: "rc", image: "/assets/logo6.png" },
];

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:justify-center items-start w-screen h-screen overflow-hidden text-white">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-screen object-cover"
      >
        <source src="/assets/Hero.mp4" type="video/mp4" />
      </video>

      <header
        className="absolute top-0 left-0 w-full flex items-center justify-between
        px-6 py-4 sm:px-10 sm:py-6 lg:px-[76px] lg:py-[61px] z-10"
      >
        <div className="flex items-center">
          <img
            src="/assets/HeaderLogo.png"
            alt="AdSpark Logo"
            className="w-[110px] sm:w-[140px] md:w-[171px] object-contain"
          />
        </div>
        <div className="flex items-center">
          <nav className="hidden sm:flex items-center space-x-6 md:space-x-8 text-white mr-3 sm:mr-[40px] text-[12px] sm:text-[14px] md:text-[16px]">
            <a href="#" className="hover:text-gray-300 transition">{`Who We Are`}</a>
            <a href="#" className="hover:text-gray-300 transition">{`The Spark`}</a>
          </nav>
          <button
            className="bg-white text-black text-[12px] sm:text-[14px] px-4 py-2 sm:px-6 sm:py-3 lg:px-[30px] lg:py-[20px] rounded-full font-medium hover:bg-gray-200 transition"
          >
            {`Get In Touch`}
          </button>
        </div>
      </header>
      <div className="relative z-10 w-full h-full flex flex-col justify-center md:justify-start px-6 sm:px-10 lg:px-20 mt-32 sm:mt-40 mt-[100px] mobile:mt-20 lg:mt-48 mt-[20px]">
        <h1 className="font-medium text-[32px] sm:text-[50px] md:text-[60px] lg:text-[90px] leading-tight">
          <AnimatedText text="REACH." delay={0} />
          <br />
          <AnimatedText text="CAPTIVATE." delay={0.6} />
          <br />
          <AnimatedText text="INNOVATE." delay={1.2} />
        </h1>

        <p className="mt-6 text-sm sm:text-base md:text-lg lg:text-[20px] max-w-[90%] lg:max-w-[567px] leading-relaxed">
          <AnimatedText
            text="Leveraging MADTECH (Marketing Advertising Technology)"
            delay={1.8}
            per="word"
          />
          <br />
          <AnimatedText
            text="and data-driven storytelling to build meaningful connections."
            delay={2.2}
            per="word"
          />
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-5">
          <button className="w-full sm:w-[153px] h-[50px] sm:h-[57px] text-[14px] bg-white text-black rounded-full hover:bg-gray-200 transition">
            Spark With Us
          </button>
          <button className="w-full sm:w-[153px] h-[50px] sm:h-[57px] text-[14px] border border-white text-white rounded-full hover:bg-white hover:text-black transition">
            Talk To An Expert
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 w-full overflow-hidden">
        <motion.div
          className="flex items-center space-x-[60px] sm:space-x-[80px]"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="h-[30px] sm:h-[39px] flex-shrink-0">
              <img
                src={logo.image}
                alt={logo.title}
                className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
