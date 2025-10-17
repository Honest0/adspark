"use client";
import { useState } from "react";

export default function Ecosystem() {
  const [active, setActive] = useState(false);

  return (
    <section
      className="
        relative w-full text-white text-center overflow-hidden
        h-[600px] sm:h-[650px] md:h-[700px] lg:h-[726px]
      "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/Eco.mp4" type="video/mp4" />
      </video>

      <div className="absolute hidden md:block right-[-40px] z-0">
        <img src="/assets/Ellipse 9.png" alt="Ellipse 9" />
      </div>
      <div className="absolute hidden md:block right-[-10px] z-0">
        <img src="/assets/Ellipse 8.png" alt="Ellipse 8" />
      </div>
      <div className="absolute hidden md:block mt-[58.24px] right-0 z-0">
        <img src="/assets/Ellipse 7.png" alt="Ellipse 7" />
      </div>

      {/* ✨ Floating Logos (Visible when active) */}
      <div
        className={`absolute transition-all duration-700 ease-in-out 
          ${active ? "opacity-100 translate-x-[8px] md:translate-x-[-30px]" : "opacity-0 translate-x-[60px] md:translate-x-[40px]"}
          w-[180px] sm:w-[150px] md:w-[150px] lg:w-[276px]
          top-[400px] w-[140px] sm:top-[300px] md:top-[330px] lg:top-[337px]
          right-[180px] sm:right-[250px] md:right-[220px] lg:right-[431.75px]
        `}
      >
        <img src="/assets/AdsparkLogo.png" alt="AdsparkLogo" className="w-full h-auto" />
      </div>

      <div
        className={`absolute transition-all duration-700 ease-in-out 
          ${active ? "opacity-100 translate-x-[8px] md:translate-x-[-30px]" : "opacity-0 translate-x-[60px] md:translate-x-[40px]"}
          w-[150px] sm:w-[150px] md:w-[150px] lg:w-[226px]
          top-[320px] w-[135px] sm:top-[150px] md:top-[160px] lg:top-[160.26px]
          right-[80px] sm:right-[100px] md:right-[120px] lg:right-[123.94px]
        `}
      >
        <img src="/assets/Brave.png" alt="Brave" />
      </div>

      <div
        className={`absolute transition-all duration-700 ease-in-out 
          ${active ? "opacity-100 translate-x-[8px] md:translate-x-[-30px]" : "opacity-0 translate-x-[60px] md:translate-x-[40px]"}
          w-[150px] sm:w-[140px] md:w-[130px] lg:w-[201.25px]
          top-[520px] w-[110px] sm:top-[480px] md:top-[500px] lg:top-[517.49px]
          right-[90px] sm:right-[110px] md:right-[130px] lg:right-[143.35px]
        `}
      >
        <img src="/assets/917V.png" alt="Venture" />
      </div>

      <div
        className="
          absolute right-[30px] sm:right-[40px] md:right-[50px] lg:right-[50.75px]
          top-[400px] sm:top-[260px] md:top-[277px]
          flex flex-col items-center z-10
        "
      >
        {/* Interactive Ball */}
        <img
          src="/assets/Ball.png"
          alt="Ball"
          className={`
            w-[70px] sm:w-[90px] md:w-[100px] lg:w-[109px]
            h-[70px] sm:h-[90px] md:h-[100px] lg:h-[109px]
            cursor-pointer transition-transform duration-700 ease-in-out
            ${active ? "scale-[1.3] -translate-x-[0px] md:-translate-x-[40px]" : "scale-100 translate-x-0"}
          `}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          onClick={() => setActive(!active)} // for mobile tap
        />

        {/* Moving Globe */}
        <img
          src="/assets/Globe.png"
          alt="Globe"
          className={`mt-[15px] sm:mt-[18px] md:mt-[20px] lg:mt-[21.75px] transition-all duration-700 ease-in-out 
            ${active ? "-translate-y-[100px] opacity-0" : "translate-y-0 opacity-100"}
          `}
        />
      </div>

      {/* 📝 Text Content */}
      <div
        className="
          relative z-10 text-left mx-auto ml-[30px] lg:ml-[76px]
          px-6 sm:px-10 md:px-12 lg:px-0 mt-[20px] mt-[30px]
          sm:mt-[50px] md:mt-[164.67px] lg:mt-[188.52px]
          max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:w-[35%]
        "
      >
        <h2
          className="
            text-[36px] sm:text-[50px] md:text-[65px] lg:text-[80px]
            leading-[40px] sm:leading-[55px] md:leading-[70px] lg:leading-[80px]
            tracking-normal
          "
        >
          Ecosystem Advantage
        </h2>
        <p
          className="
            mt-[16px] sm:mt-[18px] md:mt-[19.8px]
            text-[14px] sm:text-[15px] md:text-[16px]
            leading-[22px] sm:leading-[24px] md:leading-[26px]
            text-[#FFFFFF] max-w-[95%] sm:max-w-[80%] md:max-w-[430px]
          "
        >
          Our integration within the Globe Group ecosystem provides us with
          unparalleled access to an extensive reach of unique data.
        </p>
        <button
          className="
            mt-[35px] sm:mt-[40px] md:mt-[45px] lg:mt-[48.2px]
            w-[150px] sm:w-[160px] md:w-[180px] lg:w-[186px]
            h-[48px] sm:h-[50px] md:h-[55px] lg:h-[57px]
            rounded-full text-[12px] sm:text-[13px] md:text-[14px]
            bg-[linear-gradient(90deg,#FCB503_0%,#D23D03_100%)]
          "
        >
          Discover our edge!
        </button>
      </div>
    </section>
  );
}
